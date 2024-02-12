"use client";
import { useRouter } from "next/navigation";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  ChangePasswordSchema,
  ChangePasswordSchemaType,
  UpdateProfileSchema,
  UpdateProfileSchemaType,
} from "@/validation/form.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AuthenticationServicesType } from "@/services/authentication/type";
import { AuthenticationServices } from "@/services/authentication/authentication.services";
import { AxiosError } from "axios";
import { TextBox } from "@/components/textbox";
import { Button } from "@/components/button";
import React, { useState } from "react";
import { Select } from "@/components/select";

export const AccountScreenForm = () => {
  const [passDiv, setPassDiv] = useState<boolean>(true);
  const { isLoading, data, isError, refetch } = useQuery({
    queryKey: ["me-profile"],
    queryFn: AuthenticationServices.Profile,
  });
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
    setError,
  } = useForm<UpdateProfileSchemaType>({
    resolver: yupResolver(UpdateProfileSchema),
    defaultValues: {
      first_name: data?.first_name,
      last_name: data?.last_name,
      dob: data?.dob,
      gender: data?.gender,
    },
    mode: "all",
  });

  const [fn, setFn] = useState(true);
  const [ln, setln] = useState(true);
  const [db, setdb] = useState(true);
  const [gdn, setgdn] = useState(true);
  const { mutateAsync, isPending, isSuccess } = useMutation<
    AuthenticationServicesType.UpdatedRes,
    Error,
    AuthenticationServicesType.UserProfileUpdate
  >({
    mutationFn: (variables) => AuthenticationServices.ProfileUpdate(variables),
    onSuccess: (data) => {
      location.reload();
    },
    onError: (error) => {
      const AxiosErr = error as AxiosError;
      const err = AxiosErr?.response?.data as {
        message: string;
        path: "first_name" | "last_name" | "dob" | "gender";
      };
      setError(err.path, {
        type: "manual",
        message: err.message,
      });
    },
  });
  const onSubmit: SubmitHandler<UpdateProfileSchemaType> = async (data) => {
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
      <>
        <div className={"cursor-pointer flex flex-col w-full h-[50px] gap-2"}>
          <p className={"text-sm text-slate-700 font-medium"}>Username</p>
          <div
            className={
              "w-full flex flex-row justify-between items-center h-[30px]"
            }
          >
            <p>{data?.username}</p>
          </div>
        </div>
        <div className={"cursor-pointer flex flex-col w-full h-[50px] gap-2"}>
          <p className={"text-sm text-slate-700 font-medium"}>Email</p>
          <div
            className={
              "w-full flex flex-row justify-between items-center h-[30px]"
            }
          >
            <p>{data?.email}</p>
          </div>
        </div>
        {fn ? (
          <div className={"cursor-pointer flex flex-col w-full h-[50px] gap-2"}>
            <p className={"text-sm text-slate-700 font-medium"}>First Name</p>
            <div
              className={
                "w-full flex flex-row justify-between items-center h-[30px]"
              }
            >
              <p>{data?.first_name}</p>
              <div
                className={"text-blue-700"}
                onClick={() => {
                  setFn(false);
                  setln(true);
                  setdb(true);
                  setgdn(true);
                }}
              >
                Change
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={"w-full h-[50px]"}>
              <Controller
                name={"first_name"}
                control={control}
                render={({ field }) => (
                  <TextBox
                    disabled={isPending}
                    variation="standard"
                    placeholder="Enter First Name"
                    label="First Name"
                    {...field}
                    errormessage={
                      errors.first_name && errors.first_name?.message
                    }
                  />
                )}
              />
            </div>
            <div className={"w-full h-[50px]"}>
              <Button
                type="submit"
                variation={isPending ? "loading-standard" : "standard"}
                isLoading={isLoading}
                isSuccess={isSuccess}
              >
                Submit
              </Button>
            </div>
            <div
              onClick={() => {
                setFn(true);
                setln(true);
                setdb(true);
                setgdn(true);
              }}
              className={"pb-6 w-full h-[50px]"}
            >
              <Button type="button" variation={"outlined"}>
                Cancel
              </Button>
            </div>
          </>
        )}
        {ln ? (
          <div className={"cursor-pointer flex flex-col w-full h-[50px] gap-2"}>
            <p className={"text-sm text-slate-700 font-medium"}>Last Name</p>
            <div
              className={
                "w-full flex flex-row justify-between items-center h-[30px]"
              }
            >
              <p>{data?.last_name}</p>
              <div
                className={"text-blue-700"}
                onClick={() => {
                  setFn(true);
                  setln(false);
                  setdb(true);
                  setgdn(true);
                }}
              >
                Change
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={"w-full h-[50px]"}>
              <Controller
                name={"last_name"}
                control={control}
                render={({ field }) => (
                  <TextBox
                    disabled={isPending}
                    variation="standard"
                    placeholder="Enter Last Name"
                    label="Last Name"
                    {...field}
                    errormessage={errors.last_name && errors.last_name?.message}
                  />
                )}
              />
            </div>
            <div className={"w-full h-[50px]"}>
              <Button
                type="submit"
                variation={isPending ? "loading-standard" : "standard"}
                isLoading={isLoading}
                isSuccess={isSuccess}
              >
                Submit
              </Button>
            </div>
            <div
              onClick={() => {
                setFn(true);
                setln(true);
                setdb(true);
                setgdn(true);
              }}
              className={"pb-6 w-full h-[50px]"}
            >
              <Button type="button" variation={"outlined"}>
                Cancel
              </Button>
            </div>
          </>
        )}
        {gdn ? (
          <div className={"cursor-pointer flex flex-col w-full h-[50px] gap-2"}>
            <p className={"text-sm text-slate-700 font-medium"}>Gender</p>
            <div
              className={
                "w-full flex flex-row justify-between items-center h-[30px]"
              }
            >
              <p>{data?.gender}</p>
              <div
                className={"text-blue-700"}
                onClick={() => {
                  setFn(true);
                  setln(true);
                  setdb(true);
                  setgdn(false);
                }}
              >
                Change
              </div>
            </div>
          </div>
        ) : (
          <>
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
              <Button
                type="submit"
                variation={isPending ? "loading-standard" : "standard"}
                isLoading={isLoading}
                isSuccess={isSuccess}
              >
                Submit
              </Button>
            </div>
            <div
              onClick={() => {
                setFn(true);
                setln(true);
                setdb(true);
                setgdn(true);
              }}
              className={"pb-6 w-full h-[50px]"}
            >
              <Button type="button" variation={"outlined"}>
                Cancel
              </Button>
            </div>
          </>
        )}

        {db ? (
          <div className={"cursor-pointer flex flex-col w-full h-[50px] gap-2"}>
            <p className={"text-sm text-slate-700 font-medium"}>
              Date of Birth
            </p>
            <div
              className={
                "w-full flex flex-row justify-between items-center h-[30px]"
              }
            >
              <p>{data?.dob}</p>
              <div
                className={"text-blue-700"}
                onClick={() => {
                  setFn(true);
                  setln(true);
                  setdb(false);
                  setgdn(true);
                }}
              >
                Change
              </div>
            </div>
          </div>
        ) : (
          <>
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

            <div className={"w-full h-[50px]"}>
              <Button
                type="submit"
                variation={isPending ? "loading-standard" : "standard"}
                isLoading={isLoading}
                isSuccess={isSuccess}
              >
                Submit
              </Button>
            </div>
            <div
              onClick={() => {
                setFn(true);
                setln(true);
                setdb(true);
                setgdn(true);
              }}
              className={"pb-6 w-full h-[50px]"}
            >
              <Button type="button" variation={"outlined"}>
                Cancel
              </Button>
            </div>
          </>
        )}
      </>
    </form>
  );
};
