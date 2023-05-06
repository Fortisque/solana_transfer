import { useEffect } from "react";
import { Configure, useInstantSearch } from "react-instantsearch-hooks-web";
import { useRecoilValue } from "recoil";
import {
  algoliaUpdatedObjectIDsAtom,
  transferTablePageNumberAtom,
  transferTableRowsPerPageAtom,
} from "./transferAtoms";

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
  return <Configure analytics={false} hitsPerPage={rowsPerPage} page={page} />;
}

export default InstantSearchManager;
