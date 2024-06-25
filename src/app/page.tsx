"use client";

import { useContext } from "react";
import { webAppContext } from "./context";

export default function Home() {
  const app = useContext(webAppContext);
  
  return (
    <>
    {app.version ? (
      <div className="h-full w-full text-center pt-4">
        <code className="">{app.colorScheme}</code>
        <h3 className="font-bold mb-1 text-xl">Welcome {app.initDataUnsafe.user?.first_name}!</h3>
        <div className="font-medium text-sm text-center">I&apos;m Mini App for Telegram</div>
        <a className="mt-6 block text-lg text-cyan-500 font-bold" href="https://t.me/thismisterit">My Telegram Channel</a>
      </div>
      ) : (
        "loading"
      )}
    </>
  );
}
