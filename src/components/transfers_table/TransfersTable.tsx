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
  isOnlyShowCurrentlyConnectedWalletAtom,
  transferTableOrderAtom,
  transferTableOrderByAtom,
  transferTablePageNumberAtom,
  transferTableRowsPerPageAtom,
} from "./transferAtoms";
import {
  TransferRow,
  processTransfersIntoRows,
} from "./processTransfersIntoRows";
import { useWallet } from "@solana/wallet-adapter-react";
import { DataStore } from "aws-amplify";
import { useEffect, useMemo, useState } from "react";
import { Transfer } from "../../models";
import { getComparator } from "./table_utils/getComparatorUtils";
import getFilteredRows from "./table_utils/getFilteredRows";
import { useSearchBox } from "react-instantsearch-hooks-web";

function TransfersTable() {
  const [rows, setRows] = useState<Array<TransferRow>>([]);
  const { publicKey } = useWallet();
  const publicKeyStr = publicKey?.toString();
  const isOnlyShowCurrentlyConnectedWallet = useRecoilValue(
    isOnlyShowCurrentlyConnectedWalletAtom
  );
  useEffect(() => {
    const subscription = DataStore.observeQuery(
      Transfer,
      // This filter could be done client side, but only updates infrequently, so why not server side
      publicKeyStr == null || isOnlyShowCurrentlyConnectedWallet === false
        ? undefined
        : (t) => t.from_address.eq(publicKeyStr)
    ).subscribe((snapshot) => {
      setRows(processTransfersIntoRows(snapshot.items));
    });
    return () => subscription.unsubscribe();
  }, [publicKeyStr, isOnlyShowCurrentlyConnectedWallet]);
  const { query } = useSearchBox();
  const filteredRows = useMemo(
    () => getFilteredRows(rows, query),
    [rows, query]
  );

  const page = useRecoilValue(transferTablePageNumberAtom);
  const rowsPerPage = useRecoilValue(transferTableRowsPerPageAtom);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const order = useRecoilValue(transferTableOrderAtom);
  const orderBy = useRecoilValue(transferTableOrderByAtom);
  const visibleRows = useMemo(
    () =>
      filteredRows
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, filteredRows]
  );
  return (
    <>
      <TableContainer>
        <Table
          sx={{ minWidth: 500 }}
          aria-labelledby="Transfers-Table"
          size={"medium"}
        >
          <TransfersTableHeaderRow />
          <TableBody>
            {visibleRows.map((row) => (
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
      <TransferTablePaginationControls rowsCount={filteredRows.length} />
    </>
  );
}

export default TransfersTable;
