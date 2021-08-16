import { TitleComponentInterface } from "./types";

const TitleComponent = ({ title }: TitleComponentInterface) => {
  return (
    <div className="text-black text-lg my-3 border-text-300 border-t ">
      {title}
    </div>
  );
};

export default TitleComponent;
