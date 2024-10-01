import React from "react";
import cx from "classnames";
import styles from "../index.module.css";

type TableRowProps = React.ComponentPropsWithoutRef<"tr"> & {
  className?: string;
  children: React.ReactNode;
};

export default function TableRow({
  className,
  children,
  ...rest
}: TableRowProps): JSX.Element {
  const rowClassNames = cx(styles.row, className);

  return (
    <tr className={rowClassNames} {...rest}>
      {children}
    </tr>
  );
}
