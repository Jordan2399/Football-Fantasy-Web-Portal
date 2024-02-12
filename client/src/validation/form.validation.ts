import * as Yup from "yup";

export const SignInSchema = Yup.object({
  uid: Yup.string().required(),
  password: Yup.string().required(),
}).strict();

export type SignInSchemaType = Yup.InferType<typeof SignInSchema>;
export const SignUpSchema = Yup.object({
  username: Yup.string().required(),
  first_name: Yup.string().required(),
  last_name: Yup.string().required(),
  dob: Yup.string().required(),
  gender: Yup.string().oneOf(["male", "female", "other"]).required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  cnf_password: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required(),
}).strict();

export type SignUpSchemaType = Yup.InferType<typeof SignUpSchema>;

export const ForgotPasswordSchema = Yup.object({
  email: Yup.string().email().required(),
}).strict();
export type ForgotPasswordSchemaType = Yup.InferType<
  typeof ForgotPasswordSchema
>;

export const CreateClubSchema = Yup.object().shape({
  name: Yup.string().required(),
  image: Yup.mixed().required(),
});
export type CreateAndEditClubSchemaType = Yup.InferType<
  typeof CreateClubSchema
>;

export const EditClubSchema = Yup.object().shape({
  _id: Yup.string().required(),
  name: Yup.string().required(),
  image: Yup.mixed().required(),
});
export type EditClubSchemaType = Yup.InferType<typeof EditClubSchema>;

export const MatchCreateSchema = Yup.object({
  team1: Yup.string().required(),
  team2: Yup.string()
    .required()
    .notOneOf([Yup.ref("team1")], "Team 2 must be different from Team 1"),
  team1players: Yup.array(Yup.string()).required(),
  team2players: Yup.array(Yup.string()).required(),
  match_time: Yup.string().required(),
});
export type MatchCreateSchemaType = Yup.InferType<typeof MatchCreateSchema>;
export const PlayerCreateSchema = Yup.object({
  name: Yup.string().required(),
  age: Yup.string().required(),
  player_type: Yup.string().required(),
  club_id: Yup.string().required(),
});
export type PlayerCreateSchemaType = Yup.InferType<typeof PlayerCreateSchema>;
export const ChangePasswordSchema = Yup.object({
  current_password: Yup.string().required(),
  new_password: Yup.string().required(),
  cnf_password: Yup.string()
    .oneOf([Yup.ref("new_password")], "Passwords must match")
    .required(),
});
export type ChangePasswordSchemaType = Yup.InferType<
  typeof ChangePasswordSchema
>;

export const UpdateProfileSchema = Yup.object({
  first_name: Yup.string(),
  last_name: Yup.string(),
  dob: Yup.string(),
  gender: Yup.string().oneOf(["male", "female", "other"]),
});
export type UpdateProfileSchemaType = Yup.InferType<typeof UpdateProfileSchema>;
