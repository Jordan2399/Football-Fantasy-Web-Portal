"use client";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  ChangePasswordSchema,
  ChangePasswordSchemaType,
} from "@/validation/form.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { AuthenticationServicesType } from "@/services/authentication/type";
import { AuthenticationServices } from "@/services/authentication/authentication.services";
import { AxiosError } from "axios";
import { TextBox } from "@/components/textbox";
import { Button } from "@/components/button";
import React, { useState } from "react";

export const ChangePasswordScreenPassword = () => {
  const [passDiv, setPassDiv] = useState<boolean>(true);

  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
    setError,
  } = useForm<ChangePasswordSchemaType>({
    resolver: yupResolver(ChangePasswordSchema),
    defaultValues: {
      current_password: "",
      new_password: "",
      cnf_password: "",
    },
    mode: "all",
  });
  const { mutateAsync, isPending } = useMutation<
    AuthenticationServicesType.UpdatedRes,
    Error,
    AuthenticationServicesType.ChangePassword
  >({
    mutationFn: (variables) => AuthenticationServices.ChangePassword(variables),
    onSuccess: (data) => {
      location.reload();
    },
    onError: (error) => {
      const AxiosErr = error as AxiosError;
      const err = AxiosErr?.response?.data as {
        message: string;
        path: "current_password" | "new_password" | "cnf_password";
      };
      setError(err.path, {
        type: "manual",
        message: err.message,
      });
    },
  });
  const onSubmit: SubmitHandler<ChangePasswordSchemaType> = async (data) => {
    try {
      console.log(data);
      await mutateAsync(data);
    } catch (e) {}
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[40%] mt-6 flex flex-col gap-10"
    >
      {passDiv ? (
        <div className={"cursor-pointer flex flex-col w-full h-[50px] gap-2"}>
          <p className={"text-sm text-slate-700 font-medium"}>
            Current Password
          </p>
          <div
            className={
              "w-full flex flex-row justify-between items-center h-[30px]"
            }
          >
            <p>***************************</p>
            <div className={"text-blue-700"} onClick={() => setPassDiv(false)}>
              Change
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={"w-full h-[50px]"}>
            <Controller
              name={"current_password"}
              control={control}
              render={({ field }) => (
                <TextBox
                  disabled={isPending}
                  id="password"
                  variation="password"
                  placeholder="Enter Password"
                  label="Current Password"
                  {...field}
                  errormessage={
                    errors.current_password && errors.current_password?.message
                  }
                />
              )}
            />
          </div>
          <div className={"w-full h-[50px]"}>
            <Controller
              name={"new_password"}
              control={control}
              render={({ field }) => (
                <TextBox
                  disabled={isPending}
                  id="password"
                  variation="password"
                  placeholder="Enter Password"
                  label="New Password"
                  {...field}
                  errormessage={
                    errors.new_password && errors.new_password?.message
                  }
                />
              )}
            />
          </div>
          <div className={"w-full h-[50px]"}>
            <Controller
              name={"cnf_password"}
              control={control}
              render={({ field }) => (
                <TextBox
                  disabled={isPending}
                  id="password"
                  variation="password"
                  placeholder="Enter Password"
                  label="New Confrim Password"
                  {...field}
                  errormessage={
                    errors.cnf_password && errors.cnf_password?.message
                  }
                />
              )}
            />
          </div>
          <div className={"w-full h-[50px]"}>
            <Button
              type="submit"
              variation={isPending ? "loading-standard" : "standard"}
            >
              Submit
            </Button>
          </div>
          <div
            onClick={() => setPassDiv(true)}
            className={"pb-6 w-full h-[50px]"}
          >
            <Button type="button" variation={"outlined"}>
              Cancel
            </Button>
          </div>
        </>
      )}
    </form>
  );
};
