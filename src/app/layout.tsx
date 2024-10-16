import { AntdRegistry } from "@ant-design/nextjs-registry";
import type { Metadata } from "next";

import StyledComponentsRegistry from "@/lib/registry";
import { themeConfig } from "@/theme/theme.config";
import { ConfigProvider } from "antd";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "BMH | Home",
  description: "BMH description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <ConfigProvider theme={themeConfig}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
