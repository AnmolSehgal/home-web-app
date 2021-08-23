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
  productId: string;
  brandName: string;
  discount: number;
  price: number;
}

export interface FilterComponentInterface {
  listFilter: string[];
  handleChange: (index: string) => void;
}

export interface TitleComponentInterface {
  title: string;
}
