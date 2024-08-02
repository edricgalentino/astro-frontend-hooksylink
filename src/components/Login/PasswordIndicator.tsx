import type { Dispatch, SetStateAction } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

interface Props {
  passwordIsVisible: boolean;
  setPasswordIsVisible: (value: boolean) => void | Dispatch<SetStateAction<boolean>>;
}

const PasswordIndicator = ({ passwordIsVisible, setPasswordIsVisible }: Props) => {
  return (
    <span className="absolute right-4 top-3 cursor-pointer" onClick={() => setPasswordIsVisible(!passwordIsVisible)}>
      {!passwordIsVisible ? <RiEyeOffLine /> : <RiEyeLine />}
    </span>
  );
};

export default PasswordIndicator;
