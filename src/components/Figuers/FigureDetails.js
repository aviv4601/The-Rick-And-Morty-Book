import classes from "./FigureDetails.module.css";
import Card from "react-bootstrap/Card";
import { Fragment } from "react";
import VerticallyCenteredModal from "../UI/VerticallyCenteredModal";

function FigureDetails(props) {
  const figureStatusColorClassname = props.figureDetails.status;
  const figureFirstSeenEpisodeLink = props.figureDetails.episode[0];
  const figureStatus =
    props.figureDetails.status[0].toUpperCase() +
    props.figureDetails.status.slice(1);

  return (
    <Fragment>
      <Card className={classes.card} onClick={props.onClick}>
        <div style={{ flex: 2 }}>
          <Card.Img className="img-fluid" src={props.figureDetails.image} />
        </div>
        <div style={{ flex: 2.5 }}>
          <Card.Body>
            <Card.Title className={classes.title}>
              {props.figureDetails.name}
            </Card.Title>
            <div className="mt-4">
              <div className={classes["status-species-div"]}>
                <span
                  className={
                    classes[`figure-status-color-${figureStatusColorClassname}`]
                  }
                ></span>
                <span>
                  {figureStatus} - {props.figureDetails.species}
                </span>
              </div>
            </div>
          </Card.Body>
        </div>
      </Card>
      <VerticallyCenteredModal
        figureFirstSeenEpisodeLink={figureFirstSeenEpisodeLink}
        figureDetails={props.figureDetails}
        isShow={props.isSelected}
        onHide={props.onClick}
      ></VerticallyCenteredModal>
    </Fragment>
  );
}

export default FigureDetails;
