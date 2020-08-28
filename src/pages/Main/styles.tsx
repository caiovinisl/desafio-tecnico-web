import styled from "styled-components";
import { colors } from "../../utils/colors";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 200px;

  input {
    margin-bottom: 20px;
    /* width: 100%; */
    width: 800px;
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

  @media (max-width: 900px) {
    input {
      width: 100%;
      min-width: 300px;
    }
  }
`;
