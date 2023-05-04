import { Link, TableCell, TableRow } from "@mui/material";
import React from "react";
import { getSolScanTransactionURL } from "../../common_helpers/sol_helpers/getSolScanTransactionURL";
import AddressCell from "./cells/AddressCell";
import TimeCell from "./cells/TimeCell";

export type TransferRow = {
  time: number;
  id: string;
  from_address: string;
  to_address: string;
  signature: string;
  amount_in_sol: number;
};

type Props = { row: TransferRow };

function TransfersTableRow({row}: Props) {
  return (
    <TableRow hover tabIndex={-1} key={row.id} sx={{ cursor: "pointer" }}>
      <TableCell align="left">
        <Link
          target="_blank"
          color="secondary"
          href={getSolScanTransactionURL(row.signature)}
        >
          {`${row.signature.slice(0, 20)}..`}
        </Link>
      </TableCell>
      <TimeCell time={row.time} />
      <AddressCell address={row.from_address} />
      <AddressCell address={row.to_address} />
      <TableCell align="left">{row.amount_in_sol}</TableCell>
    </TableRow>
  );
}

export default TransfersTableRow;
