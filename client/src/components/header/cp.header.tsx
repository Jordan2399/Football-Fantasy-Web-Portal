"use client";
import Link from "next/link";
import { Logout } from "iconsax-react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

export const CpHeader = () => {
  const router = useRouter();
  const path = usePathname();
  const Menu = () => (
    <div
      className={
        "sticky top-0 z-[10000000] flex flex-row w-full h-fit items-center justify-start gap-2"
      }
    >
      <Link className={"w-[20%] text-[26px] font-bold text-white "} href={"/"}>
        <img src="logo.png" className="h-14 w-15"/>
      </Link>
      <div
        className={
          "flex flex-row w-[50%%] h-fit items-center justify-between gap-8"
        }
      >
        <Link
          className={`text-sm  ${
            path === "/system/dashboard/clubs" ? "font-bold" : "font-normal"
          } text-white`}
          href={"/system/dashboard/clubs"}
        >
          Clubs
        </Link>
        <Link
          className={`text-sm  ${
            path === "/system/dashboard/players" ? "font-bold" : "font-normal"
          } text-white`}
          href={"/system/dashboard/players"}
        >
          Players
        </Link>
        <Link
          className={`text-sm  ${
            path === "/system/dashboard/matches" ? "font-bold" : "font-normal"
          } text-white`}
          href={"/system/dashboard/matches"}
        >
          Matches
        </Link>
      </div>
    </div>
  );
  const Account = () => (
    <div
      onClick={() => {
        Cookies.remove("token");
        location.replace("/auth/sign-in");
        location.reload();
      }}
      className={
        "cursor-pointer w-[130px] h-fit rounded flex flex-row gap-2 items-center ring-1 ring-white py-1.5 pl-1.5 pr-2.5 "
      }
    >
      <Logout color="#FFFFFF" />
      <p className={"text-white font-normal"}>Sign Out</p>
    </div>
  );
  return (
    <header
      className={
        "sticky top-0 px-[26px] flex flex-row  justify-between items-center  py-2 w-full h-fit bg-blue-700"
      }
    >
      <Menu />
      <Account />
    </header>
  );
};
