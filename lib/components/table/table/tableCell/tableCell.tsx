import cx from "classnames";
import styles from "../index.module.css";

type TableCellProps = React.ComponentPropsWithRef<"th" | "td"> & {
  className?: string;
  children?: React.ReactNode;
  htmlTag?: "th" | "td";
};

export default function TableCell({
  children,
  className,
  htmlTag,
  ...rest
}: TableCellProps): JSX.Element {
  const CellComponent = htmlTag || "td";
  const cellClassNames = cx(styles.cell, className);
  return (
    <CellComponent className={cellClassNames} {...rest}>
      {children}
    </CellComponent>
  );
}
