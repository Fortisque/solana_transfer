import algoliasearch from "algoliasearch";
import { TransferRow } from "../components/transfers_table/processTransfersIntoRows";
import {
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_INDEX_NAME,
} from "../common_helpers/constants";
import { nullThrows } from "../common_helpers/nullThrows";

// TODO move this to private variable
const client = algoliasearch(
  ALGOLIA_APPLICATION_ID,
  nullThrows(process.env.REACT_APP_ALGOLIA_BACKEND_SECRET_KEY)
);
const index = client.initIndex(ALGOLIA_INDEX_NAME);

export type AlgoliaRow = TransferRow & {
  objectID: string;
  signature_suffixes: Array<string>;
  from_address_suffixes: Array<string>;
  to_address_suffixes: Array<string>;
};

// Algolia can only search by prefix
function getAllSuffixes(str: string): Array<string> {
  let modifiedStr = str;
  const result = [];
  while (modifiedStr.length > 1) {
    modifiedStr = modifiedStr.slice(1);
    result.push(modifiedStr);
  }
  return result;
}

function convertTransferRowToAlgoliaRow(row: TransferRow): AlgoliaRow {
  return {
    ...row,
    objectID: row.id,
    signature_suffixes: getAllSuffixes(row.signature),
    from_address_suffixes: getAllSuffixes(row.from_address),
    to_address_suffixes: getAllSuffixes(row.to_address),
  };
}

// This wipes the algolia DB and replaces all the objects. If you just
// want to add additional use https://www.algolia.com/doc/api-reference/api-methods/save-objects/
// .saveObject
export async function ensureFullySyncedAlgolia(
  transfers: Array<TransferRow>
): Promise<Array<string>> {
  const result = await index
    .replaceAllObjects(transfers.map((t) => convertTransferRowToAlgoliaRow(t)))
    .wait();
  return result.objectIDs;
}

export async function updateNewRecordsIntoAlgolia(
  transfers: Array<TransferRow>
): Promise<Array<string>> {
  const result = await index
    .partialUpdateObjects(
      transfers.map((t) => convertTransferRowToAlgoliaRow(t)),
      {
        createIfNotExists: true,
      }
    )
    .wait();
  return result.objectIDs;
}
