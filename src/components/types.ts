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

export interface CardComponentInterface {
  image: string;
  productName: string;
  productID: string;
  brandName: string;
  discount: number;
  price: number;
}

export interface FilterComponentInterface {
  listFilter: string[];
  value: boolean[];
  handleChange: (index: number) => void;
}

export interface TitleComponentInterface {
  title: string;
}
