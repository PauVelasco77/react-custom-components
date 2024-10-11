import { memo } from "react";
import cx from "classnames";
import styles from "./loader.module.css";
import { LoaderCircle } from "../../assets/loaderCircle";

export type LoaderProps = React.SVGProps<SVGSVGElement> & {
  size?: number | "auto";
  className?: string;
};

const Loader = memo(function Icon({
  size = "auto",
  className,
  ...props
}: LoaderProps): JSX.Element {
  const classNames = cx(styles.loader, className);
  return (
    <svg
      className={classNames}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="currentColor"
      width={size}
      height={size}
      {...props}
    >
      <LoaderCircle />
    </svg>
  );
});

export default Loader;
