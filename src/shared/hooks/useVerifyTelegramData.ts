import crypto from 'crypto';

// Определите типы параметров и возвращаемого значения
interface InitData {
  [key: string]: string;
}

export const useVerifyTelegramData = (initData: string, botToken: string): boolean => {
  const data = new URLSearchParams(initData);
  const hash = data.get('hash');
  if (!hash) {
    return false; // Если hash отсутствует, данные недействительны
  }
  data.delete('hash');

  const dataCheckString = [...data.entries()]
    .map(([key, value]) => `${key}=${value}`)
    .sort()
    .join('\n');

  const secretKey = crypto
    .createHmac('sha256', botToken)
    .update('WebAppData')
    .digest();

  const calculatedHash = crypto
    .createHmac('sha256', secretKey)
    .update(dataCheckString)
    .digest('hex');

  return calculatedHash === hash;
};
