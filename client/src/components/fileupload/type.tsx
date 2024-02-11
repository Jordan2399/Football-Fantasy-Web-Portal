import React from "react";

export interface FIleUploadProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errormessage?: any;
}
