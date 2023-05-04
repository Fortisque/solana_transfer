import {
  ConnectionContextState,
  WalletContextState,
} from "@solana/wallet-adapter-react";
import {
  SystemProgram,
  LAMPORTS_PER_SOL,
  Transaction,
  PublicKey,
} from "@solana/web3.js";

export const transferSol = async (
  fromWalletContext: WalletContextState,
  fromPublicKey: PublicKey,
  toPublicKeyStr: string,
  solAmount: number,
  connectionContext: ConnectionContextState
): Promise<string> => {
  const { sendTransaction } = fromWalletContext;
  const toPublicKey = new PublicKey(toPublicKeyStr);
  const connection = connectionContext.connection;
  const transferTransaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey: fromPublicKey,
      toPubkey: toPublicKey,
      lamports: solAmount * LAMPORTS_PER_SOL,
    })
  );
  const {
    context: { slot: minContextSlot },
  } = await connection.getLatestBlockhashAndContext();

  const signature = await sendTransaction(transferTransaction, connection, {
    minContextSlot,
  });
  const { blockhash, lastValidBlockHeight } =
    await connection.getLatestBlockhash("finalized");
  await connection.confirmTransaction({
    blockhash,
    lastValidBlockHeight,
    signature,
  });
  return signature;
};
