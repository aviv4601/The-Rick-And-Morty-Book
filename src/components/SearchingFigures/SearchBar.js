import StatusSelector from "../Filter/StatusSelector";
import classes from "./SearchBar.module.css";
import Form from "react-bootstrap/Form";

function SearchBar(props) {
  const handleSearch = (event) => {
    event.preventDefault();
    const query = event.target.value;
    props.setSearchData(query);
    props.setPageNumber(1);
  };

  return (
    <div className={classes["filter-container"]}>
      <Form.Control
        className={classes["form"]}
        onChange={handleSearch}
        placeholder="Search by name..."
        type="text"
        value={props.searchData}
      ></Form.Control>
      <StatusSelector
        setSelectedStatus={props.setSelectedStatus}
      ></StatusSelector>
    </div>
  );
}

export default SearchBar;
