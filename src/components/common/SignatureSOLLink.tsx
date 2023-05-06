import { Link, Tooltip } from "@mui/material";
import { getSolScanTransactionURL } from "../../common_helpers/sol_helpers/getSolScanTransactionURL";

type Props = { signature: string, hasTooltip: boolean };

function SignatureSOLLink({ signature, hasTooltip }: Props) {
  return (
    <Tooltip title={hasTooltip ? signature : ''}>
      <Link
        target="_blank"
        color="secondary"
        href={getSolScanTransactionURL(signature)}
        onClick={(e) => e.stopPropagation()}
      >
        {`${signature.slice(0, 20)}..`}
      </Link>
    </Tooltip>
  );
}

export default SignatureSOLLink;
