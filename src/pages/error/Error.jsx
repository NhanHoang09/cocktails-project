import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const Error = () => {
  return (
    <section className="error">
      <div className="error-container">
        <h1>Oop! It's a dead end</h1>
        <Link to="/" className="btn btn-primary">
          Back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
