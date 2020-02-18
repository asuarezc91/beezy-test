import React, { useEffect } from "react";
import { Test } from "./styles";

export const Content = () => {



  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto/")
      .then(response => {
        return response.json();
      })
      .then(response => {
        // console.log(response);
        esklasask(response); 
      });

     
  });

  function esklasask(response){

    console.log(response); 
  };
  
  




 
  return <Test></Test>;
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
