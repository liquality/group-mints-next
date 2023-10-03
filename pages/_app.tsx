import type { AppProps } from "next/app";
import {
  ThirdwebProvider,
  paperWallet,
  smartWallet,
  metamaskWallet,
} from "@thirdweb-dev/react";
import "../styles/globals.css";
import { BaseGoerli as ActiveChain } from "@thirdweb-dev/chains";
import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";

function GroupMintsApp({ Component, pageProps }: AppProps) {
  const config = {
    factoryAddress: "0x7f81fb5b32fA60DB8ddBa9db4d1A933CD07235e9",
    gasless: true,
  };

  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={ActiveChain}
      supportedWallets={[
        smartWallet(metamaskWallet(), config),
        smartWallet(
          paperWallet({
            paperClientId: process.env.NEXT_PUBLIC_PAPER_CLIENT_ID || "", // Get your paper client id from https://withpaper.com/sign-in
          }),
          config
        ),
      ]}
    >
      <Header />
      <Component {...pageProps}/>
      <Navbar />
    </ThirdwebProvider>
  );
}

export default GroupMintsApp;
