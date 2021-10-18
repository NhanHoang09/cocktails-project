import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";

const Cocktail = ({ id, name, info, image, glass }) => {
  return (
    <article className="cocktail">
      <div className="img-cocktail">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`./cocktail/${id}`} className="btn btn-primary btn-details">
          {" "}
          Detail{" "}
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
