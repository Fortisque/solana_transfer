import { Card } from "@mui/material";
import { useWallet } from "@solana/wallet-adapter-react";
import { DataStore } from "aws-amplify";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import "../../css/TransfersTable.css";
import { Transfer } from "../../models";
import TransfersTableHeader from "./TransfersTableHeader";
import {
  algoliaUpdatedObjectIDsAtom,
  isOnlyShowCurrentlyConnectedWalletAtom,
  transferTableOrderAtom,
  transferTableOrderByAtom,
} from "./transferAtoms";
import { updateNewRecordsIntoAlgolia } from "../../algolia/synchronizeAlgolia";
import { processTransfersIntoRows } from "./processTransfersIntoRows";
import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-hooks-web";
import {
  ALGOLIA_APPLICATION_ID,
  ALGOLIA_PUBLIC_KEY,
} from "../../common_helpers/constants";
import TransfersTable from "./TransfersTable";
import { getReplicaIndexName } from "./getHeadCellsUtils";

import '@algolia/autocomplete-theme-classic';

const searchClient = algoliasearch(ALGOLIA_APPLICATION_ID, ALGOLIA_PUBLIC_KEY);

function TransfersTableCard() {
  const { publicKey } = useWallet();
  const publicKeyStr = publicKey?.toString();
  const isOnlyShowCurrentlyConnectedWallet = useRecoilValue(
    isOnlyShowCurrentlyConnectedWalletAtom
  );
  const setAlgoliaUpdatedObjectIDs = useSetRecoilState(
    algoliaUpdatedObjectIDsAtom
  );

  useEffect(() => {
    const subscription = DataStore.observeQuery(
      Transfer,
      publicKeyStr == null || isOnlyShowCurrentlyConnectedWallet === false
        ? undefined
        : (t) => t.from_address.eq(publicKeyStr)
    ).subscribe((snapshot) => {
      // Unnecessary since algolia and amplify should always be in sync, but just in case
      // E.g. if we wipe the amplify DB then algolia should fully re-sync
      // ensureFullySyncedAlgolia(processTransfersIntoRows(snapshot.items));
    });
    return () => subscription.unsubscribe();
  }, [publicKeyStr, isOnlyShowCurrentlyConnectedWallet]);
  useEffect(() => {
    const subscription = DataStore.observe(Transfer).subscribe((msg) => {
      if (msg.opType === "UPDATE") {
        // Use the update since we want the createdAt time to be set already
        updateNewRecordsIntoAlgolia(
          processTransfersIntoRows([msg.element])
        ).then((objectIDs) => {
          setAlgoliaUpdatedObjectIDs(objectIDs);
        });
      }
    });
    return () => subscription.unsubscribe();
  }, [setAlgoliaUpdatedObjectIDs]);

  const order = useRecoilValue(transferTableOrderAtom);
  const orderBy = useRecoilValue(transferTableOrderByAtom);
  return (
    <Card className="transfers-table-wrapper">
      <InstantSearch
        searchClient={searchClient}
        indexName={getReplicaIndexName({ order, orderBy })}
      >
        <TransfersTableHeader searchClient={searchClient} />
        <TransfersTable />
      </InstantSearch>
    </Card>
  );
}

export default TransfersTableCard;
