import { useState, useEffect, Fragment } from "react";
import Header from "../layout/Header";
import FiguresList from "../Figuers/FiguresList";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchingFigures/SearchBar";
import Footer from "../layout/Footer";

const Homepage = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  let { results, info } = fetchedData;

  const URL = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searchData}&status=${selectedStatus}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(URL).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [URL]);

  return (
    <Fragment>
      <Header></Header>
      <div className="container rounded bg-dark">
        <SearchBar
          searchData={searchData}
          setSearchData={setSearchData}
          setPageNumber={setPageNumber}
          setSelectedStatus={setSelectedStatus}
        ></SearchBar>
        {<FiguresList figures={results}></FiguresList>}{" "}
        <Pagination
          info={info}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        ></Pagination>
        <Footer></Footer>
      </div>
    </Fragment>
  );
};

export default Homepage;
