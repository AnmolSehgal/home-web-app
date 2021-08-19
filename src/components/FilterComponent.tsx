import { FilterComponentInterface } from "./types";

export const FilterComponent = (props: FilterComponentInterface) => {
  return (
    <ul className="list-none ">
      {props.listFilter.map((value) => {
        return (
          <li
            key={value}
            className="flex flex-row justify-between items-center px-4"
          >
            <input
              type="checkbox"
              className="bg-primary-400"
              onChange={() => {
                props.handleChange(value);
              }}
            />
            <span>{value}</span>
          </li>
        );
      })}
    </ul>
  );
};
