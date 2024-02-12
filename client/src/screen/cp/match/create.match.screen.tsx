"use client";
import React from "react";
import { ArrowLeft2 } from "iconsax-react";
import { useRouter } from "next/navigation";
import { CreateMatchScreenForm } from "@/screen/form/create.match.screen.form";
import { CreateMatchScreenForm2 } from "@/screen/form/create.match.screen.form2";
// import { CreateMatchScreenForm2 } from "@/screen/form/create.match.screen.form2";

export const CreateMatchScreen = () => {
  const router = useRouter();
  return (
    <div className={"py-12 flex items-center justify-center h-screen"}>
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
                Create Match
              </h2>
            </div>
            <p className={"text-sm font-normal text-slate-400"}>
              Please enter your details to Match!
            </p>
          </div>
          {/* <CreateMatchScreenForm /> */}
          <CreateMatchScreenForm2 />
        </div>
      </div>
    </div>
  );
};
