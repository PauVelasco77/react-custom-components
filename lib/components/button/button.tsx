import styles from "./button.module.css";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
};

export default function Button({
  children,
  ...rest
}: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
}
