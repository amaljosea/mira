"use client";

import { ReactNode } from "react";
import { QueryParamProvider } from "use-query-params";
import NextAdapterApp from "next-query-params/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FuelProviderWrapper from "@/src/core/providers/FuelProviderWrapper";
import DisclaimerWrapper from "@/src/core/providers/DisclaimerWrapper";

type Props = {
  children: ReactNode;
};

const queryClient = new QueryClient();

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <QueryParamProvider adapter={NextAdapterApp}>
        <FuelProviderWrapper>
          <DisclaimerWrapper>{children}</DisclaimerWrapper>
        </FuelProviderWrapper>
      </QueryParamProvider>
    </QueryClientProvider>
  );
};

export default Providers;
