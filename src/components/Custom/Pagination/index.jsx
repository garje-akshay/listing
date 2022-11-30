import React, { useState } from "react";
import Translation from "../../../utilities/translation/Translation";
import Button from "../../Common/Button";

const style = {
  active: {
    backgroundColor: "blueviolet",
    color: "white",
  },
  hide: {
    visibility: "hidden",
  },
};

const Pagination = ({ total, getPageData, activePage }) => {
  const handleOnPageButtonClick = (page) => {
    getPageData(page);
  };

  const handleOnNextClick = () => {
    if (activePage < Math.ceil(total / 10))
      handleOnPageButtonClick(activePage + 1);
  };

  const handleOnPrevClick = () => {
    if (activePage > 1) handleOnPageButtonClick(activePage - 1);
  };

  return (
    <div className="d-flex">
      <Button onClick={handleOnPrevClick}>
        <Translation>prev</Translation>
      </Button>
      {/*
      //Shows All Buttons 
      Array.from({ length: Math.ceil(total / 10) }, (v, i) => i + 1).map(
        (n) => (
          <Button
            style={n === activePage ? style.active : {}}
            key={n}
            onClick={() => handleOnPageButtonClick(n)}
          >
            {n}
          </Button>
        )
      )*/}

      <Button
        style={activePage == 1 ? style.hide : {}}
        key={activePage - 1}
        onClick={() => handleOnPageButtonClick(activePage - 1)}
      >
        {activePage - 1}
      </Button>

      <Button
        style={style.active}
        key={activePage}
        onClick={() => handleOnPageButtonClick(activePage)}
      >
        {activePage}
      </Button>

      <Button
        style={activePage == Math.ceil(total / 10) ? style.hide : {}}
        key={activePage + 1}
        onClick={() => handleOnPageButtonClick(activePage + 1)}
      >
        {activePage + 1}
      </Button>

      <Button onClick={handleOnNextClick}>
        <Translation>next</Translation>
      </Button>
    </div>
  );
};

export default Pagination;
