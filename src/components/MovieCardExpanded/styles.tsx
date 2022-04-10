import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 500px;
  background-color: ${colors.lightGrey};

  margin-bottom: 20px;

  p {
    font-size: 12px;
  }

  hr {
    border-top: 1px solid ${colors.secondary};
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .inner {
    display: flex;
  }

  .header {
    background-color: ${colors.grey};
    color: ${colors.primary};
    width: 100%;

    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      margin-left: 20px;
    }

    p {
      margin-right: 20px;
    }
  }

  .rating {
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.primary};
    color: ${colors.secondary};
    border-radius: 50%;
    border: 4px solid ${colors.secondary};

    h1 {
      font-size: 28px;
    }
  }

  .content {
    padding: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    .date {
      margin-left: 70px;
    }

    h3,
    h4 {
      color: ${colors.primary};
      margin: 0;
    }
  }

  .image {
    img {
      width: 300px;
      height: 440px;
      object-fit: cover;
    }
  }

  .badges {
    display: flex;
  }

  .infos {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: auto;
    background-color: ${colors.lightGrey};

    margin-bottom: 20px;

    p {
      font-size: 12px;
    }

    hr {
      border-top: 1px solid ${colors.secondary};
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .inner {
      display: flex;
      flex-direction: column-reverse;
    }

    .header {
      background-color: ${colors.grey};
      color: ${colors.primary};
      width: 100%;

      height: 60px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        margin-left: 20px;
        font-size: 20px;
      }

      p {
        margin-right: 20px;
      }
    }

    .rating {
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${colors.primary};
      color: ${colors.secondary};
      border-radius: 50%;
      border: 4px solid ${colors.secondary};

      h1 {
        font-size: 28px;
      }
    }

    .content {
      width: 280px;
      padding: 50px;
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .date {
        margin-left: 70px;
      }

      h3,
      h4 {
        color: ${colors.primary};
        margin: 0;
      }
    }

    .image {
      img {
        width: 300px;
        height: 440px;
        object-fit: cover;
      }
    }

    .badges {
      display: flex;
    }

    .infos {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 20px;

      .info {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
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
