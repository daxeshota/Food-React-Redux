import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux";

const Items = ({ data }) => {
  const dispatch = useDispatch();

  const addFunc = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <div className="d-flex flex-wrap justify-content-center ">
      {data &&
        data.map((item) => {
          return (
            <div
              key={item.id}
              className="d-flex flex-column w-25 justify-content-between align-items-center m-4"

            >
              <img src={item.image} alt="" style={{ height: "300px", width: "300px" }} className="rounded-2" />
              <h3 className="text-center my-2">{item.title}</h3>
              <button onClick={() => addFunc(item)} className="btn btn-secondary">Add To Favorite</button>
            </div>
          );
        })}
    </div>
  );
};

export default Items;
