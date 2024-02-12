import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Account Details",
};
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
