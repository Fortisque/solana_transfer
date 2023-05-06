import { TransferRow } from "../processTransfersIntoRows";

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
