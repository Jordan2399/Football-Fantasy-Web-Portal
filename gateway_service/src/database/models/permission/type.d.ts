import { CommonType, TRole } from "../commontype";

export namespace Type {
  interface permission {
    permission_name: CommonType.TString;
    permission_path: CommonType.TString;
    permission_method:CommonType.TString    ;
    // permission_allowed_role: Array<TRole>;
    permission_allowed_role: Array<TRole>;
    permission_status: "0" | "1";
    ms: 'user' | 'match'
  }
}
