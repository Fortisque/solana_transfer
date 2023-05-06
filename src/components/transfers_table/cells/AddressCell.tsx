import { Link, TableCell } from "@mui/material";
import { abbreviateWalletPublicKey } from "../../../common_helpers/abbreviateWalletPublicKey";
import { getSolScanAccountURL } from "../../../common_helpers/sol_helpers/getSolScanAccountURL";

type Props = { address: string };

function AddressCell({ address }: Props) {
  return (
    <TableCell align="left">
      <Link
        target="_blank"
        color="secondary"
        href={getSolScanAccountURL(address)}
        onClick={(e) => e.stopPropagation()}
      >
        {abbreviateWalletPublicKey(address)}
      </Link>
    </TableCell>
  );
}

export default AddressCell;
