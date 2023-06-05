import styled from "styled-components"

const Triangle = styled('div')`
  width: 0;
  height: 0;
  border-left: 100px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 80px solid;
  position: absolute;
  transform: rotate(-20deg);
`;

export default Triangle;