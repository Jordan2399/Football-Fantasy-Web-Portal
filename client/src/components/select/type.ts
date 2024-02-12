import { SelectHTMLAttributes } from "react";

export interface SelectMainProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  option?: {
    label: string;
    id: string;
  }[];
  isLoading?: boolean;
  innerLabel?: string;
  label: string;
  isError?: boolean;
  errormessage?: string;
  defaultvalueforform?: string;
}

export interface SelectProps extends SelectMainProps {
  variation: "standard" | "outlined" | "edit";
}
