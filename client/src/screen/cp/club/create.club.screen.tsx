"use client";
import React from "react";
import { CreateClubScreenForm } from "@/screen/form/create.club.screen.form";
import { ArrowLeft2 } from "iconsax-react";
import { useRouter } from "next/navigation";

export const CreateClubScreen = () => {
  const router = useRouter();
  return (
    <div className={"flex items-center justify-center h-screen"}>
      <div
        className={
          "flex flex-col items-center justify-start w-[400px] h-auto bg-white p-4 border rounded-md shadow-md"
        }
      >
        <div
          className={
            "flex flex-col justify-start items-start p-1.5 w-full h-full"
          }
        >
          <div className={"w-full"}>
            <div
              className={
                "w-full flex flex-row items-center justify-start gap-2 "
              }
            >
              <ArrowLeft2
                color="#020617
"
                className={"cursor-pointer"}
                onClick={router.back}
              />
              <h2 className={"text-[24px] font-bold text-slate-900"}>
                Create Club
              </h2>
            </div>
            <p className={"text-sm font-normal text-slate-400"}>
              Please enter your details to Create Club!
            </p>
          </div>
          <CreateClubScreenForm />
        </div>
      </div>
    </div>
  );
};
