import { Link } from "react-router-dom";

const Nav = () => {
  const classes = "text-2xl hover:text-sky-300 transition-all";
  return (
    <nav className="bg-white w-full p-4 flex justify-between drop-shadow-lg">
      <p className={classes}>Neos portfolio</p>
      <div className="flex gap-6">
        <Link to="/" className={classes}>
          startpage
        </Link>
        <Link to="/about" className={classes}>
          about
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
