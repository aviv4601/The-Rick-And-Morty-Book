import React, { useState, useEffect, Fragment } from "react";
import classes from "./Locations.module.css";
import FiguresList from "../Figuers/FiguresList";
import FilterByLocation from "../Filter/FilterByLocation";
import Footer from "../layout/Footer";
import Spinner from "../UI/Spinner";

const Locations = () => {
  const [locationId, setLocationId] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [residentsList, setResidentsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const URL = `https://rickandmortyapi.com/api/location/${locationId}`;
  const { name, type, dimension } = fetchedData;

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      let data = await fetch(URL).then((res) => res.json());
      setFetchedData(data);

      let charactersData = await Promise.all(
        data.residents.map((character) => {
          return fetch(character).then((res) => res.json());
        })
      );
      setResidentsList(charactersData);
      setIsLoading(false);
    })();
  }, [URL]);

  return (
    <Fragment>
      {isLoading ? (
        <div style={{ justifyContent: "center", display: "flex" }}>
          <Spinner style={{ margin: "20%" }}></Spinner>
        </div>
      ) : (
        <div className="container">
          <div className="row">
            <div className="page-titles">
              <h1 className="text-center mb-4">
                Location :{" "}
                <span className="text-secondary">
                  {name === "" ? "Unknown" : name}
                </span>
              </h1>
              <h3 className="text-center">
                Dimension :{" "}
                <span className="text-secondary">
                  {dimension === "" ? "Unknown" : dimension}
                </span>
              </h3>
              <h5 className="text-center mt-3">
                Type :{" "}
                <span className="text-secondary">
                  {type === "" ? "Unknown" : type}
                </span>
              </h5>
            </div>
          </div>
          <div className="rounded-lg">
            <div className={classes["episode-selector"]}>
              <FilterByLocation
                total={100}
                setLocationId={setLocationId}
              ></FilterByLocation>
            </div>
            <div className={classes["characters-list"]}>
              <FiguresList figures={residentsList}></FiguresList>
            </div>
          </div>
          <Footer className="mt-3"></Footer>
        </div>
      )}
    </Fragment>
  );
};

export default Locations;
