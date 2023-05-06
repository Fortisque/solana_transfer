import {
  Box,
  CircularProgress,
  Dialog,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { transferDialogStateAtom } from "../transfers_table/transferAtoms";
import { useConnection } from "@solana/wallet-adapter-react";
import { useEffect, useMemo, useState } from "react";
import {
  LAMPORTS_PER_SOL,
  ParsedInstruction,
  ParsedTransactionWithMeta,
  SignatureStatus,
} from "@solana/web3.js";
import SignatureSOLLink from "../common/SignatureSOLLink";
import RelativeTime from "../common/RelativeTime";

function TransferDialog() {
  const [transferDialogStatus, setTransferDialogStatus] = useRecoilState(
    transferDialogStateAtom
  );
  const [transactionData, setTransactionData] =
    useState<ParsedTransactionWithMeta | null>(null);
  const [signatureStatus, setSignatureStatus] =
    useState<SignatureStatus | null>(null);
  const connectionState = useConnection();
  const signature = transferDialogStatus.selectedSignature;
  const fetchSignatureInformation = useMemo(
    () => async () => {
      if (signature == null) {
        return;
      }
      const connection = connectionState.connection;
      const parsedTransaction = await connection.getParsedTransaction(
        signature
      );
      const { value } = await connection.getSignatureStatus(signature, {
        searchTransactionHistory: true,
      });
      setTransactionData(parsedTransaction);
      setSignatureStatus(value);
    },
    [signature, connectionState]
  );

  useEffect(() => {
    fetchSignatureInformation();
  }, [signature, fetchSignatureInformation]);

  console.log(
    transactionData?.transaction.message.instructions.find(
      (i) => (i as ParsedInstruction).parsed?.info?.lamports != null
    ) as ParsedInstruction
  );

  const transferInstruction =
    transactionData?.transaction?.message?.instructions?.find(
      (i) => (i as ParsedInstruction).parsed?.info?.lamports != null
    ) as ParsedInstruction | null;

  return (
    <Dialog
      onClose={() => setTransferDialogStatus({ isOpen: false })}
      open={transferDialogStatus.isOpen}
      fullWidth={true}
      maxWidth={"md"}
    >
      <DialogTitle>
        Data for{" "}
        {signature != null ? (
          <SignatureSOLLink signature={signature} hasTooltip={true} />
        ) : (
          "Unknown Error"
        )}
      </DialogTitle>
      {transactionData == null ? (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            padding: 3,
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <Grid
          container
          spacing={2}
          sx={{ paddingBottom: 4, paddingLeft: 2, paddingRight: 2 }}
        >
          <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <Typography sx={{ marginLeft: 1 }} color={"greyColor.main"}>
              Block
            </Typography>
            <Typography sx={{ marginLeft: 1 }} color={"greyColor.main"}>
              Timestamp
            </Typography>
            <Typography sx={{ marginLeft: 1 }} color={"greyColor.main"}>
              Result
            </Typography>
            <Typography sx={{ marginLeft: 1 }} color={"greyColor.main"}>
              Signer
            </Typography>
            <Typography sx={{ marginLeft: 1 }} color={"greyColor.main"}>
              Fee
            </Typography>
            <Typography sx={{ marginLeft: 1 }} color={"greyColor.main"}>
              To Account
            </Typography>
            <Typography sx={{ marginLeft: 1 }} color={"greyColor.main"}>
              SOL amount
            </Typography>
            <Typography sx={{ marginLeft: 1 }} color={"greyColor.main"}>
              Previous Block Hash
            </Typography>
          </Grid>
          <Grid
            item
            xs={8}
            sx={{ display: "flex", flexDirection: "column", gap: 1 }}
          >
            <Typography>#{transactionData.slot}</Typography>
            <Typography>
              <RelativeTime
                timeInMs={
                  transactionData.blockTime == null
                    ? null
                    : transactionData.blockTime * 1000
                }
                showDateTime={true}
              />
            </Typography>
            <Typography>
              {signatureStatus?.confirmationStatus}{" "}
              {signatureStatus?.confirmations == null
                ? "max"
                : signatureStatus?.confirmations}{" "}
              confirmations
            </Typography>
            <Typography>
              {transactionData.transaction.message.accountKeys
                .filter((key) => key.signer)[0]
                .pubkey.toString()}
            </Typography>
            <Typography>
              {(transactionData.meta?.fee ?? 0) / LAMPORTS_PER_SOL} SOL
            </Typography>
            <Typography>
              {transferInstruction?.parsed?.info?.destination}
            </Typography>
            <Typography>
              {(transferInstruction?.parsed?.info?.lamports ?? 0) /
                LAMPORTS_PER_SOL}{" "}
              SOL
            </Typography>
            <Typography>
              {transactionData.transaction.message.recentBlockhash}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Dialog>
  );
}

export default TransferDialog;
