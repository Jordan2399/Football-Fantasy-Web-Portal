"use client";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  PlayerCreateSchema,
  PlayerCreateSchemaType,
} from "@/validation/form.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { ClubServices } from "@/services/club/club.services";
import { PlayerServiceType } from "@/services/player/type";
import { PlayerServices } from "@/services/player/player.services";
import { TextBox } from "@/components/textbox";
import { Button } from "@/components/button";
import React from "react";
import { Select } from "@/components/select";
import toast from "react-hot-toast";

export const CreatePlayerScreenForm = () => {
  const { data } = useQuery({
    queryKey: ["clubList"],
    queryFn: async () => ClubServices.List(),
  });
  const {
    setError,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<PlayerCreateSchemaType>({
    resolver: yupResolver(PlayerCreateSchema),
    mode: "all",
  });

  const { mutateAsync, isPending, isSuccess } = useMutation<
    PlayerServiceType.res,
    Error,
    PlayerServiceType.Create
  >({
    mutationFn: (data) => PlayerServices.Create(data),
    onSuccess: (res) => {
      toast.success(res.message);
      reset({
        name: "",
        age: "",
      });
    },
    onError: (error) => {
      const AxiosErr = error as AxiosError;
      const err = AxiosErr?.response?.data as {
        message: string;
        path: "name" | "age" | "player_type" | "club_id";
      };
      setError(err.path, {
        type: "manual",
        message: err.message,
      });
    },
  });

  const onSubmit: SubmitHandler<PlayerCreateSchemaType> = async (data) => {
    try {
      console.log(data);
      await mutateAsync(data as PlayerServiceType.Create);
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
              placeholder="Enter Player Name"
              label="Player Name"
              errormessage={errors.name && errors.name?.message}
            />
          )}
        />
      </div>

      <div className={"w-full h-[50px]"}>
        <Controller
          name={"age"}
          control={control}
          render={({ field }) => (
            <TextBox
              {...field}
              id="name"
              disabled={isPending}
              variation="standard"
              placeholder="Enter Age"
              label="Player Age"
              errormessage={errors.age && errors.age?.message}
            />
          )}
        />
      </div>

      <div className={"w-full h-[50px]"}>
        <Controller
          name={"player_type"}
          control={control}
          render={({ field }) => (
            <Select
              label={"Player Type"}
              variation={"standard"}
              innerLabel={"Player Type"}
              {...field}
              defaultvalueforform={"Clubs"}
              option={[
                {
                  label: "Goalkipper",
                  id: "goalkipper",
                },
                {
                  label: "Defender",
                  id: "defender",
                },
                {
                  label: "midfielder",
                  id: "Midfielder",
                },
                {
                  label: "forward",
                  id: "Forward",
                },
              ]}
              errormessage={errors.player_type && errors.player_type?.message}
            />
          )}
        />
      </div>
      <div className={"w-full h-[50px]"}>
        <Controller
          name={"club_id"}
          control={control}
          render={({ field }) => (
            <Select
              label={"Chose CLub"}
              variation={"standard"}
              innerLabel={"Clubs"}
              {...field}
              defaultvalueforform={"Clubs"}
              option={data?.map((value) => ({
                id: value._id,
                label: value.name,
              }))}
              errormessage={errors.club_id && errors.club_id?.message}
            />
          )}
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
