import styles from "../index.module.css";
import cx from "classnames";

type TableProps = React.ComponentPropsWithoutRef<"table"> & {
  children: React.ReactNode;
};

export default function Table({ children, ...rest }: TableProps): JSX.Element {
  const tableClassNames = cx(styles.table, rest.className);
  return (
    <table className={tableClassNames} {...rest}>
      {children}
    </table>
  );
}
