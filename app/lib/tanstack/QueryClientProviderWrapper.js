"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { queryClient } from "./queryCLient";

const QueryClientProviderWrapper = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClientProviderWrapper;
