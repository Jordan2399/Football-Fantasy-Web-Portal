"use client";
import React from "react";
import { Button } from "@/components/button";
import { SignUpSchema, SignUpSchemaType } from "@/validation/form.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextBox } from "@/components/textbox";
import { useMutation } from "@tanstack/react-query";
import { AuthenticationServicesType } from "@/services/authentication/type";
import { AuthenticationServices } from "@/services/authentication/authentication.services";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Select } from "@/components/select";
export const SignUpScreenForm = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
    setError,
  } = useForm<SignUpSchemaType>({
    resolver: yupResolver(SignUpSchema),
    defaultValues: {
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      gender: "male",
      dob: "",
      password: "",
      cnf_password: "",
    },
    mode: "all",
  });
  const { mutateAsync, isPending } = useMutation<
    AuthenticationServicesType.SignUpRes,
    Error,
    AuthenticationServicesType.SignUpProps
  >({
    mutationFn: (variables) => AuthenticationServices.SignUp(variables),
    onSuccess: (data) => {
      router.replace(data.url);
    },
    onError: (error) => {
      const AxiosErr = error as AxiosError;
      const err = AxiosErr?.response?.data as {
        message: string;
        path:
          | "username"
          | "email"
          | "first_name"
          | "last_name"
          | "gender"
          | "dob"
          | "password"
          | "cnf_password";
      };
      setError(err.path, {
        type: "manual",
        message: err.message,
      });
    },
  });
  const onSubmit: SubmitHandler<SignUpSchemaType> = async (data) => {
    try {
      await mutateAsync(data);
    } catch (e) {}
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 flex flex-col gap-10 w-full"
    >
      <div className={"flex flex-row w-full h-fit gap-4"}>
        <div className={"w-full h-[50px]"}>
          <Controller
            name={"username"}
            control={control}
            render={({ field }) => (
              <TextBox
                id="username"
                disabled={isPending}
                variation="standard"
                placeholder="Enter Username"
                label="Username"
                {...field}
                errormessage={errors.username && errors.username?.message}
              />
            )}
          />
        </div>
        <div className={"w-full h-[50px]"}>
          <Controller
            name={"email"}
            control={control}
            render={({ field }) => (
              <TextBox
                disabled={isPending}
                id="email"
                variation="standard"
                placeholder="Enter Email Address"
                label="Email"
                {...field}
                errormessage={errors.email && errors.email?.message}
              />
            )}
          />
        </div>
      </div>
      <div className={"flex flex-row w-full h-fit gap-4"}>
        <div className={"w-full h-[50px]"}>
          <Controller
            name={"first_name"}
            control={control}
            render={({ field }) => (
              <TextBox
                disabled={isPending}
                id="first_name"
                variation="standard"
                placeholder="Enter First Name"
                label="First Name"
                {...field}
                errormessage={errors.first_name && errors.first_name?.message}
              />
            )}
          />
        </div>
        <div className={"w-full h-[50px]"}>
          <Controller
            name={"last_name"}
            control={control}
            render={({ field }) => (
              <TextBox
                disabled={isPending}
                id="last_name"
                variation="standard"
                placeholder="Enter Last Name"
                label="Last Name"
                {...field}
                errormessage={errors.last_name && errors.last_name?.message}
              />
            )}
          />
        </div>
      </div>
      <div className={"flex flex-row w-full h-fit gap-4"}>
        <div className={"w-full h-[50px]"}>
          <Controller
            name={"gender"}
            control={control}
            render={({ field }) => (
              <Select
                disabled={isPending}
                id="gender"
                variation="standard"
                label="Gender"
                innerLabel={"Gender"}
                option={[
                  {
                    label: "Male",
                    id: "male",
                  },
                  {
                    label: "Female",
                    id: "female",
                  },
                  {
                    label: "Other",
                    id: "other",
                  },
                ]}
                {...field}
                errormessage={errors.gender && errors.gender?.message}
              />
            )}
          />
        </div>

        <div className={"w-full h-[50px]"}>
          <Controller
            name={"dob"}
            control={control}
            render={({ field }) => (
              <TextBox
                disabled={isPending}
                id="dob"
                type={"date"}
                variation="standard"
                placeholder="Enter Date Of Birth"
                label="Date Of Birth"
                {...field}
                errormessage={errors.dob && errors.dob?.message}
              />
            )}
          />
        </div>
      </div>
      <div className={"flex flex-row w-full h-fit gap-4"}>
        <div className={"w-full h-[50px]"}>
          <Controller
            name={"password"}
            control={control}
            render={({ field }) => (
              <TextBox
                disabled={isPending}
                id="password"
                variation="password"
                placeholder="Enter Password"
                label="Password"
                {...field}
                errormessage={errors.password && errors.password?.message}
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
                id="cnf_password"
                variation="password"
                placeholder="Enter Confirm Password"
                label="Confirm Password"
                {...field}
                errormessage={
                  errors.cnf_password && errors.cnf_password?.message
                }
              />
            )}
          />
        </div>
      </div>
      <div className={"w-full h-[50px]"}>
        <Button
          type="submit"
          variation={isPending ? "loading-standard" : "standard"}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
