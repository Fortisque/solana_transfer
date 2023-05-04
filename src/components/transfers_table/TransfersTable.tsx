import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { useWallet } from "@solana/wallet-adapter-react";
import { DataStore } from "aws-amplify";
import { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import "../../css/TransfersTable.css";
import { Transfer } from "../../models";
import TransferTablePaginationControls from "./TransferTablePaginationControls";
import TransfersTableHeader from "./TransfersTableHeader";
import TransfersTableHeaderRow from "./TransfersTableHeaderRow";
import TransfersTableRow from "./TransfersTableRow";
import { getComparator } from "./getComparatorUtils";
import {
  isOnlyShowCurrentlyConnectedWalletAtom,
  transferTableOrderAtom,
  transferTableOrderByAtom,
  transferTablePageNumberAtom,
  transferTableRowsPerPageAtom,
} from "./transferAtoms";

function TransfersTable() {
  const [transfers, setTransfers] = useState<Array<Transfer>>([]);
  const { publicKey } = useWallet();
  const publicKeyStr = publicKey?.toString();
  const isOnlyShowCurrentlyConnectedWallet = useRecoilValue(
    isOnlyShowCurrentlyConnectedWalletAtom
  );

  useEffect(() => {
    const subscription = DataStore.observeQuery(
      Transfer,
      publicKeyStr == null || isOnlyShowCurrentlyConnectedWallet === false
        ? undefined
        : (t) => t.from_address.eq(publicKeyStr)
    ).subscribe((snapshot) => {
      setTransfers(snapshot.items);
    });
    return () => subscription.unsubscribe();
  }, [publicKeyStr, isOnlyShowCurrentlyConnectedWallet]);

  // Enforce each transfer has a valid time falling back to now, since the getComparator function doesn't like undefined.
  const rows = transfers.map((transfer) => {
    const createdAtTime = transfer.createdAt;
    return {
      ...transfer,
      time: (createdAtTime == null
        ? new Date()
        : new Date(createdAtTime)
      ).getTime(),
    };
  });

  const page = useRecoilValue(transferTablePageNumberAtom);
  const rowsPerPage = useRecoilValue(transferTableRowsPerPageAtom);
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const order = useRecoilValue(transferTableOrderAtom);
  const orderBy = useRecoilValue(transferTableOrderByAtom);
  const visibleRows = useMemo(
    () =>
      rows
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage, rows]
  );
  return (
    <Card className="transfers-table-wrapper">
      <TransfersTableHeader />
      <TableContainer>
        <Table
          sx={{ minWidth: 500 }}
          aria-labelledby="tableTitle"
          size={"medium"}
        >
          <TransfersTableHeaderRow />
          <TableBody>
            {visibleRows.map((row) => (
              <TransfersTableRow row={row} />
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
      <TransferTablePaginationControls rows={rows} />
    </Card>
  );
}

export default TransfersTable;
