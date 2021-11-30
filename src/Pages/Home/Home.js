import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home-bg">
        <h1>Rose Coffee Shop</h1>
        <h2>Your online coffee store</h2>

        <Link
          className="heroBtn"
          role="button"
          to="/products"
        >
          Delight Yourself
        </Link>
      </div>
    </>
  );
}

export default Home;
