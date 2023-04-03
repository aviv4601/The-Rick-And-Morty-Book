import { Modal, Card } from "react-bootstrap";
import classes from "./VerticallyCenteredModal.module.css";
import { GreenBadge, GreyBadge, RedBadge } from "../UI/Badge";

const VerticallyCenteredModal = (props) => {
  const figureStatus =
    props.figureDetails.status[0].toUpperCase() +
    props.figureDetails.status.slice(1);

  return (
    <>
      <Modal
        onHide={props.onHide}
        show={props.isShow}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Card>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {props.figureDetails.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="display-flex">
            <div className={classes["modal-img"]}>
              <Card.Img className="img-fluid" src={props.figureDetails.image} />
            </div>
            <div className="mt-3">
              <span>
                <h5 style={{ color: "gray", fontWeight: "bold" }}>
                  Last known location:
                </h5>
              </span>
              <span>{props.figureDetails.location.name}</span>
              <div className="mt-2">
                <span>
                  <h5 style={{ color: "gray", fontWeight: "bold" }}>Origin:</h5>
                </span>
                <span>{props.figureDetails.origin.name}</span>
              </div>
              <div
                className="mt-2"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <span>
                    <h5 style={{ color: "gray", fontWeight: "bold" }}>
                      Gender:
                    </h5>
                  </span>
                  <span>{props.figureDetails.gender}</span>
                </div>
                <div className={classes["badge"]}>
                  {props.figureDetails.status === "Alive" && <GreenBadge />}
                  {figureStatus === "Unknown" && <GreyBadge />}
                  {props.figureDetails.status === "Dead" && <RedBadge />}
                </div>
              </div>
            </div>
          </Modal.Body>
        </Card>
      </Modal>
    </>
  );
};
export default VerticallyCenteredModal;
