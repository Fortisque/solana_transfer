import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Theme,
  useTheme,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { useRecoilState } from "recoil";
import {
  transferTableOrderAtom,
  transferTableOrderByAtom,
} from "./transferAtoms";
import { TransferRow } from "./processTransfersIntoRows";
import {
  headCells,
} from "./getHeadCellsUtils";

function TransfersTableHeaderRow() {
  const [order, setOrder] = useRecoilState(transferTableOrderAtom);
  const [orderBy, setOrderBy] = useRecoilState(transferTableOrderByAtom);
  const handleRequestSort = (property: keyof TransferRow) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const theme = useTheme<Theme>();
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"left"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ backgroundColor: theme.palette.background.default }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={() => handleRequestSort(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default TransfersTableHeaderRow;
