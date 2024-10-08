import styles from "./button.module.css";
import cx from "classnames";

type ButtonVariants =
  | "primary"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "link";

type ButtonSizes = "small" | "medium" | "large" | "icon";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
  /**
   * The variant of the button
   * @default primary
   * @example <Button variant="secondary">Secondary</Button>
   * @type "primary" | "secondary" | "destructive" | "outline" | "ghost" | "link"
   */
  variant?: ButtonVariants;
  /**
   * The size of the button
   * @default medium
   * @example <Button size="small">Small</Button>
   * @type "small" | "medium" | "large" | "icon"
   */
  size?: ButtonSizes;
  /**
   * Render the button as a span element
   * @default false
   * @example <Button asChild>Child</Button>
   * @type boolean
   */
  asChild?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  size = "medium",
  asChild = false,
  ...rest
}: ButtonProps): JSX.Element {
  const className = cx(styles.button, styles[variant], styles[size]);

  if (asChild) {
    return <span className={className}>{children}</span>;
  }

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}
