export interface LabelComponentInterface {
  name: string;
}

const LabelComponent = ({ name }: LabelComponentInterface) => {
  return <label className="font-bold text-12">{name}</label>;
};

export default LabelComponent;
