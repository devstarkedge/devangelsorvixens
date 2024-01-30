import Aos from "aos";
import Head from "next/head";
import React, { useEffect } from "react";
import Header from "@/components/others/Header";
import Footer from "@/components/others/Footer";

import { PageNameType } from "@/types";

import bg from "@/assets/image/models/model-bg-removed.png";

/**
 * Props for the RootLayout component
 */
interface LayoutProps extends PageNameType {
  /**
   * Metadata for the page
   */
  metadata?: {
    title: string;
    description?: string;
  };
  /**
   * The content to be rendered within the layout
   */
  children?: React.ReactNode;
}

/**
 * RootLayout component provides a consistent layout for the application.
 * It includes a dynamic title, header, body, and footer.
 *
 * @param {LayoutProps} props - The props for the RootLayout component
 * @returns {JSX.Element} - The rendered RootLayout component
 */
export default function RootLayout({
  page,
  showAt,
  metadata,
  children,
}: LayoutProps): JSX.Element {
  useEffect(() => {
    Aos.init({
      duration: 700,
    });
  }, []);

  return (
    <div className="w-full flex flex-col justify-start items-center bg-black text-white !saturate-200">
      {/* Dynamic page title */}
      <Head>
        <title>
          {metadata?.title
            ? `${metadata.title} | Angels or Vixens OnlyFans Agency | The #1 best OnlyFans Managers`
            : "Angels or Vixens OnlyFans Agency | The #1 best OnlyFans Managers"}
        </title>
      </Head>

      {/* Application header */}
      <Header page={page} showAt={showAt} />

      {/* Application body */}
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
        className="w-full flex-grow overflow-hidden !bg-bottom !saturate-50 !bg-fixed !bg-no-repeat !bg-contain"
      >
        <div className="min-h-[100vh] w-full h-full flex-grow bg-black/70 backdrop-blur-none saturate-200 text-white">
          {children}
        </div>
      </div>

      {/* Application footer */}
      <Footer />
    </div>
  );
}
