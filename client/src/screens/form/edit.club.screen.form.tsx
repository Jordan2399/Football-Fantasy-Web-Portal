"use client";
import React, { useLayoutEffect } from "react";
import { Button } from "@/components/button";
import { EditClubSchema } from "@/validation/form.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TextBox } from "@/components/textbox";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { FileUpload } from "@/components/fileupload/fileupload";
import { ClubServices } from "@/services/club/club.services";
import { ClubServicesType } from "@/services/club/type";
export const EditClubScreenForm = () => {
  const params = useParams<{ id: string }>();

  const router = useRouter();
  const {
    data,
    refetch,
    isSuccess: isSuccess1,
  } = useQuery({
    queryKey: ["clubListDetails"],
    queryFn: async () =>
      ClubServices.ClubDetails({
        _id: params.id,
      }),
  });
  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors, dirtyFields },
    setError,
  } = useForm<ClubServicesType.Update>({
    resolver: yupResolver(EditClubSchema),
    values: {
      _id: params.id,
      name: "data?.name as string",
      image: data?.image,
    },
    mode: "all",
  });

  const { mutateAsync, isPending, isSuccess } = useMutation<
    ClubServicesType.ClubRes,
    Error,
    ClubServicesType.Update
  >({
    mutationFn: (variables) => ClubServices.Update(variables),
    onSuccess: (data) => {
      router.replace("/system/dashboard/clubs");
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
  const onSubmit: SubmitHandler<ClubServicesType.Update> = async (data) => {
    try {
      console.log(data.image);
      await mutateAsync({
        _id: "",
        name: data.name,
        image: data.image[0],
      });
    } catch (e) {}
  };
  useLayoutEffect(() => {
    refetch().then((r) => r);
  }, [isSuccess1]);
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
              id="name"
              disabled={isPending}
              variation="standard"
              placeholder="Enter Unique Club Name"
              label="Club Name"
              {...field}
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
          Update
        </Button>
      </div>
    </form>
  );
};
