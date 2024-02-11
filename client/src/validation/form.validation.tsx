import * as Yup from "yup";

export const SignInSchema = Yup.object({
  username: Yup.string().required(),
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
  team2: Yup.string().required(),
  team1players: Yup.array(Yup.string()).required(),
  team2players: Yup.array(Yup.string()).required(),
  match_time: Yup.string().required(),
});
export type MatchCreateSchemaType = Yup.InferType<typeof MatchCreateSchema>;
