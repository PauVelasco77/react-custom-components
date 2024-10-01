import React from "react";
import cx from "classnames";
import styles from "../index.module.css";

type TableBodyProps = React.ComponentPropsWithoutRef<"tbody"> & {
  className?: string;
  children: React.ReactNode;
};

export default function TableBody({
  children,
  className,
  ...rest
}: TableBodyProps): JSX.Element {
  const tBodyClassNames = cx(styles.tbody, className);

  return (
    <tbody className={tBodyClassNames} {...rest}>
      {children}
    </tbody>
  );
}
