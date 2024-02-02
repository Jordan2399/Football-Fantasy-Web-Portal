"use client";
import React from "react";
import { SignInScreenForm } from "@/screens/form/signin.screen.form";
import Link from "next/link";
import { useMutation } from "@tanstack/react-query";
import { AuthenticationServicesType } from "@/services/authentication/type";
import { AuthenticationServices } from "@/services/authentication/authentication.services";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { initializeApp } from 'firebase/app';
import {
  GoogleAuthProvider,
  FacebookAuthProvider ,
  connectAuthEmulator,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { firebaseConfig } from "@/services/firebase/firebase";


initializeApp(firebaseConfig)
const auth  = getAuth()


export const SignInScreen: React.FC = () => {
  const router = useRouter();
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    // console.log('hello')
    // const result = await signInWithPopup(ourGoogleAuth, googleAuth);

    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = await result.user.getIdToken();

        // console.log('Google sign credentials:', credential)
        // console.log('Google sign credentials:', token)

        try {
          await mutateAsync({ email: (result.user.email as string), token: token! });
        } catch (e) { }

      })
    // console.log('Google sign credentioals:', result.user.refreshToken)
  }
  const loginWithFacebook = async () => {
    const provider = new FacebookAuthProvider();

    // console.log('hello')
    // const result = await signInWithPopup(ourGoogleAuth, googleAuth);

    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const token = await result.user.getIdToken();

        console.log('Google sign credentials:', credential)
        console.log('Google sign credentials:', token)

        try {
          await mutateAsync({ email: (result.user.email as string), token: token! });
        } catch (e) { }

      })
    // console.log('Google sign credentials:', result.user.refreshToken)
  }
  const { mutateAsync, isPending } = useMutation<
    AuthenticationServicesType.SignInRes,
    Error,
    AuthenticationServicesType.GoogleSignInProps
  >({
    mutationFn: (variables) => AuthenticationServices.SignInWithGoogle(variables),
    onSuccess: (data) => {
      Cookies.set("token", data.token);
      router.replace(data.url);
    },
    onError: (error) => {
      const AxiosErr = error as AxiosError;
      const err = AxiosErr?.response?.data as {
        message: string;
        path: "username" | "password";
      };
    },
  });

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-start w-[400px] h-[580px] bg-white p-4 border rounded-md shadow-md">
        <div className="flex flex-col justify-between items-start p-1.5 w-full h-full">
          <div className={"w-full"}>
            <h2 className={"text-[24px] font-bold text-slate-900"}>
              Welcome Back!
            </h2>
            <p className={"text-sm font-normal text-slate-400"}>
              Please enter your details to Sign in!
            </p>
          </div>
          <SignInScreenForm />
          <div
            className={
              "w-full h-full flex flex-col gap-2 items-center justify-between"
            }
          >
            <p className={"mt-3 text-[18px] font-bold text-slate-400"}>OR</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button onClick={loginWithGoogle}
                    className="w-full flex gap-4 items-center justify-center border border-gray-400 rounded p-2 px-4 py-2 h-9 text-sm font-medium rounded-md shadow-sm transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                      <path fill="none" d="M1 1h22v22H1z" />
                    </svg>
                    Google
                  </button>
                  <button onClick={loginWithFacebook}
                    className="w-full flex gap-4 items-center justify-center border border-gray-400 rounded p-2 px-4 py-2 h-9 text-sm font-medium rounded-md shadow-sm transition">
                    <svg 
                     xmlns="http://www.w3.org/2000/svg" 
                     viewBox="0 0 15 15"
                     className="h-5 w-5">
                    <path 
                      fill="#1877F2" 
                      d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                    />
                    <path fill="#ffffff" 
                      d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                    />
                    </svg>
                    Facebook
                  </button>
                </div>
            <div className={"mt-3 w-full text-center"}>
              <p className={"text-sm text-slate-700"}>
                Don't have an account ?
              </p>
              <Link
                className={"text-blue-600 leading-8 hover:underline"}
                href={"/auth/sign-up"}
              >
                Create
              </Link>
            </div>
            <p className={" text-xs text-slate-400 text-center"}>
              Copyrights (C) 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};