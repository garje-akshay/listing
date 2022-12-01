import React, { useEffect, useRef, useState } from "react";
import Pagination from "../../components/Custom/Pagination";
import { fetchMovies } from "../../services/movies";
import { MOVIES } from "../../utilities/constants/apiRoutes";
import MovieCard from "./MovieCard";
import SkeletonMovieCard from "../../components/Custom/Skeletons/SkeletonMovieCard";

import "./index.css";

const MoviesList = () => {
  const activePage = useRef(1);
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState({});

  //set active page
  const setActivePage = (page) => {
    activePage.current = page;
  };

  //get movies from api for given page
  const getMovies = (page) => {
    setLoading(true);
    fetchMovies(MOVIES, {
      s: "marvel",
      page: page,
    }).then((response) => {
      if (response.Response === "True") {
        setMovies((prev) => {
          return { ...prev, [page]: response };
        });
        setActivePage(page);
        setLoading(false);
      }
    });
  };

  //get movies from memoized object for given page
  const getMoviesFromLocal = (page) => {
    setMovies((prev) => {
      return { ...prev };
    });
    setActivePage(page);
  };

  //initial call
  useEffect(() => {
    getMovies(activePage.current);
  }, []);

  //check is memoized data availble
  const checkIsPageDataAvailable = (page) => {
    return movies?.[page] === undefined;
  };

  //get page data
  const getPageData = (page) => {
    checkIsPageDataAvailable(page) ? getMovies(page) : getMoviesFromLocal(page);
  };

  return (
    <div className="d-flex movie-list-section">
      <div className="d-flex movie-list">
        {!loading ? (
          movies[activePage.current]?.Search?.map((movie, index) => (
            <MovieCard movie={movie} index={index} key={index} />
          ))
        ) : (
          <SkeletonMovieCard count={10} />
        )}
      </div>
      <Pagination
        total={movies[activePage.current]?.totalResults}
        activePage={activePage.current}
        getPageData={getPageData}
      />
    </div>
  );
};

export default MoviesList;
