import { HelpOutline } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Tooltip,
  Typography,
} from "@mui/material";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRecoilState } from "recoil";
import { isOnlyShowCurrentlyConnectedWalletAtom } from "./transferAtoms";
import InstantSearchManager from "./InstantSearchManager";
import AlgoliaAutocomplete from "./autocomplete/AlgoliaAutocomplete";
import { getAlgoliaResults } from "@algolia/autocomplete-js";
import { SearchClient } from "algoliasearch";
import { ALGOLIA_INDEX_NAME } from "../../common_helpers/constants";
import AutocompleteResultRow from "./autocomplete/AutocompleteResultRow";
import { AlgoliaRow } from "../../algolia/synchronizeAlgolia";

type Props = {
  searchClient: SearchClient;
};

function TransfersTableHeader({ searchClient }: Props) {
  const { publicKey } = useWallet();
  const publicKeyStr = publicKey?.toString();
  const [
    isOnlyShowCurrentlyConnectedWallet,
    setIsOnlyShowCurrentlyConnectedWallet,
  ] = useRecoilState(isOnlyShowCurrentlyConnectedWalletAtom);
  const algoliaFilterString =
    publicKeyStr == null || isOnlyShowCurrentlyConnectedWallet === false
      ? undefined
      : `from_address:${publicKeyStr}`;
  return (
    <Box className="transfers-table-header">
      <Typography color="inherit" variant="h4">
        <div>
          Transfers
          <Tooltip
            title="Only includes transfers made on this app"
            sx={{ marginLeft: 1, marginRight: 1 }}
          >
            <HelpOutline />
          </Tooltip>
        </div>
      </Typography>
      <InstantSearchManager />
      <Box sx={{ display: "flex", alignItems: "center", paddingBottom: 2 }}>
        <AlgoliaAutocomplete
          placeholder="Search transfers"
          getSources={({ query }) => [
            {
              sourceId: "transfersID",
              getItems() {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: ALGOLIA_INDEX_NAME,
                      query,
                      params: { hitsPerPage: 10, filters: algoliaFilterString },
                    },
                  ],
                });
              },
              templates: {
                item({ item }) {
                  return (
                    <AutocompleteResultRow
                      item={item as AlgoliaRow}
                      query={query}
                    />
                  );
                },
              },
            },
          ]}
        />
        <Tooltip
          title="Autocomplete uses algolia, prioritizing showing matches again signature, but table uses a simple string contains from DB"
          sx={{ marginLeft: 1, marginRight: 1 }}
        >
          <HelpOutline />
        </Tooltip>
      </Box>
      <Tooltip
        title={
          "Only shows transfers with a from address of the currently selected wallet" +
          `${
            publicKeyStr == null
              ? ". However this is not applied since no wallet is selected."
              : ` of ${publicKeyStr}`
          }`
        }
        sx={{ marginLeft: 1 }}
      >
        <FormControlLabel
          label="Only Current Wallet"
          control={
            <Checkbox
              color="default"
              checked={isOnlyShowCurrentlyConnectedWallet}
              onChange={() =>
                setIsOnlyShowCurrentlyConnectedWallet(
                  !isOnlyShowCurrentlyConnectedWallet
                )
              }
            />
          }
        />
      </Tooltip>
    </Box>
  );
}

export default TransfersTableHeader;
