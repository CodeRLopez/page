import styled from "styled-components"

const Card = styled.div`
  display: flex;
  width: 13%;
  min-width: 245px;
  height: 200px;
  background-color: rgb(56 52 52 / 11%);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  align-items: center;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #ed6c545c;
  }
  @media(max-width: 478px) {
    min-width: 50%;
  }
`;

export default Card;