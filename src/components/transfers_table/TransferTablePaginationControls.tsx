import { TablePagination } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import {
  transferTablePageNumberAtom,
  transferTableRowsPerPageAtom,
} from "./transferAtoms";
import { useInfiniteHits, usePagination } from "react-instantsearch-hooks-web";

function TransferTablePaginationControls() {
  const { hits, isFirstPage, isLastPage } = useInfiniteHits();
  const { nbHits } = usePagination();
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
      // If searching we will probably limit down to a single page and therefore can use hits length
      // nbHits does not take into account the search string which is sad.
      count={isFirstPage && isLastPage ? hits.length : nbHits}
      rowsPerPage={rowsPerPage}
      page={pageNumber}
      onPageChange={(_event: any, page: number) => setPageNumber(page)}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

export default TransferTablePaginationControls;
