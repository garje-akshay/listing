import { getURLSearchParams } from "../utilities/translator/helper";

const fetchMovies = async (url, params) => {
  let apiUrl = new URL(url);
  apiUrl.search = getURLSearchParams(params);
  const response = await fetch(apiUrl);
  return await response.json();
};

export { fetchMovies };
