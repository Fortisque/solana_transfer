import { PublicKey } from "@solana/web3.js";

export function getConnectedWalletErrorMessage(
  publicKey: PublicKey | null,
  didAttemptSend: boolean
): string | null {
  return publicKey === null && didAttemptSend
    ? "Connect Wallet before sending"
    : null;
}

export function getRecipientAddressErrorMessage(
  value: string | null,
  didAttemptSend: boolean
): string | null {
  if (value == null && didAttemptSend) {
    return "Recipient Address is required";
  }
  return value === "" ? "Recipient Address cannot be empty" : null;
}

export function getSolAmountErrorMessage(
  value: number | null,
  didAttemptSend: boolean
): string | null {
  if (value == null || value === 0) {
    if (didAttemptSend) {
      return "SOL Amount is required";
    }
    return null;
  }
  return value < 0 ? "SOL amount must be positive" : null;
}
