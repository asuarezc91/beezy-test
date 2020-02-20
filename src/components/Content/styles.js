import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";

export const MainContainer = styled.div`
  background: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Box = styled.div`
  background: red;
  height: 200px;
  width: 600px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

export const TittleBox = styled.div`
  background: blue;
  height: 50px;
  width: 600px;
`;

export const ContentBox = styled.div`
  background: green;
  height: 150px;
  width: 600px;
`;

export const TextBox = styled.p`
  margin: 10px;
  color: white;
`;

export const Link = styled(LinkRouter)`
  color: white;
  cursor: pointer;
`;