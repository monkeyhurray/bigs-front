'use client';
import React from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

const QueryProvider = ({ children }: React.PropsWithChildren) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
