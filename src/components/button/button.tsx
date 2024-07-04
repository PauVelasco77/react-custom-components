import { DetailedHTMLProps } from "react";
import styles from "./button.module.css";

export type ButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text: string;
};

export default function Button({ text, ...props }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} {...props}>
      {text}
    </button>
  );
}
