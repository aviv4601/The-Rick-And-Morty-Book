import React from "react";
import classes from "./StatusSelector.module.css";
import Form from "react-bootstrap/Form";

const StatusSelector = (props) => {
  const onSelectorChange = (event) => {
    const selectedStatus = event.target.value;
    props.setSelectedStatus(selectedStatus);
  };

  return (
    <div className={classes["status-select-div"]}>
      <Form.Select
        aria-label="Default select example"
        // name="Status"
        onChange={onSelectorChange}
        style={{ height: "-webkit-fill-available" }}
        size="sm"
      >
        <option value="">All figures</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="Unknown">Unknown</option>
      </Form.Select>
    </div>
  );
};

export default StatusSelector;
