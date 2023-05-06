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
  return (
    <Box
      sx={{
        display: "flex",
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Typography color="inherit" variant="h4">
        Transfers
        <Tooltip
          title="Only includes transfers made on this app"
          sx={{ marginLeft: 1 }}
        >
          <HelpOutline />
        </Tooltip>
      </Typography>
      <InstantSearchManager />
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
                    params: { hitsPerPage: 10 },
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
