import React from "react";
import cx from "classnames";
import styles from "../index.module.css";

type TableColumnProps = React.ComponentPropsWithoutRef<"col"> & {
  className?: string;
  children: React.ReactNode;
};

export default function TableColumn({
  children,
  className,
  ...rest
}: TableColumnProps): JSX.Element {
  const tColClassNames = cx(styles.tcol, className);

  return (
    <col className={tColClassNames} {...rest}>
      {children}
    </col>
  );
}
