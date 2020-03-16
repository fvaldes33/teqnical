import styled from "../../../styled";
import Container from "../../Container";

export const StyledHeader = styled.header`

  ${Container} {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .tagline {
    max-width: 375px;
    margin-bottom: 16px;
    text-align: center;
  }

  ${props => props.theme.media.lg} {
    height: 100px;

    ${Container} {
      flex-direction: row;
    }

    .tagline {
      margin-bottom: 0;
    }
  }
`;
