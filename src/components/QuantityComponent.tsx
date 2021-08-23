import { useState } from "react";

interface QuantityComponentProps {
  quantity: number;
  stock: number;
  productId: string;
  changeQuantity: (productId: string, inputQuantity: number) => void;
}

const QuantityComponent = ({
  quantity,
  changeQuantity,
  productId,
  stock,
}: QuantityComponentProps) => {
  const [itemQuantity, setitemQuantity] = useState(quantity);
  return (
    <div className="flex flex-row border-2 px-4 py-1.5 rounded-3xl items-center ">
      <input
        type="number"
        className=" w-16 outline-none"
        value={itemQuantity}
        onChange={(event) => {
          const inputQuantity = parseInt(event.target.value);

          if (
            inputQuantity > 0 &&
            inputQuantity <= 5 &&
            inputQuantity < stock
          ) {
            setitemQuantity(inputQuantity);
            changeQuantity(productId, inputQuantity);
          }
        }}
      />
    </div>
  );
};

export default QuantityComponent;
