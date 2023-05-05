import { Transfer } from "../../models";

export type TransferRow = {
  time: number;
  id: string;
  from_address: string;
  to_address: string;
  signature: string;
  amount_in_sol: number;
};

export function processTransfersIntoRows(
  transfers: Array<Transfer>
): Array<TransferRow> {
  return transfers.map((transfer) => {
    const createdAtTime = transfer.createdAt;
    return {
      ...transfer,
      time: (createdAtTime == null
        ? new Date()
        : new Date(createdAtTime)
      ).getTime(),
    };
  });
}
