import styled from 'styled-components';

export const LoginBody = styled.div`
  background-color: #2f2f2f;
  height: 100vh;
  width: 100%;
  font-family: 'Ubuntu', sans-serif;
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
  font-family: 'Ubuntu', sans-serif;
  color: white;
  text-align: center;
  font-weight: bold;
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
  grid-template-columns: 50% 50%;
  grid-column-gap: 0px;
`;

export const PlayerContainer = styled.div`
  margin: 20px;
  border-radius: 10px;
  padding: 20px;
  background-color: #060411;
`;

export const VertLine = styled.div`
  height: 100%;
  background-color: #00edff;
`;

export const DescriptionContainer = styled.div`
  font-family: 'Ubuntu', sans-serif;
  width: 100%;
  height: 200px;
  background-color: #223954;
  color: white;
  overflow: auto;
`;

export const SubmitBtn = styled.button`
  padding: 10px;
  background-color: #42afd0;
  border: none;
  margin-top: 10px;
  border-radius: 2px;
  color: white;
`;

export const LoadingModal = styled.div`
  height: 100%;
  width: 100%;
  background-color: #2f2f2f;
  z-index: 100;
  position: absolute;
  margin: 0 auto;
`;

export const ModalContent = styled.div`
  height: 80%;
  width: 50%;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-rows: 20% 80%;
`;

export const ModalHeader = styled.h1`
  text-align: center;
  font-size: 40px;
  color: white;
  font-family: 'Press Start 2P', cursive;
`;

export const GifImg = styled.img`
  margin: 0 auto;
`;

export const UsernameDisplay = styled.p`
  color: white;
  font-family: 'Press Start 2P', cursive;
  text-align: center;
`;

export const YouLoseContainer = styled.div`
  background-color: #2f2f2f;
  height: 100vh;
  width: 100vw;
  position: relative;
`;

export const YouLoseContent = styled.div`
  height: fit-content;
  width: 60%;
  background-color: black;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const YouLoseImage = styled.img`
  width: 50%;
`;

export const YouLoseHead = styled.h1`
  font-family: 'Press Start 2P', cursive;
  color: white;
`;

export const ResultText = styled.h3`
  font-family: 'Press Start 2P', cursive;
  color: red;
`;
