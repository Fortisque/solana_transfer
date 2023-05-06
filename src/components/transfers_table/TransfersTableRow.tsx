import { TableCell, TableRow } from "@mui/material";
import AddressCell from "./cells/AddressCell";
import TimeCell from "./cells/TimeCell";
import { TransferRow } from "./processTransfersIntoRows";
import { transferDialogStateAtom } from "./transferAtoms";
import { useSetRecoilState } from "recoil";
import SignatureSOLLink from "../common/SignatureSOLLink";

type Props = { row: TransferRow };

function TransfersTableRow({ row }: Props) {
  const setTransferDialogState = useSetRecoilState(transferDialogStateAtom);
  return (
    <TableRow
      hover
      tabIndex={-1}
      sx={{ cursor: "pointer" }}
      onClick={() =>
        setTransferDialogState({
          isOpen: true,
          selectedSignature: row.signature,
        })
      }
    >
      <TableCell align="left">
        <SignatureSOLLink signature={row.signature} hasTooltip={false} />
      </TableCell>
      <TimeCell time={row.time} />
      <AddressCell address={row.from_address} />
      <AddressCell address={row.to_address} />
      <TableCell align="left">{row.amount_in_sol}</TableCell>
    </TableRow>
  );
}

export default TransfersTableRow;
