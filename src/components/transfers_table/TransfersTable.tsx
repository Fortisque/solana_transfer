import { HelpOutline } from "@mui/icons-material";
import { Card, Tooltip, Typography } from "@mui/material";
import "../../css/TransfersTable.css";
import { DataStore } from "aws-amplify";
import { Transfer } from "../../models";
import { useEffect, useState } from "react";

function TransfersTable() {
  const [transfers, setTransfers] = useState<Array<Transfer>>([]);

  async function fetchTransactions() {
    const models = await DataStore.query(Transfer);
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
