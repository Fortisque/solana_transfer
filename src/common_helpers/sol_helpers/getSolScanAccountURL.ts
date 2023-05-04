import { ADAPTER_NETWORK, SOLSCAN_ACCOUNT_BASE_URL } from "../constants";

export function getSolScanAccountURL(accountID: string): string {
  return `${SOLSCAN_ACCOUNT_BASE_URL}/${accountID}?cluster=${ADAPTER_NETWORK}`;
}
