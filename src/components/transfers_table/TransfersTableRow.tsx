import { Link, TableCell, TableRow } from "@mui/material";
import { getSolScanTransactionURL } from "../../common_helpers/sol_helpers/getSolScanTransactionURL";
import AddressCell from "./cells/AddressCell";
import TimeCell from "./cells/TimeCell";
import { TransferRow } from "./processTransfersIntoRows";

type Props = { row: TransferRow };

function TransfersTableRow({ row }: Props) {
  return (
    <TableRow hover tabIndex={-1} sx={{ cursor: "pointer" }}>
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
