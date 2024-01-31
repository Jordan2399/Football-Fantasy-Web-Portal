"use client";
import { TextBox } from "@/components/textbox";
import { Button } from "@/components/button";
import React, {useState} from "react";

export const ForgotPasswordScreenForm = () => {
  const [confirmScreen, setConfirmScreen] = useState<boolean>(false);

  return (
    <form className="mt-6 flex flex-col gap-10 w-full">
      {confirmScreen && (
        <div className={"mb-12 w-full h-fit flex flex-col items-center justify-center gap-2"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="120"
            height="120"
            fill="rgba(100,205,138,1)"
          >
           <path fill="none" d="M0 0h24v24H0z"></path>
           <path d="M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024 13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z"></path>
          </svg>
          <p className={"text-sm text-green-600 text-center"}>
            Please check your email inbox to verify your email.
          </p>
        </div>
      )}
      {!confirmScreen && (
        <>
          <div className={"w-full h-[50px]"}>
                <TextBox
                  id="email"
                  variation="standard"
                  placeholder="Enter Email"
                  label="Email"
                />
          </div>
          <div className={"w-full h-[50px]"}>
            <Button
              type="submit"
              variation={false ? "loading-standard" : "standard"}
            >
              Submit
            </Button>
          </div>
        </>
      )}
    </form>
  );
};
