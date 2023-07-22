import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    background-color: #c4bebe;
    padding: 50px;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 850px;
    position: relative;
    text-align: justify;
    border-radius: 8px;

    button {
      width: 40px;
      height: 40px;
      border: none;
      position: absolute;
      top: 0px;
      right: 0px;
      cursor: pointer;
      border-radius: 8px;
    }

    p {
      margin-top: 15px;
    }
  }
`;
