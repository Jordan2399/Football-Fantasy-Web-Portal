import React, { useEffect, useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { MatchServices } from "@/services/match/match.services";
import { ClubServices } from "@/services/club/club.services";
// import { MultipleSelect, Select, Button, TextBox } from "@/components";
import { MatchCreateSchema, MatchCreateSchemaType } from "@/validation/form.validation";
import { MatchServicesType } from "@/services/match/type";
import { Select } from "@/components/select";
import { TextBox } from "@/components/textbox";
import { Button } from "@/components/button";
import { MPlayer } from "@/components/multipleselect/type";
import { MultiSelect } from "@/components/multipleselect/multi.select";

// interface PlayerOption {
//   label: string;
//   value: string;
// }

// // Explicitly type the useState call
// const [teamAPlayers, setTeamAPlayers] = useState<PlayerOption[]>([]);
// const [teamBPlayers, setTeamBPlayers] = useState<PlayerOption[]>([]);


export const CreateMatchScreenForm2 = () => {
  const [teamA, setTeamA] = useState("");
  const [teamB, setTeamB] = useState("");
  const [teamAPlayers, setTeamAPlayers] = useState<MPlayer[]>([]);
  const [teamBPlayers, setTeamBPlayers] = useState<MPlayer[]>([]);

  const {
    setError,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<MatchCreateSchemaType>({
    resolver: yupResolver(MatchCreateSchema),
    mode: "all",
  });

  const { mutateAsync, isPending } = useMutation<string, Error, MatchServicesType.CreateMatch>({
    mutationFn: MatchServices.Create,
    onSuccess: () => toast.success("Created"),
    onError: (error) => {
      const AxiosErr = error as AxiosError;
      const err = AxiosErr?.response?.data as {
        message: string;
        path:
        | "team1"
        | "team2"
        | "team1players"
        | "team2players"
        | "match_time";
      };
      setError(err.path, {
        type: "manual",
        message: err.message,
      });
    },
  });

  // const ClubList = useQuery(["clubList"], ClubServices.List);
  const ClubList = useQuery({
    queryKey: ["clubList"],
    queryFn: async () => ClubServices.List(),
  });
  const fetchTeamPlayers = (teamId: string, isTeamA: boolean) => {
    console.log('fetch for isTeamA', isTeamA)
    ClubServices.ClubDetails({ _id: teamId }).then((response) => {
      const playersOptions = response.players.map(player => ({
        label: player.name,
        value: player._id,
      }));
      if (isTeamA) {
        setTeamAPlayers(playersOptions);
      } else {
        setTeamBPlayers(playersOptions);
      }
    });
  };

  useEffect(() => {
    if (teamA) fetchTeamPlayers(teamA, true);
  }, [teamA]);

  useEffect(() => {
    if (teamB) fetchTeamPlayers(teamB, false);
  }, [teamB]);

  const onSubmit: SubmitHandler<MatchCreateSchemaType> = async (data) => {
    try {
      await mutateAsync(data as MatchServicesType.CreateMatch);
    } catch (e) { }
  };


  console.log('team1players', watch('team1players'))
  console.log('team1', watch('team1'))

  console.log('team2players', watch('team2players'))
  console.log('team2', watch('team2'))


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-6 flex flex-col gap-10 w-full">
      {/* Team A Selection */}
      <Controller
        name="team1"
        control={control}
        render={({ field }) => (
          //   <Select
          //   label={"Team A"}
          //   variation={"standard"}
          //   innerLabel={"Team A"}
          //   {...field}
          //   // onSelect={(event) => setTeamA(event.currentTarget.value)}
          //   onChange={(event) => setTeamA(event.currentTarget.value)}
          //   defaultvalueforform={"Team"}
          //   option={ClubList.data?.map((value) => ({
          //     id: value._id,
          //     label: value.name,
          //   }))}
          //   errormessage={errors.team1 && errors.team1?.message}
          // />
          <Select
            label="Team A"
            variation="standard"
            innerLabel="Team A"
            defaultvalueforform={"Team"}
            onChange={(e) => {
              setTeamA(e.target.value);
              field.onChange(e); // Ensure react-hook-form registers the change
            }}
            option={ClubList.data?.map(value => ({ id: value._id, label: value.name }))}
            errormessage={errors.team1?.message}
          />
        )}
      />
      {/* Team A Players Selection */}
      {teamA && (
        <Controller
          name="team1players"
          control={control}
          render={({ field }) => (
            <MultiSelect
              label="Select player for team A"
              option={teamAPlayers}
              value={field.value as string[] || []}
              onChange={(selected)=>field.onChange(selected)}

              errormessage={errors.team1players?.message}
            />
          )}
        />
      )}

      {/* Team B Selection */}
      <Controller
        name="team2"
        control={control}
        render={({ field }) => (
          <Select
            label="Team B"
            variation="standard"
            innerLabel="Team B"
            defaultvalueforform={"Team"}
            onChange={(e) => {
              setTeamB(e.target.value);
              field.onChange(e); // Ensure react-hook-form registers the change
            }}
            option={ClubList.data?.map(value => ({ id: value._id, label: value.name }))}
            errormessage={errors.team2?.message}
          />
        )}
      />
      {/* Team B Players Selection */}
      {teamB && (
        <Controller
          name="team2players"
          control={control}
          render={({ field }) => (
            <MultiSelect
              option={teamBPlayers}
              label="Select player for team B"
              value={field.value as string[] || []}
              onChange={(selected)=>field.onChange(selected)}
              errormessage={errors.team2players?.message}
            />
          )}
        />
      )}

      {/* Match Time Input */}
      <Controller
        name="match_time"
        control={control}
        render={({ field }) => (
          <TextBox
            type="datetime-local"
            {...field}
            disabled={isPending}
            variation="standard"
            placeholder="Match Time"
            label="Match Time"
            errormessage={errors.match_time?.message}
          />
        )}
      />

      {/* Submit Button */}
      <Button
        type="submit"
        variation={isPending ? "loading-standard" : "standard"}
        isLoading={isPending}
      >
        Create
      </Button>
    </form>
  );
};
