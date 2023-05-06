import { TransferRow } from "../processTransfersIntoRows";
import { headCells } from "./getHeadCellsUtils";

export default function getFilteredRows(
  rows: Array<TransferRow>,
  searchQuery: string
): Array<TransferRow> {
  if (searchQuery === "") {
    return rows;
  }
  return rows.filter((r) => {
    return headCells.some(
      (header) => r[header.id].toString().indexOf(searchQuery) != -1
    );
  });
}
