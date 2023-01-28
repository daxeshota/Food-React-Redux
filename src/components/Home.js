import React from "react";
import { useState } from "react";
import Items from "./Items";


const Home = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState();

  const serachData = async (e) => {
    e.preventDefault();
    const responce = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&query=${input}&number=20`
    );
    const res = await responce.json();
    const result = res.results;
    setInput("");
    setData(result);
  };

  return (
    <>
      {!data && <h1 className="text-center my-2">Please Search your Favourite Item</h1>}
      {/* Search box start */}
      <div>
        <form onSubmit={serachData} className="text-center my-4 d-flex justify-content-center ">
          <input
          className="rounded w-25 p-1 mx-2"
            value={input}
            type="text"
            placeholder="Enter Your Dish Name"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" className="btn btn-secondary">Search</button>
        </form>
      </div>
      {/* serach box end  */}

      {/* Items component start */}
      <Items data={data} />
      {/* Items component end */}
    </>
  );
};

export default Home;
