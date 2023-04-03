import React, { useState } from "react";
import FigureDetails from "./FigureDetails";
import classes from "./FiguresList.module.css";

function FiguresList(props) {
  const listOfFigures = props.figures || [];

  const [selectedFigure, setSelectedFigure] = useState(null);

  const handleFigureClick = (figure) => {
    setSelectedFigure((prevState) => {
      if (prevState && prevState.id === figure.id) {
        return null;
      }
      return figure;
    });
  };

  return (
    <div className="container rounded-top bg-dark mt-4 flex">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center">
        {listOfFigures.length === 0 ? (
          <p className={classes["no-figures-founded"]}>No figures founded...</p>
        ) : (
          listOfFigures.map((figure, index) => (
            <ul className={classes.ul} key={index}>
              <FigureDetails
                figureDetails={figure}
                lastLocation={figure.location.name}
                isSelected={selectedFigure && selectedFigure.id === figure.id}
                onClick={() => handleFigureClick(figure)}
              />
            </ul>
          ))
        )}
      </div>
    </div>
  );
}

export default FiguresList;
