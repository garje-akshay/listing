import { useEffect } from "react";
import Movies from "./containers/Movies";

const App = () => {
  (() => {
    localStorage.setItem("apiKey", "a6334099");
  })();

  return <Movies />;
};

export default App;
