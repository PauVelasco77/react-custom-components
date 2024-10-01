import React from "react";
import cx from "classnames";
import styles from "./tablePagination.module.css";
import Select from "../../../select/select";
import TableRow from "../tableRow/tableRow";
import TableCell from "../tableCell/tableCell";

type TablePaginationProps = React.ComponentPropsWithoutRef<"tr"> & {
  className?: string;
  page: number;
  totalElements: number;
  rowsPerPageOptions: React.ComponentPropsWithoutRef<"option">[];
};

export default function TablePagination({
  className,
  rowsPerPageOptions,
  page,
  totalElements,
  ...rest
}: TablePaginationProps): JSX.Element {
  const rowClassNames = cx(styles.tablePagination, className);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const fromElement = page === 1 ? page : rowsPerPage + 1;
  const toElement =
    rowsPerPage * page >= totalElements ? totalElements : rowsPerPage * page;
  return (
    <TableRow className={rowClassNames} {...rest}>
      <TableCell colSpan={5}>
        <div className={styles.rowSelectContainer}>
          <span>Rows per page:</span>
          <Select
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            fontSize="xs"
            className={styles.select}
            options={rowsPerPageOptions}
          />
        </div>
        <span>
          {fromElement} - {toElement} of {totalElements}
        </span>
      </TableCell>
    </TableRow>
  );
}
