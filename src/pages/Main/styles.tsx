import styled from "styled-components";
import { colors } from "../../utils/colors";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  max-width: 800px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  input {
    margin-bottom: 20px;
    width: 100%;
    max-width: 800px;
    background-color: ${colors.grey};
    border: none;
    border-radius: 20px;
    padding: 10px;
    ::placeholder {
      color: ${colors.primary};
    }
    outline-width: 0;
  }
`;
