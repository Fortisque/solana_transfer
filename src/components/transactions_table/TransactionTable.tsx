import { Card, Typography } from "@mui/material";

type Props = {};

function TransactionTable({}: Props) {
  return (
    <Card>
      <Typography color="inherit" variant="h4">
        Transfers
      </Typography>
    </Card>
  );
}

export default TransactionTable;
