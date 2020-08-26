import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: ${colors.grey};
  overflow: hidden;
  position: relative;

  .header {
    background-color: ${colors.primary};
    color: ${colors.secondary};
    width: 100%;
    position: absolute;
    top: 0;
    height: 60px;
    display: flex;
    align-items: center;

    h1 {
      margin-left: 20px;
    }
  }

  .content {
    padding: 20px;
    text-align: left;
  }

  .image {
    img {
      width: 200px;
      object-fit: cover;
    }
  }
`;
