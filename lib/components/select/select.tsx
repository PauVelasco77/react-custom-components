import styles from "./select.module.css";
import cx from "classnames";

type Sizes = "xs" | "s" | "m" | "l" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";

type SelectProps = React.ComponentPropsWithoutRef<"select"> & {
  className?: string;
  options: React.ComponentPropsWithoutRef<"option">[];
  placeholder?: string;
  fontSize?: Sizes;
};

export default function Select({
  className,
  options,
  placeholder,
  fontSize = "m",
  ...rest
}: SelectProps): JSX.Element {
  const selectClassNames = cx(styles.select, className);

  return (
    <select
      {...rest}
      className={selectClassNames}
      defaultValue={rest.defaultValue ?? ""}
      style={{ fontSize: `var(--font-size-${fontSize})` }}
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
