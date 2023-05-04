import { HelpOutline } from "@mui/icons-material";
import { Card, Tooltip, Typography } from "@mui/material";
import "../../css/TransfersTable.css";

type Props = {};

function TransfersTable({}: Props) {
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
