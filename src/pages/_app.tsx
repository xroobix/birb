import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
import "~/styles/globals.css";
import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps: { ...pageProps } }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Head>
        <title>Birb</title>
        <meta name="description" content="🐦" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position="bottom-center" />
      <Component {...pageProps} />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
