'use client';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function makeQueryClient() {
    return new QueryClient({
        defaultOptions: {
            queries: {
                // By default, queries will not refetch on window focus
                // and will be considered fresh for 1 minute.
                // This can be adjusted based on your application's needs.
                refetchOnWindowFocus: false,
                staleTime: 1000 * 60 * 1, // 1 minute
            },
        }
    })
}

let queryClient: QueryClient | null = null;

function getQueryClient() {
  if (typeof window === 'undefined') {
    // If we're on the server, we create a new QueryClient instance
    return makeQueryClient();
  } else {
    // If we're on the client, we use a singleton pattern to reuse the same QueryClient instance
    // across the application, unless it has been explicitly set to null.
    // This helps in maintaining the state of queries across different components.
    if (!queryClient) queryClient = makeQueryClient();
    return queryClient;
  }
}

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const client = getQueryClient();

  return (
    <QueryClientProvider client={client}>
      {children}
      {/* Optional: add devtools only on development */}
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}