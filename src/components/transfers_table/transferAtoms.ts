import { RecoilState, atom } from "recoil";
import { TransferRow } from "./processTransfersIntoRows";

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

// Effectively this is used as a bridge to ask algolio to update when this changes
export const algoliaUpdatedObjectIDsAtom: RecoilState<Array<string> | null> =
  atom<Array<string> | null>({
    key: "algoliaUpdatedObjectIDs",
    default: null,
  });

// Used when clicking an autocomplete row to force the autocomplete input to match it.
export const hasPendingQueryOverrideAtom: RecoilState<boolean> = atom<boolean>({
  key: "hasPendingQueryOverride",
  default: false,
});

type transferDialogState = {
  isOpen: boolean;
  selectedSignature?: string | null;
};
export const transferDialogStateAtom: RecoilState<transferDialogState> =
  atom<transferDialogState>({
    key: "transferDialogState",
    default: { isOpen: false, selectedSignature: null },
  });
