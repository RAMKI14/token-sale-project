import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultConfig,
  RainbowKitProvider
} from "@rainbow-me/rainbowkit";
import {
  WagmiProvider,
  http
} from "wagmi";
import { sepolia } from "wagmi/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "Token Sale DApp",
  projectId: import.meta.env.VITE_WC_PROJECT_ID,
  chains: [sepolia],
  transports: {
    [sepolia.id]: http()
  }
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </React.StrictMode>
);
