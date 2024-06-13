"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WebAppProvider } from "../context";

interface IPropsProviders {
    children: React.ReactNode,
}

const Providers = ({children}: IPropsProviders) => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <WebAppProvider>
                {children}
            </WebAppProvider>
        </QueryClientProvider>
    )
}

export default Providers;