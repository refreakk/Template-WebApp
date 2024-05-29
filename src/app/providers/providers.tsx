"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IPropsProviders {
    children: React.ReactNode,
}

const Providers = ({children}: IPropsProviders) => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}

export default Providers;