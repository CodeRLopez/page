import styled from "styled-components"

const EmptyCircle = styled('div')`
  width: 50px;
  height: 50px;
  position: absolute;

  /* Pseudo-elemento ::before para crear el círculo exterior */
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border: 2px solid red;
    border-radius: 50%;
  }

  /* Pseudo-elemento ::after para crear el círculo interior vacío */
  &::after {
    content: '';
    display: block;
    width: 60%;
    height: 60%;
    border: 2px solid transparent;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default EmptyCircle;