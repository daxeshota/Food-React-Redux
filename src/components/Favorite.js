import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromcart, emtCart, incItem, decItem } from "../redux";

const Favorite = () => {
  const favItems = useSelector((state) => state.cartReducer.carts);
  console.log(favItems);
  const dispatch = useDispatch();

  const dltFunc = (id) => {
    dispatch(removeFromcart(id));
  };
  const dltAll = (id) => {
    dispatch(emtCart());
  };
  const inc = (item) => {
    dispatch(incItem(item));
  };
  const dec = (item) => {
    dispatch(decItem(item));
  };

  const arr = favItems.map((ele) => {
    return ele.qnty * ele.price
  })

  const total = arr.reduce((a, b) => {
    return a + b
  }, 0)
  console.log(arr)
  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-center">
        {favItems.length !== 0 ? (
          favItems.map((fItem) => {
            return (

              <div key={fItem.id} className="d-flex w-50 my-2  border border-secondary rounded-2 p-2">
                <img src={fItem.image} alt="" style={{ height: "300px", width: "300px" }} className="rounded-2 mx-auto" />

                <div className="mx-5">
                  <h3 className="text-center">Item Detail</h3>
                  <div className="mt-5">
                    <h3 className="my-2">Name :  {fItem.title}</h3>
                    <h3 className="my-2">Price :  {fItem.price}<p className="fs-5">(for 1 item)</p></h3>
                    <div className="my-3 ms-1">
                      Quantity :
                      <button onClick={() => dec(fItem)} className="btn btn-secondary">-</button>
                      <span className="mx-2">{fItem.qnty}</span>

                      <button onClick={() => inc(fItem)} className="btn btn-secondary">+</button>
                    </div>
                  </div>
                  <button onClick={() => dltFunc(fItem.id)} className="btn btn-secondary">Delete</button>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="text-center">Please add some items in Favourite</h1>
        )}
        {favItems.length !== 0 && (
          <>
            <h3 className="mt-4">Total Amount : {total}</h3>
            <button className="mt-3 btn btn-secondary" onClick={() => dltAll()}>Empty List</button></>
        )}
      </div>
    </>
  );
};

export default Favorite;
