import Badge from "react-bootstrap/Badge";

const GreenBadge = () => {
  return (
    <h3>
      {" "}
      <Badge pill bg="success">
        Alive
      </Badge>
    </h3>
  );
};

const GreyBadge = () => {
  return (
    <h4>
      <Badge pill bg="secondary">
        Unknown
      </Badge>
    </h4>
  );
};

const RedBadge = () => {
  return (
    <h4>
      <Badge pill bg="danger">
        Dead
      </Badge>
    </h4>
  );
};

export { RedBadge, GreenBadge, GreyBadge };
