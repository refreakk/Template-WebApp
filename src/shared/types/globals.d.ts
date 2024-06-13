import type { TelegramWebApps } from 'telegram-webapps-types-new';

declare global {
    interface Window {
        Telegram: TelegramWebApps.SDK;
    }
}

export {};