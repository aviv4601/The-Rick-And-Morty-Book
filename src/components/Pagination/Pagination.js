import * as React from "react";
import classes from "./Pagination.module.css";
import ReactPaginate from "react-paginate";

const Pagination = (props) => {
  const changePageNumber = (data) => {
    props.setPageNumber(data.selected + 1);
  };

  return (
    <div className={classes["container"]}>
      <ReactPaginate
        className="pagination justify-content-center"
        forcePage={props.pageNumber === 1 ? 0 : props.pageNumber - 1}
        pageCount={props.info?.pages}
        previousLabel={window.innerWidth > 520 ? "Prev" : null}
        nextLabel="Next"
        nextClassName="btn btn-outline-secondary"
        previousClassName="btn btn-outline-secondary"
        pageClassName="btn btn-outline-secondary"
        pageLinkClassName="btn btn-outline-secondary"
        onPageChange={changePageNumber}
        activeClassName="active"
        marginPagesDisplayed="1"
        pageRangeDisplayed="2"
      ></ReactPaginate>
    </div>
  );
};

export default Pagination;
