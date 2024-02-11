"use client";

"use client";
import React from "react";
import { Button } from "@/components/button";
import { CreateClubSchema } from "@/validation/form.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextBox } from "@/components/textbox";
import { useMutation } from "@tanstack/react-query";
import { AuthenticationServicesType } from "@/services/authentication/type";
import { AuthenticationServices } from "@/services/authentication/authentication.services";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { FileUpload } from "@/components/fileupload/fileupload";
import { ClubServices } from "@/services/club/club.services";
import { ClubServicesType } from "@/services/club/type";
import toast from "react-hot-toast";
export const CreateClubScreenForm = () => {
  const router = useRouter();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<ClubServicesType.Create>({
    resolver: yupResolver(CreateClubSchema),
    mode: "all",
  });
  const { mutateAsync, isPending, isSuccess } = useMutation<
    ClubServicesType.ClubRes,
    Error,
    ClubServicesType.Create
  >({
    mutationFn: (variables) => ClubServices.Create(variables),
    onSuccess: (data) => {
      toast.success(data.message);
      reset({
        name: "",
        image: "",
      });
    },
    onError: (error) => {
      const AxiosErr = error as AxiosError;
      const err = AxiosErr?.response?.data as {
        message: string;
        path: "name" | "image";
      };
      setError(err.path, {
        type: "manual",
        message: err.message,
      });
    },
  });
  const onSubmit: SubmitHandler<ClubServicesType.Create> = async (data) => {
    try {
      console.log(data.image);
      await mutateAsync({
        name: data.name,
        image: data.image[0],
      });
    } catch (e) {}
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-6 flex flex-col gap-10 w-full"
    >
      <div className={"w-full h-[50px]"}>
        <Controller
          name={"name"}
          control={control}
          render={({ field }) => (
            <TextBox
              {...field}
              id="name"
              disabled={isPending}
              variation="standard"
              placeholder="Enter Unique Club Name"
              label="Club Name"
              errormessage={errors.name && errors.name?.message}
            />
          )}
        />
      </div>
      <div className={"w-full h-[50px]"}>
        <FileUpload
          accept="image/png, image/jpeg, image/jpg"
          type={"file"}
          errormessage={errors.image && (errors.image.message as string)}
          label={"Club Image"}
          {...register("image")}
        />
      </div>
      <div className={"w-full h-[50px]"}>
        <Button
          type="submit"
          variation={isPending ? "loading-standard" : "standard"}
          isLoading={isPending}
          isSuccess={isSuccess}
        >
          Create
        </Button>
      </div>
    </form>
  );
};
