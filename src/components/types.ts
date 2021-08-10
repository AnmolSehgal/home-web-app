export interface InputProps {
  type: string;
  value: string;
  placeholder?: string;
  className?: string;
  label?: string;
  onInputChange: (inputVal: string) => void;
}

export interface ButtonProps {
  className?: string;
  name: string;
  id: string;
  onBtnClick: () => void;
}
