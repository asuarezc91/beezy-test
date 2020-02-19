import React, { useState, useEffect } from "react";
import { Box, TittleBox, ContentBox, MainContainer, TextBox } from "./styles";

export const Content = () => {
  const [list, setCount] = useState([]);

  // useEffect(() => {
  //   fetch("https://swapi.co/api/people")
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(response => {
  //       console.log(response.results);
  //       // setCount(response.results);
  //     });
  // }, [list]);

  const fetchList = async () => {
    const apiCall = await fetch("https://swapi.co/api/people");
    const user = await apiCall.json();
    console.log(user.results);
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
          </ContentBox>
        </Box>
      ))}
    </MainContainer>
  );
};

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
