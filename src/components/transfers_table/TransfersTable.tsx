import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { useRecoilValue } from "recoil";
import "../../css/TransfersTable.css";
import TransferTablePaginationControls from "./TransferTablePaginationControls";
import TransfersTableHeaderRow from "./TransfersTableHeaderRow";
import TransfersTableRow from "./TransfersTableRow";
import {
  transferTablePageNumberAtom,
  transferTableRowsPerPageAtom,
} from "./transferAtoms";
import { AlgoliaRow } from "../../algolia/synchronizeAlgolia";
import { TransferRow } from "./processTransfersIntoRows";
import { useHits } from "react-instantsearch-hooks-web";

function TransfersTable() {
  const { hits } = useHits<AlgoliaRow>();

  // An AlgoliaRow is a superset of transfer row, so this cast is fine.
  const rows: Array<TransferRow> = hits;

  const page = useRecoilValue(transferTablePageNumberAtom);
  const rowsPerPage = useRecoilValue(transferTableRowsPerPageAtom);
  const emptyRows = page > 0 ? rowsPerPage - rows.length : 0;
  return (
    <>
      <TableContainer>
        <Table
          sx={{ minWidth: 500 }}
          aria-labelledby="tableTitle"
          size={"medium"}
        >
          <TransfersTableHeaderRow />
          <TableBody>
            {rows.map((row) => (
              <TransfersTableRow row={row} key={row.id} />
            ))}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={5} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TransferTablePaginationControls />
    </>
  );
}

export default TransfersTable;
