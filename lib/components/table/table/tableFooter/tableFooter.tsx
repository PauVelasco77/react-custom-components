import React from "react";
import cx from "classnames";
import styles from "../index.module.css";

type TableFooterProps = React.ComponentPropsWithoutRef<"tfoot"> & {
  className?: string;
  children: React.ReactNode;
};

export default function TableFooter({
  children,
  className,
  ...rest
}: TableFooterProps): JSX.Element {
  const footerClassNames = cx(styles.tfoot, className);

  return (
    <tfoot className={footerClassNames} {...rest}>
      {children}
    </tfoot>
  );
}
