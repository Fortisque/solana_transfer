import { Alert, Button, Link } from "@mui/material";
import { nullThrows } from "../../common_helpers/nullThrows";
import { getSolScanTransactionURL } from "../../common_helpers/sol_helpers/getSolScanTransactionURL";
import "../../css/TransferAlertMessage.css";
import { TransferStatus } from "./TransferForm";

type Props = {
  transferStatus: TransferStatus | null;
  setTransferStatus: (transferStatus: TransferStatus | null) => void;
};

function TransferAlertMessage({ transferStatus, setTransferStatus }: Props) {
  return (
    <>
      {["success", "error"].includes(transferStatus?.status ?? "") ? (
        <div className="transfer-alert-message">
          <Alert
            severity={
              transferStatus?.status === "success" ? "success" : "error"
            }
            action={
              transferStatus?.status === "success" ? (
                <Button
                  color="inherit"
                  size="small"
                  onClick={() => setTransferStatus(null)}
                >
                  Confirm and Reset
                </Button>
              ) : null
            }
          >
            {transferStatus?.status === "success" ? (
              <>
                Successfully sent SOL, view on{" "}
                <Link
                  color="secondary"
                  target="_blank"
                  href={getSolScanTransactionURL(
                    nullThrows(transferStatus?.message)
                  )}
                >
                  SOLScan
                </Link>
              </>
            ) : (
              <>
                Failed to send SOL, see:{" "}
                {transferStatus?.message ?? "Unknown error"}
              </>
            )}
          </Alert>
        </div>
      ) : null}
    </>
  );
}

export default TransferAlertMessage;
