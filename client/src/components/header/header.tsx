import { HeaderPros } from "@/components/header/type";
import { UserHeader } from "@/components/header/user.header";
import { CpHeader } from "@/components/header/cp.header";

export const Header: React.FC<HeaderPros> = (props) => {
  return (
    <>
      {props.variation === "for-client" ? (
        <UserHeader />
      ) : props.variation === "for-cp" ? (
        <CpHeader />
      ) : null}
    </>
  );
};
