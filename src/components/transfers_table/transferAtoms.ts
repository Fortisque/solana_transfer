import { RecoilState, atom, selector } from "recoil";
import { TransferRow } from "./TransfersTableRow";

export type Order = "asc" | "desc";

export const transferTableOrderAtom: RecoilState<Order> = atom<Order>({
  key: "transferTableOrder",
  default: "desc",
});

export const transferTableOrderByAtom: RecoilState<keyof TransferRow> = atom<
  keyof TransferRow
>({
  key: "transferTableOrderBy",
  default: "time",
});

export const transferTablePageNumberAtom: RecoilState<number> = atom<number>({
  key: "transferTablePageNumber",
  default: 0,
});

export const transferTableRowsPerPageAtom: RecoilState<number> = atom<number>({
  key: "transferTableRowsPerPage",
  default: 5,
});

export const isOnlyShowCurrentlyConnectedWalletAtom: RecoilState<boolean> =
  atom<boolean>({
    key: "isOnlyShowCurrentlyConnectedWallet",
    default: true,
  });
