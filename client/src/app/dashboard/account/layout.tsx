"use client";
import React from "react";
import { TabContextProvider } from "@/components/tab/tab.context";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { Logout } from "iconsax-react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <div
      className={
        "rounded-md shadow mt-6 p-[26px] w-full min-h-[500px] h-auto bg-white"
      }
    >
      <div className={"flex flex-row  gap-4 justify-start w-full h-[60px]  "}>
        <h2 className={"text-xl font-semibold mb-3 text-slate-800 "}>
          My Account
        </h2>
        <div
          onClick={() => {
            Cookies.remove("token");
            location.replace("/auth/sign-in");
            location.reload();
          }}
          className={"pb-4 cursor-pointer"}
        >
          <Logout size="20" color="#555555" />
        </div>
      </div>
      <TabContextProvider>
        <div className={"w-full h-auto px-3.5 py-4"}>{children}</div>
      </TabContextProvider>
    </div>
  );
}
