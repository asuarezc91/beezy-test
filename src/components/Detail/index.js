import React, { useState, useEffect } from "react";
import { Content } from "../Content";
import { MainContainer, Link2 } from "./styles";
import { test } from "../Content";
// import { Link } from "../Content/styles";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const Detail = props => {
  const [detail, setDetail] = useState([]);

  const fetchDetail = async pos => {
    console.log(pos);
    const apiCall = await fetch("https://swapi.co/api/people/" + pos);
    console.log(apiCall);
    const ese = await apiCall.json();
    console.log(ese);
    setDetail(ese);
  };

  useEffect(() => {
    const location = props.history.location;
    const item = location.test.item;
    const pos = item.position;

    fetchDetail(pos);
  }, [props.history.location]);

  return (
    <div>
      <span>{detail.name}</span>
      <Link
        to={{
          pathname: "/"
        }}
      >
        {" "}
        Holando
      </Link>
    </div>
  );
};

// const [list, setCount] = useState([]);

//   const fetchList = async () => {
//     const apiCall = await fetch("https://swapi.co/api/people");
//     const user = await apiCall.json();
//     console.log(user.results);
//     setCount(user.results);
//   };

//   useEffect(() => {
//     fetchList();
//   }, []);

//   return (
//     <MainContainer>
//       {list.map(item => (
//         <Box>
//           <TittleBox>
//             <TextBox>{item.name}</TextBox>
//           </TittleBox>
//           <ContentBox>
//             <TextBox>Birth year: {item.birth_year}</TextBox>
//             <TextBox>Gender: {item.gender}</TextBox>
//             <TextBox>Height:{item.height}</TextBox>
//             <Link
//               to={{
//                 pathname: "/detail",
//                 test: { item }
//               }}
//             > detalles</Link>
//           </ContentBox>
//         </Box>
//       ))}
//     </MainContainer>
//   );
// };
