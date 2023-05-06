import { TablePagination } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import {
  transferTablePageNumberAtom,
  transferTableRowsPerPageAtom,
} from "./transferAtoms";

type Props = {
  rowsCount: number;
};

function TransferTablePaginationControls({ rowsCount }: Props) {
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
      sx={{ flexShrink: 0 }}
      component="div"
      count={rowsCount}
      rowsPerPage={rowsPerPage}
      page={pageNumber}
      onPageChange={(_event: any, page: number) => setPageNumber(page)}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

export default TransferTablePaginationControls;
