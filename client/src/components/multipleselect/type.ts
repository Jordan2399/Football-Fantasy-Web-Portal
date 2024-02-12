export interface MultipleSelectProps {
  isLoading?: boolean;
  innerLabel?: string;
  label: string;
  isError?: boolean;
  errormessage?: string;
  defaultvalueforform?: string;
  option: MPlayer[];
}
export interface MPlayer {
  label: string;
  value: string;
}



export interface Option {
  label: string;
  value: string;
}

export interface MultiSelectProps {
  label: string; // Display label for the select field
  option: Option[]; // Array of options to choose from
  errormessage?: string; // Optional error message to display
  value?: string[]; // Currently selected values (IDs)
  onChange?: (selected: string[]) => void; // Callback function when selections change
}