import React, { useState, useEffect } from "react";
// import { Router } from "@reach/router";
import { Detail } from "../Detail";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Box, TittleBox, ContentBox, MainContainer, TextBox } from "./styles";

export const Content = () => {
  const [list, setCount] = useState([]);
  const fetchList = async () => {
    const apiCall = await fetch("https://swapi.co/api/people");
    const user = await apiCall.json();
    console.log(user.results);
    let listado = user.results;

    for (const value of listado) {
      const position = listado.indexOf(value) + 1;
      value["position"] = position;
    }

    console.log(listado);

    setCount(user.results);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <MainContainer>
      {list.map(item => (
        <Box>
          <TittleBox>
            <TextBox>{item.name}</TextBox>
          </TittleBox>
          <ContentBox>
            <TextBox>Birth year: {item.birth_year}</TextBox>
            <TextBox>Gender: {item.gender}</TextBox>
            <TextBox>Height:{item.height}</TextBox>
            <Link
              to={{
                pathname: "/detail",
                test: { item }
              }}
            >
              {" "}
              detalles
            </Link>
          </ContentBox>
        </Box>
      ))}
    </MainContainer>
  );
};

// <Link to="/detail" tittle={23} onClick={test} className="whatev">
// Details
// </Link>

// import { List, Item } from './styles'

// export const ListOfCategories = () => {
//   return (
//     <List>
//       {
//         [1, 2, 3, 4].map(category => <Item key={category}><Category /></Item>)
//       }
//     </List>
//   )
// }

// to = {{path: "/detail", aboutProps: {name: {item}}}}
