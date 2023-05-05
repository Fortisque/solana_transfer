import { useSetRecoilState } from "recoil";
import { AlgoliaRow } from "../../../algolia/synchronizeAlgolia";
import { useSearchBox } from "react-instantsearch-hooks-web";
import { hasPendingQueryOverrideAtom } from "../transferAtoms";

type Props = { item: AlgoliaRow; query: string };

const MAX_NUMBER_OF_CHARACTERS = 20;
const MINIMUM_FIRST_CHARACTERS = 5;

function AutocompleteResultRow({ item, query }: Props) {
  const { refine: setQuery } = useSearchBox();
  const setHasPendingQueryOverride = useSetRecoilState(
    hasPendingQueryOverrideAtom
  );
  const { signature } = item;
  const matchStartLocation = signature
    .toLowerCase()
    .indexOf(query.toLowerCase());
  const matchEndLocation = matchStartLocation + query.length;
  return (
    <div
      onClick={() => {
        setQuery(signature);
        setHasPendingQueryOverride(true);
      }}
    >
      {matchStartLocation === -1 ? (
        <>{signature.slice(0, MAX_NUMBER_OF_CHARACTERS)}..</>
      ) : matchEndLocation < 19 ? (
        <>
          {signature.slice(0, matchStartLocation)}
          <b>{signature.slice(matchStartLocation, matchEndLocation)}</b>
          {signature.slice(matchEndLocation, MAX_NUMBER_OF_CHARACTERS)}
          ..
        </>
      ) : (
        <>
          {/* Match location is greater than 19 */}
          {signature.slice(0, MINIMUM_FIRST_CHARACTERS)}..
          <b>{signature.slice(matchStartLocation, matchEndLocation)}</b>
          {signature.slice(
            matchEndLocation,
            matchEndLocation +
              (MAX_NUMBER_OF_CHARACTERS -
                (MINIMUM_FIRST_CHARACTERS + 2 + query.length))
          )}
          {matchEndLocation +
            (MAX_NUMBER_OF_CHARACTERS -
              (MINIMUM_FIRST_CHARACTERS + 2 + query.length)) >
          signature.length
            ? ""
            : ".."}
        </>
      )}
    </div>
  );
}

export default AutocompleteResultRow;
