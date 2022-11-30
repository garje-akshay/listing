import React from "react";
import Card from "../../../components/Common/Card";
import { errorImage } from "../../../utilities/constants/base64images";

import "../index.css";

const MovieCard = ({ movie, index }) => {
  return (
    <Card key={index}>
      <div className="movie-item">
        <h6 className="title">{movie.Title}</h6>
        <img
          className="image"
          src={movie.Poster}
          alt={movie.Title}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = errorImage;
          }}
        />
        <div className="d-flex movie-item-input-section">
          <div
            className="icon heart"
            onClick={() => {
              alert(`I like ${movie.Title}`);
            }}
          >
            ♥
          </div>
          <div
            className="icon star"
            onClick={() => {
              alert(`I own ${movie.Title}`);
            }}
          >
            ★
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
