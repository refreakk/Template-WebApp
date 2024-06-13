import React, { createContext, useEffect, useState } from "react";
import type { TelegramWebApps } from 'telegram-webapps-types-new';

interface IProps {
    children: React.ReactNode;
}

export const webAppContext = createContext<TelegramWebApps.WebApp>({} as TelegramWebApps.WebApp);

export const WebAppProvider = ({ children }: IProps) => {
    const [app, setApp] = useState({} as TelegramWebApps.WebApp);

    useEffect(() => {
        setApp(window.Telegram.WebApp);
    }, []);

    useEffect(() => {
        if (!app) return;
        if (app.ready) app.ready();
    }, [app]);

    return (
        <webAppContext.Provider value={app}>{children}</webAppContext.Provider>
    );
};
