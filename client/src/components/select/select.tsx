import React from "react";
import { SelectProps, SelectStandard } from "@/components/select";

export const Select: React.FC<SelectProps> = (props) => {
  return (
    <>{props.variation === "standard" ? <SelectStandard {...props} /> : null}</>
  );
};
