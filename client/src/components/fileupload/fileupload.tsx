"use client";

import { FIleUploadProps } from "@/components/fileupload/type";
import React, { ChangeEvent, forwardRef, useState } from "react";

export const FileUpload: React.FC<FIleUploadProps> = forwardRef<
  HTMLInputElement,
  FIleUploadProps
>((props, ref) => {
  return (
    <div className={"w-full flex flex-col min-h-14 max-h-20"}>
      <div className={"w-full flex flex-row items-center justify-between "}>
        <label className={"text-sm font-medium text-slate-600 "}>
          {props.label}
        </label>
      </div>
      <input
        className={
          "w-full file:border-0 file:placeholder:text-slate-100 file:bg-slate-300 file:rounded-md file:text-slate-900  mt-1"
        }
        {...props}
        ref={ref}
      />
      <p className={"mt-1 text-xs text-red-600"}>{props.errormessage}</p>
    </div>
  );
});
