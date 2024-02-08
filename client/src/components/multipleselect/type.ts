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
