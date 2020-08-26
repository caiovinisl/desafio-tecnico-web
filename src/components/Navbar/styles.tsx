import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Nav = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  background-color: ${colors.primary};
  display: flex;
  justify-content: center;
  align-content: center;
  color: ${colors.secondary};
`;
