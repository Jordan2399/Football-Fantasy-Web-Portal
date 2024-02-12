import React from "react";

export interface ButtonMainProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTittle?: string;
  isSuccess?: boolean;
  isLoading?: boolean;
}

export interface ButtonProps extends ButtonMainProps {
  variation: "standard" | "outlined" | "loading-standard" | "loading-outlined";
  isSuccess?: boolean;
  isLoading?: boolean;
}
