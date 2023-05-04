import { ADAPTER_NETWORK, SOLSCAN_TOKEN_BASE_URL } from "../constants";

export function getSolScanTransactionURL(transactionID: string): string {
  return `${SOLSCAN_TOKEN_BASE_URL}/${transactionID}?cluster=${ADAPTER_NETWORK}`;
}
