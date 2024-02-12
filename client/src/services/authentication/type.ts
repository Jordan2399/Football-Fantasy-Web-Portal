export namespace AuthenticationServicesType {
  export interface SignInProps {
    uid: string;
    password: string;
  }
  export interface GoogleSignInProps {
    email: string;
    token: string;
  }
  
  export interface SignInRes {
    message: string;
    url: string;
    token: string;
  }
  export interface SignUpProps {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    gender: "male" | "female" | "other";
    dob: string;
    password: string;
    cnf_password: string;
  }
  export interface SignUpRes {
    message: string;
    url: string;
  }
  export interface ForgotPasswordProps {
    email: string;
  }
  export interface ForgotPasswordRes {
    message: string;
    url: string | undefined;
  }

  export interface UpdatedRes {
    message: string;
  }
  export interface UserProfile {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    gender: "male" | "female" | "other";
    dob: string;
    password: string;
    cnf_password: string;
    role: string;
  }
  export interface UserProfileUpdate {
    first_name?: string | undefined;
    last_name?: string | undefined;
    dob?: string | undefined;
    gender?: string | undefined;
  }
  export interface ChangePassword {
    current_password: string;
    new_password: string;
    cnf_password: string;
  }
}
