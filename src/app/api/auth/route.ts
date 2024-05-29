import { createHmac } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

type Data = { ok: boolean } | { error: string };
export async function POST(req: NextRequest) {
  const BOT_TOKEN = process.env.BOT_TOKEN;
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
  }

  const body = await req.json();
  if (!body.hash) {
    return NextResponse.json({
      error: 'Missing required field hash',
    }, { status: 400 });
  }

  if (!BOT_TOKEN) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }

  const data = Object.fromEntries(new URLSearchParams(body.hash));
  const isValid = await isHashValid(data, BOT_TOKEN);

  if (isValid) {
    return NextResponse.json({ ok: true });
  }

  return NextResponse.json({ error: 'Invalid hash' }, { status: 403 });
}

async function isHashValid(data: Record<string, string>, botToken: string) {
  const checkString = Object.keys(data)
    .filter((key) => key !== 'hash')
    .map((key) => `${key}=${data[key]}`)
    .sort()
    .join('\n');

  const secretKey = createHmac('sha256', 'WebAppData')
    .update(botToken)
    .digest();

  const signature = createHmac('sha256', secretKey)
    .update(checkString)
    .digest('hex');

  return data.hash === signature;
}
