import React from "react";
import cx from "classnames";
import styles from "../index.module.css";

type TableColumngroupProps = React.ComponentPropsWithoutRef<"colgroup"> & {
  className?: string;
  children: React.ReactNode;
};

export default function TableColumngroup({
  children,
  className,
  ...rest
}: TableColumngroupProps): JSX.Element {
  const tColgroupClassNames = cx(styles.tcolgroup, className);

  return (
    <colgroup className={tColgroupClassNames} {...rest}>
      {children}
    </colgroup>
  );
}
