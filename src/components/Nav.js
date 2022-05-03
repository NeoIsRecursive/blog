import { Link } from "react-router-dom";

export default () => {
  return (
    <nav>
      <Link to="/">startpage</Link>
      <Link to="/about">about</Link>
    </nav>
  );
};
