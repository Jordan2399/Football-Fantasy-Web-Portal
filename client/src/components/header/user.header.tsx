import Link from "next/link";
import { ArrowRight2, User } from "iconsax-react";

export const UserHeader = () => {
  const Logo = () => (
    <Link className={"text-[26px] font-bold text-white "} href={"/dashboard"}>
      <img src="logo.png" className="h-14 w-15"/>
    </Link>
  );
  const Account = () => (
    <Link
      className={
        "rounded flex flex-row gap-2 items-center ring-1 ring-white p-1.5"
      }
      href={"/dashboard/account/history"}
    >
      <User color="#FFFFFF" />
      <p className={"text-white font-normal"}>Account</p>
      <ArrowRight2 color="#FFFFFF" />
    </Link>
  );
  return (
    <header
      className={
        "sticky top-0 px-[26px] flex flex-row justify-between items-center  py-2 w-full h-fit bg-blue-700"
      }
    >
      <Logo />
      <Account />
    </header>
  );
};
