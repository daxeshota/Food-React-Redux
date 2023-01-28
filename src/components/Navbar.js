import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const arr = useSelector((state)=>state.cartReducer.carts)

  return (
    <div className="d-flex justify-content-center bg-secondary rounded-3 m-3 ">
      <Link className="item m-3 text-white text-decoration-none" to="/">
        Home
      </Link>

      <Link className="item m-3 text-white text-decoration-none" to="/favorite">
        Favorite
        <span className="position-absolute translate-middle badge rounded-pill bg-white text-secondary">
          {arr.length}
        </span>
      </Link>
    </div>
  );
};

export default Navbar;
