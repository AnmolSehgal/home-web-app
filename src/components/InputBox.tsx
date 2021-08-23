import { InputProps } from "./types";

const InputBox = ({
  className,
  label,
  placeholder,
  type,
  value,
  onInputChange,
}: InputProps) => {
  return (
    <div className="flex flex-col">
      {{ label } ? <label className="justify-start">{label}</label> : ""}
      <div
        className={`rounded-xl px-3 w-80 border border-text-500 ${className}`}
      >
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          className=" w-full outline-none "
          onChange={(event) => {
            onInputChange(event.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default InputBox;
