import styles from "./switch.module.css";
import cx from "classnames";

export type SwitchProps<T> = React.ComponentPropsWithoutRef<"input"> & {
  selectedOption?: T;
  unselectedOption?: T;
  variant?: Variant;
};

export type Variant = "normal" | "advanced";

export default function Switch<T extends React.ReactNode>({
  selectedOption,
  unselectedOption,
  variant = "normal",
  ...rest
}: SwitchProps<T>): JSX.Element {
  const switchContainerClasses = cx(styles.switchContainer, {
    [styles.switchContainerAdvanced]: variant === "advanced",
  });

  return (
    <span>
      <input
        type="checkbox"
        id="toggle"
        className={styles.switchCheckbox}
        {...rest}
      />
      <label htmlFor="toggle" className={switchContainerClasses}>
        <span>{selectedOption}</span>
        <span>{unselectedOption}</span>
      </label>
    </span>
  );
}
