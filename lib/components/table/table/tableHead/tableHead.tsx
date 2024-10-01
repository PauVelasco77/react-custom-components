import React from "react";
import styles from "../index.module.css";
import cx from "classnames";

type TableHeadProps = React.ComponentPropsWithoutRef<"thead"> & {
  className?: string;
  children: React.ReactNode;
};

export default function TableHead({
  children,
  className,
  ...rest
}: TableHeadProps): JSX.Element {
  const headerClassNames = cx(styles.thead, className);
  return (
    <thead className={headerClassNames} {...rest}>
      {children}
    </thead>
  );
}
