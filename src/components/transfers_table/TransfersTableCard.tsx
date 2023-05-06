import { Card } from "@mui/material";
import { DataStore } from "aws-amplify";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import "../../css/TransfersTable.css";
import { Transfer } from "../../models";
import TransfersTableHeader from "./TransfersTableHeader";
import {
  algoliaUpdatedObjectIDsAtom,
  transferDialogStateAtom,
  transferTableOrderAtom,
  transferTableOrderByAtom,
} from "./transferAtoms";
import { updateNewRecordsIntoAlgolia } from "../../algolia/synchronizeAlgolia";
import { processTransfersIntoRows } from "./processTransfersIntoRows";
import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-hooks-web";
import {
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_INDEX_NAME,
  ALGOLIA_PUBLIC_KEY,
} from "../../common_helpers/constants";
import TransfersTable from "./TransfersTable";

import "@algolia/autocomplete-theme-classic";
import TransferDialog from "../transfer_dialog/TransferDialog";

const searchClient = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_PUBLIC_KEY);

function TransfersTableCard() {
  const setAlgoliaUpdatedObjectIDs = useSetRecoilState(
    algoliaUpdatedObjectIDsAtom
  );

  useEffect(() => {
    const subscription = DataStore.observeQuery(Transfer).subscribe(
      (snapshot) => {
        // Unnecessary since algolia and amplify should always be in sync, but just in case
        // E.g. if we wipe the amplify DB then algolia should fully re-sync then uncomment this
        // ensureFullySyncedAlgolia(processTransfersIntoRows(snapshot.items));
      }
    );
    return () => subscription.unsubscribe();
  }, []);
  useEffect(() => {
    const subscription = DataStore.observe(Transfer).subscribe((msg) => {
      if (msg.opType === "UPDATE") {
        // Use the update rather than create since we want the createdAt time to be set already
        // Note this seems to get called twice, but there's no harm in updating algolia twice
        updateNewRecordsIntoAlgolia(
          processTransfersIntoRows([msg.element])
        ).then((objectIDs) => {
          setAlgoliaUpdatedObjectIDs(objectIDs);
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [setAlgoliaUpdatedObjectIDs]);

  const transferDialogState = useRecoilValue(transferDialogStateAtom);
  return (
    <Card className="transfers-table-wrapper">
      <InstantSearch searchClient={searchClient} indexName={ALGOLIA_INDEX_NAME}>
        <TransfersTableHeader searchClient={searchClient} />
        <TransfersTable />
      </InstantSearch>
      {transferDialogState.isOpen && <TransferDialog />}
    </Card>
  );
}

export default TransfersTableCard;
