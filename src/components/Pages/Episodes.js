import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Spinner } from "react-bootstrap";
import "../../App.css";
import FiguresList from "../Figuers/FiguresList";
import FilterByEpisode from "../Filter/FilterByEpisode";
import Footer from "../layout/Footer";
import classes from "./Episodes.module.css";

const Episodes = (props) => {
  const [episodeId, setEpisodeId] = useState(1);
  const [fetchedData, setFetchedData] = useState([]);
  const [charactersList, setCharactersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const URL = `https://rickandmortyapi.com/api/episode/${episodeId}`;
  let { air_date, name } = fetchedData;

  useEffect(() => {
    (async function () {
      setIsLoading(true);
      let data = await fetch(URL).then((res) => res.json());
      setFetchedData(data);

      let charactersData = await Promise.all(
        data.characters.map((character) => {
          return fetch(character).then((res) => res.json());
        })
      );
      setCharactersList(charactersData);
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
          <div className="row" style={{ position: "relative" }}>
            <div className="page-titles mt-4">
              <h1 className="text-center mb-4">
                Episode :{" "}
                <span className="text-secondary">
                  {name === "" ? "Unknown" : name}
                </span>
              </h1>
              <h4 className="text-center">
                Air Date :{" "}
                <span className="text-secondary">
                  {air_date === "" ? "Unknown" : air_date}
                </span>
              </h4>
            </div>
          </div>
          <div className="rounded-lg" style={{ position: "relative" }}>
            <div className={classes["episode-selector"]}>
              <FilterByEpisode
                total={51}
                setEpisodeId={setEpisodeId}
              ></FilterByEpisode>
            </div>
            <div className={classes["characters-list"]}>
              <FiguresList figures={charactersList}></FiguresList>
            </div>
          </div>
          <Footer></Footer>
        </div>
      )}
    </Fragment>
  );
};

export default Episodes;
