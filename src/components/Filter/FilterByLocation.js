import Form from "react-bootstrap/Form";

const FilterByLocation = (props) => {
  const onLocationChange = (event) => {
    props.setLocationId(event.target.value);
  };

  return (
    <Form.Select
      className="mb-3"
      aria-label="Default select example"
      onChange={onLocationChange}
      id="Location"
    >
      <option value="1">Choose a location...</option>
      {[...Array(props.total).keys()].map((locationNum, index) => {
        return (
          <option value={locationNum + 1} key={index}>
            Location - {locationNum + 1}
          </option>
        );
      })}
    </Form.Select>
  );
};

export default FilterByLocation;
