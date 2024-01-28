import React from "react";
import Nav_Bar from "./Components/navbar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setFavProd } from "../../front-end-user/src/features/favCartSlice";
const App = () => {
 
  return (
    <>
      <Nav_Bar />
    </>
  );
};

export default App;
