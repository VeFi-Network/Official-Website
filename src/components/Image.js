import styled from "styled-components";

export const Image = styled.img`
  width: ${({ width }) => width || ""};
  height: ${({ height }) => height || ""};
  object-fit: ${({ ObjectFit }) => ObjectFit || "contain"};
  margin-top: ${({ marginTop }) => marginTop || "0px"};
  position: ${({ position }) => position || "relative"};
  right: 0;
  margin-right: 40px;
`;
