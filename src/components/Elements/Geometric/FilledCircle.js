import styled from "styled-components";

const FilledCircle = styled('div')`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: absolute;

  /* Pseudo-elemento ::before para crear un círculo */
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #2f2f2f;
  }
`;

export default FilledCircle;