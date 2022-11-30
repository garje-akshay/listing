import React, { useCallback, useEffect, useRef, useState } from "react";
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

  const setActivePage = (page) => {
    activePage.current = page;
  };

  const getMovies = useCallback((page) => {
    setLoading(true);
    fetchMovies(MOVIES, {
      s: "marvel",
      page: page,
    }).then((response) => {
      if (response.Response == "True") {
        setMovies((prev) => {
          return { ...prev, [page]: response };
        });
        setActivePage(page);
        setLoading(false);
      }
    });
  }, []);

  const getMoviesFromLocal = (page) => {
    setMovies((prev) => {
      return { ...prev };
    });
    setActivePage(page);
  };

  useEffect(() => {
    getMovies(activePage.current);
  }, []);

  const checkIsPageDataAvailable = (page) => {
    return movies?.[page] === undefined;
  };

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
