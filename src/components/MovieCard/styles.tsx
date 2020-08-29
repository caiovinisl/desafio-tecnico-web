import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-width: 800px;
  height: 300px;
  background-color: ${colors.grey};
  overflow: hidden;
  position: relative;
  margin-bottom: 20px;
  cursor: pointer;

  p {
    font-size: 12px;
  }

  .header {
    background-color: ${colors.primary};
    color: ${colors.secondary};
    width: 100%;
    position: absolute;
    top: 0;
    height: 60px;
    display: flex;
    align-items: center;

    .title {
      margin-left: 10px;
    }

    .rating {
      width: 50px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${colors.primary};
      border-radius: 50%;
      border: 4px solid ${colors.secondary};
      transform: translateY(25px);
      margin-left: 20px;

      h1 {
        font-size: 20px;
      }
    }
  }

  .content {
    padding: 20px;
    text-align: left;

    .date {
      margin-left: 70px;
    }
  }

  .image {
    img {
      width: 200px;
      object-fit: cover;
    }
  }

  .badges {
    display: flex;
  }

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    min-width: 300px;
    height: 800px;
    background-color: ${colors.grey};
    overflow: hidden;
    position: relative;
    margin-bottom: 20px;
    cursor: pointer;

    p {
      font-size: 12px;
    }

    .header {
      background-color: ${colors.primary};
      color: ${colors.secondary};
      width: 100%;

      height: 60px;
      display: flex;
      align-items: center;

      h1 {
        font-size: 20px;
      }

      .title {
        margin-left: 5px;
      }

      .rating {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${colors.primary};
        border-radius: 50%;
        border: 4px solid ${colors.secondary};
        transform: translateY(25px);
        margin-left: 20px;

        h1 {
          font-size: 20px;
        }
      }
    }

    .content {
      padding: 20px;
      text-align: left;

      .date {
        margin-left: 70px;
      }
    }

    .image {
      img {
        width: 100%;
        object-fit: cover;
      }
    }

    .badges {
      display: flex;
    }
  }
`;

export const Badge = styled.div`
  height: 14px;
  padding: 5px;
  border: 1px solid ${colors.primary};
  border-radius: 20px;
  color: ${colors.primary};
  background-color: ${colors.white};
  font-size: 12px;
  font-family: "Abel", sans-serif;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-right: 10px;
`;
