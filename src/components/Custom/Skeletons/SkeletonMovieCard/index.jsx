import React, { memo } from "react";
import Card from "../../../Common/Card";
import { skeleton } from "../../../../utilities/constants/base64images";

import "./index.css";

const SkeletonMovieCard = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }, (v, i) => i + 1).map((i) => (
        <Card key={i}>
          <div className="movie-item">
            <img className="skeleton-image" src={skeleton} alt={"skeleton"} />
          </div>
        </Card>
      ))}
    </>
  );
};

export default memo(SkeletonMovieCard);
