"use client";
import React from "react";
import type { Metadata } from "next";
import { Header } from "@/components/header/header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header variation={"for-client"} />
      <main className={"px-[26px] py-[26px]"}>{children}</main>
    </>
  );
}
