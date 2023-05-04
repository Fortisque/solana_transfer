import { RecoilState, atom } from "recoil";

export const isDarkThemeAtom: RecoilState<boolean | null> = atom<
  boolean | null
>({
  key: "isDarkThemeAtom",
  default: null,
});
