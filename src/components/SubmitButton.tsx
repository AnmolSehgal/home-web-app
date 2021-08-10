import { ButtonProps } from "./types";

const Button = ({ name, className, id, onBtnClick }: ButtonProps) => {
  return (
    <button
      id={id}
      className={"flex items-center justify-center " + className}
      onClick={onBtnClick}
    >
      {name}
    </button>
  );
};
export default Button;
