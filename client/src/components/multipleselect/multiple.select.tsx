"use client";
import React, { useEffect, useState } from "react";
import { MultipleSelectProps } from "@/components/multipleselect/type";

export const MultipleSelect: React.FC<MultipleSelectProps> = (props) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  return (
    <div
      className={
        " w-full min-h-[100px max-h-[300px]] flex flex-col gap-2 py-3 mb-4"
      }
    >
      <div className={"w-full flex flex-row items-center justify-between "}>
        <label className={"text-sm font-medium text-slate-600 "}>
          {props.label}
        </label>
      </div>
      <div
        className={"w-full z-40 flex flex-col gap-2 h-fit overflow-y-auto mb-2"}
      >
        {props?.option?.map((option) => (
          <label key={option.value} className="inline-flex items-center mt-3">
            <input
              type="checkbox"
              className="h-4 w-4 text-indigo-600"
              checked={selectedOptions.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
            />
            <span className="ml-3">{option.label}</span>
          </label>
        ))}
      </div>
      <p className={"mt-1 text-xs text-red-600"}>{props.errormessage}</p>
    </div>
  );
};
