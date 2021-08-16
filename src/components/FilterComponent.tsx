import { FilterComponentInterface } from "./types";

export const FilterComponent = (props: FilterComponentInterface) => {
  return (
    <ul className="list-none ">
      {props.listFilter.map((value, index) => {
        return (
          <li className="flex flex-row justify-between px-4">
            <input
              type="checkbox"
              className="bg-primary-400"
              checked={props.value[index]}
              onChange={() => {
                props.handleChange(index);
              }}
            />
            <span>{value}</span>
          </li>
        );
      })}
    </ul>
  );
};
