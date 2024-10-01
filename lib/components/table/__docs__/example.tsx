import TableBody from "../table/tableBody/tableBody";
import TableCaption from "../table/tableCaption/tableCaption";
import TableCell from "../table/tableCell/tableCell";
import TableFooter from "../table/tableFooter/tableFooter";
import TableHead from "../table/tableHead/tableHead";
import TableRow from "../table/tableRow/tableRow";
import Table from "../table/table/table";
import TablePagination from "../table/tablePagination/tablePagination";

export default function Example() {
  return (
    <Table>
      <TableCaption>Table Caption</TableCaption>
      <TableHead>
        <TableRow>
          <TableCell color="red">Header Cell 1</TableCell>
          <TableCell>Header Cell 2</TableCell>
          <TableCell>Header Cell 3</TableCell>
          <TableCell>Header Cell 4</TableCell>
          <TableCell>Header Cell 5</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Body Cell 1</TableCell>
          <TableCell>Body Cell 2</TableCell>
          <TableCell>Body Cell 3</TableCell>
          <TableCell>Body Cell 4</TableCell>
          <TableCell>Body Cell 5</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Body Cell 1</TableCell>
          <TableCell>Body Cell 2</TableCell>
          <TableCell>Body Cell 3</TableCell>
          <TableCell>Body Cell 4</TableCell>
          <TableCell>Body Cell 5</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Body Cell 1</TableCell>
          <TableCell>Body Cell 2</TableCell>
          <TableCell>Body Cell 3</TableCell>
          <TableCell>Body Cell 4</TableCell>
          <TableCell>Body Cell 5</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Footer Cell 1</TableCell>
          <TableCell>Footer Cell 2</TableCell>
          <TableCell>Footer Cell 3</TableCell>
          <TableCell>Footer Cell 4</TableCell>
          <TableCell>Footer Cell 5</TableCell>
        </TableRow>
        <TablePagination
          page={1}
          totalElements={13}
          rowsPerPageOptions={[
            {
              defaultChecked: true,
              value: 5,
              children: "5",
            },
            {
              value: 10,
              children: "10",
            },
            {
              value: 20,
              children: "20",
            },
            {
              value: 30,
              children: "30",
            },
          ]}
        />
      </TableFooter>
    </Table>
  );
}
