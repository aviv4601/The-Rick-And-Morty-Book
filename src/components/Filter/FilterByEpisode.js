import Form from "react-bootstrap/Form";

const FilterByEpisode = (props) => {
  const onEpisodeChange = (event) => {
    props.setEpisodeId(event.target.value);
  };

  return (
    <Form.Select
      className="mb-3"
      aria-label="Default select example"
      onChange={onEpisodeChange}
      id="Episode"
    >
      <option value="1">Choose an episode...</option>
      {[...Array(props.total).keys()].map((episodeNum, index) => {
        return (
          <option value={episodeNum + 1} key={index}>
            Episode - {episodeNum + 1}
          </option>
        );
      })}
    </Form.Select>
  );
};

export default FilterByEpisode;
