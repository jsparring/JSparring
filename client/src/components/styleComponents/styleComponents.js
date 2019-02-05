import styled from "styled-components";

export const LoginBody = styled.div`
  background-color: #2f2f2f;
  height: 100vh;
  width: 100%;
  font-family: "Ubuntu", sans-serif;

  position: relative;
`;

export const LoginContainer = styled.div`
  margin: 0;
  height: 500px;
  width: 50%;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoginHeader = styled.h1`
  text-align: center;
  margin: 0;
  color: #00e1ff;
`;

export const Description = styled.p`
  font-family: "Ubuntu", sans-serif;
  color: white;
  text-align: center;
`;

export const GithubButton = styled.button`
  background-color: #1ac914;
  border: none;
  padding: 20px;
  text-align: center;
`;

export const Head2headContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 49% 2% 49%;
  grid-column-gap: 0px;
`;

export const PlayerContainer = styled.div``;

export const VertLine = styled.div`
  height: 100%;
  background-color: #00edff;
`;

export const DescriptionContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: black;
  color: white;
`;
