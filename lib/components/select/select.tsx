import styles from "./select.module.css";
import cx from "classnames";

type SelectProps = React.ComponentPropsWithoutRef<"select"> & {
  className?: string;
  children: React.ReactNode;
  options: React.ComponentPropsWithoutRef<"option">[];
  placeholder?: string;
};

export default function Select({
  className,
  options,
  placeholder,
  ...rest
}: SelectProps): JSX.Element {
  const selectClassNames = cx(styles.select, className);

  return (
    <select
      {...rest}
      className={selectClassNames}
      defaultValue={rest.defaultValue ?? ""}
    >
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {options.map((option, index) => (
        <option key={index} {...option}>
          {option.children}
        </option>
      ))}
    </select>
  );
}
