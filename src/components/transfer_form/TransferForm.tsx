import { useMemo, useState, useCallback } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  Card,
  CircularProgress,
  FormLabel,
  Tooltip,
  Typography,
} from "@mui/material";
import "../../css/TransferForm.css";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { transferSol } from "../../common_helpers/sol_helpers/transferSol";
import {
  getConnectedWalletErrorMessage,
  getRecipientAddressErrorMessage,
  getSolAmountErrorMessage,
} from "./FormValidationHelpers";
import { WalletMultiButton } from "@solana/wallet-adapter-material-ui";
import { filterNulls } from "../../common_helpers/filterNulls";
import { nullThrows } from "../../common_helpers/nullThrows";
import { abbreviateLongString } from "../../common_helpers/abbreviateLongString";
import TransferAlertMessage from "./TransferAlertMessage";
import { DataStore } from "aws-amplify";
import { Transfers } from "../../models";

export type TransferStatus = {
  status: "success" | "pending" | "error";
  message?: string | null;
};

function TransferForm() {
  const connection = useConnection();
  const walletContext = useWallet();
  const { publicKey } = walletContext;
  const publicKeyString: string | undefined = publicKey?.toString();
  const publicKeyAbbreviation: string | null =
    publicKeyString != null ? abbreviateLongString(publicKeyString) : null;

  const [didAttemptSend, setDidAttemptSend] = useState<boolean>(false);
  const [recipientAddress, setRecipientAddress] = useState<string | null>(null);
  const [solAmount, setSolAmount] = useState<number | null>(null);
  const connectedWalletErrorMessage = useMemo(
    () => getConnectedWalletErrorMessage(publicKey, didAttemptSend),
    [publicKey, didAttemptSend]
  );
  const recipientErrorMessage = useMemo(
    () => getRecipientAddressErrorMessage(recipientAddress, didAttemptSend),
    [recipientAddress, didAttemptSend]
  );
  const solErrorMessage = useMemo(
    () => getSolAmountErrorMessage(solAmount, didAttemptSend),
    [solAmount, didAttemptSend]
  );
  const [transferStatus, setTransferStatus] = useState<TransferStatus | null>(
    null
  );

  const validationErrorMessages = useMemo(
    () =>
      filterNulls([
        connectedWalletErrorMessage,
        recipientErrorMessage,
        solErrorMessage,
        transferStatus?.status === "success"
          ? "Use the Confirm and Reset Button to Unlock"
          : null,
      ]),
    [
      connectedWalletErrorMessage,
      recipientErrorMessage,
      solErrorMessage,
      transferStatus,
    ]
  );

  const submitTransfer = useCallback(async () => {
    if (
      getConnectedWalletErrorMessage(publicKey, true) != null ||
      getRecipientAddressErrorMessage(recipientAddress, true) != null ||
      getSolAmountErrorMessage(solAmount, true) != null
    ) {
      // Halt because of form validation errors
      return;
    }
    setTransferStatus({ status: "pending" });
    await transferSol(
      walletContext,
      nullThrows(publicKey),
      nullThrows(recipientAddress),
      nullThrows(solAmount),
      connection
    )
      .then(async (signature) => {
        setTransferStatus({ status: "success", message: signature });
        await DataStore.save(
          new Transfers({
            from_address: nullThrows(publicKey?.toString()),
            to_address: nullThrows(recipientAddress),
            signature: nullThrows(signature),
            amount: nullThrows(solAmount),
          })
        )
          .then((msg) => {
            console.log(msg);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        setTransferStatus({ status: "error", message: error.toString() });
      });
  }, [publicKey, recipientAddress, solAmount]);
  return (
    <Card className="transfer-wrapper">
      <Typography color="inherit" variant="h4">
        Transfer SOL
      </Typography>
      <div className="transfer-form">
        {publicKey == null ? (
          <div className={"transfer-my-wallet"}>
            <WalletMultiButton
              color={
                connectedWalletErrorMessage == null ? "secondary" : "error"
              }
            />
            <FormLabel error={connectedWalletErrorMessage != null}>
              {connectedWalletErrorMessage != null
                ? connectedWalletErrorMessage
                : "Connect wallet above"}
            </FormLabel>
          </div>
        ) : (
          <TextField
            label="Connected Wallet"
            required
            disabled
            variant="outlined"
            color="secondary"
            value={publicKeyAbbreviation ?? ""}
          />
        )}
        <TextField
          sx={{ width: 300 }}
          onChange={(e) => setRecipientAddress(e.target.value)}
          label="Recipient Address"
          required
          variant="outlined"
          color="secondary"
          value={recipientAddress ?? ""}
          error={recipientErrorMessage != null}
          helperText={recipientErrorMessage}
        />
        <TextField
          onChange={(e) => {
            const newSolAmount = parseFloat(e.target.value);
            if (!Number.isNaN(newSolAmount)) {
              setSolAmount(newSolAmount);
            } else if (e.target.value == "") {
              setSolAmount(null);
            }
          }}
          label="SOL"
          required
          variant="outlined"
          color="secondary"
          type="number"
          InputProps={{
            inputProps: { min: 0 },
          }}
          value={solAmount ?? ""}
          error={solErrorMessage != null}
          helperText={solErrorMessage}
        />
        <Tooltip title={validationErrorMessages.join(", ")}>
          <span>
            {transferStatus?.status === "pending" ? (
              <CircularProgress color="secondary" />
            ) : (
              <Button
                onClick={() => {
                  setDidAttemptSend(true);
                  submitTransfer();
                }}
                variant="outlined"
                color="secondary"
                type="submit"
                disabled={validationErrorMessages.length != 0}
              >
                Send
              </Button>
            )}
          </span>
        </Tooltip>
      </div>
      <TransferAlertMessage
        transferStatus={transferStatus}
        setTransferStatus={setTransferStatus}
      />
    </Card>
  );
}

export default TransferForm;
