import { RecoilState, atom } from "recoil";

import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const isDarkThemeAtom: RecoilState<boolean | null> = atom<
  boolean | null
>({
  key: "isDarkThemeAtom",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
