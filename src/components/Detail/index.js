import React, { useState } from "react";
import { Content } from "../Content";
import { MainContainer, Link2 } from "./styles";
import { test } from "../Content";
import { Link } from "../Content/styles";

export const Detail = props => {
  const [list, setCount] = useState([]);
  // const fetchList = async () => {
  //   const apiCall = await fetch("https://swapi.co/api/people");
  //   const user = await apiCall.json();
  //   console.log(user.results);
  //   setCount(user.results);
  // };

  // useEffect(() => {
  //   fetchList();
  // }, []);



  console.log(props);

  return (
    <div>
      <Link to="/">Home</Link>
      
    </div>
  );
};
