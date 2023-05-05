import { TransferRow } from "./processTransfersIntoRows";
import { Order } from "./transferAtoms";

type HeadCell = {
  id: keyof TransferRow;
  label: string;
};

export const headCells: readonly HeadCell[] = [
  {
    id: "signature",
    label: "Signature",
  },
  {
    id: "time",
    label: "Time",
  },
  {
    id: "from_address",
    label: "From Address",
  },
  {
    id: "to_address",
    label: "To Address",
  },
  {
    id: "amount_in_sol",
    label: "Amount (SOL)",
  },
];

export type ReplicaOrderingSettings = {
  order: Order;
  orderBy: keyof TransferRow;
};

export function getAllPossibleOrderings(): Array<ReplicaOrderingSettings> {
  return headCells.flatMap((h) => [
    {
      order: "asc",
      orderBy: h.id,
    },
    {
      order: "desc",
      orderBy: h.id,
    },
  ]);
}

export function getReplicaIndexName(
  orderSettings: ReplicaOrderingSettings
): string {
  return `${orderSettings.orderBy}_${orderSettings.order}`;
}
