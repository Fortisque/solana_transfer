import { useEffect } from "react";
import { Configure, useInstantSearch } from "react-instantsearch-hooks-web";
import { useRecoilValue } from "recoil";
import {
  algoliaUpdatedObjectIDsAtom,
  isOnlyShowCurrentlyConnectedWalletAtom,
  transferTablePageNumberAtom,
  transferTableRowsPerPageAtom,
} from "./transferAtoms";
import { useWallet } from "@solana/wallet-adapter-react";

function InstantSearchManager() {
  const instantSearch = useInstantSearch();
  const algoliaUpdatedObjectIDs = useRecoilValue(algoliaUpdatedObjectIDsAtom);
  useEffect(() => {
    // Smartly triggers refreshes based on when the last update is done.
    if (algoliaUpdatedObjectIDs != null) {
      instantSearch.refresh();
    }
    // Only call this on known updates
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [algoliaUpdatedObjectIDs]);
  const page = useRecoilValue(transferTablePageNumberAtom);
  const rowsPerPage = useRecoilValue(transferTableRowsPerPageAtom);
  const { publicKey } = useWallet();
  const publicKeyStr = publicKey?.toString();
  const isOnlyShowCurrentlyConnectedWallet = useRecoilValue(
    isOnlyShowCurrentlyConnectedWalletAtom
  );
  const algoliaFilterString =
    publicKeyStr == null || isOnlyShowCurrentlyConnectedWallet === false
      ? undefined
      : `from_address:"${publicKeyStr}"`;
  return (
    <Configure
      analytics={false}
      hitsPerPage={rowsPerPage}
      page={page}
      filters={algoliaFilterString}
    />
  );
}

export default InstantSearchManager;
