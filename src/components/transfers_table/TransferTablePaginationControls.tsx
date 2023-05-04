import { TablePagination } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { TransferRow } from "./TransfersTableRow";
import { transferTablePageNumberAtom, transferTableRowsPerPageAtom } from "./transferAtoms";

type Props = { rows: Array<TransferRow> };

function TransferTablePaginationControls({ rows }: Props) {
  const [pageNumber, setPageNumber] = useRecoilState(
    transferTablePageNumberAtom
  );
  const [rowsPerPage, setRowsPerPage] = useRecoilState(
    transferTableRowsPerPageAtom
  );
    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPageNumber(0);
    };
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      component="div"
      count={rows.length}
      rowsPerPage={rowsPerPage}
      page={pageNumber}
      onPageChange={(_event: any, page: number) => setPageNumber(page)}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

export default TransferTablePaginationControls;
