import { Link } from "react-router-dom";

const Nav =  () => {
  const classes = "text-2xl "
  return (
    <nav className="bg-white w-full p-4 flex justify-between drop-shadow-lg">
      <p className={classes}>Portfolio</p>
      <div className="flex gap-12">
      <Link to="/" className={classes}>startpage</Link>
      <Link to="/about" className={classes}>about</Link>
      </div>
    </nav>
  );
};
export default Nav;