import { HelpOutline } from "@mui/icons-material";
import { Card, Tooltip, Typography } from "@mui/material";
import "../../css/TransfersTable.css";
import { API, DataStore } from "aws-amplify";
import { Transfers } from "../../models";
import { useEffect, useState } from "react";
import { listTransfers } from "../../graphql/queries";
import { ListTransfersQuery } from "../../API";
import { filterNulls } from "../../common_helpers/filterNulls";
import { notEmpty } from "../../common_helpers/notEmpty";

type Props = {};

function TransfersTable({}: Props) {
  const [transfers, setTransfers] = useState<Array<Transfers>>([]);

  async function fetchTransactions() {
    const models = await DataStore.query(Transfers);
    setTransfers(models);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);
  console.log(transfers);
  return (
    <Card className="transfers-table-wrapper">
      <Typography color="inherit" variant="h4">
        Transfers
        <Tooltip
          title="Only includes transfers made on this app"
          sx={{ marginLeft: 1 }}
        >
          <HelpOutline />
        </Tooltip>
      </Typography>
    </Card>
  );
}

export default TransfersTable;
