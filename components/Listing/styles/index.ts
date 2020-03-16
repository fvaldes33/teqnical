import styled from "../../../styled";

export const StyledListing = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    background: ${props => props.theme.colors.primary};
    border-radius: 4px;
    padding: 16px;
    position: relative;
    margin-bottom: 16px;

    code {
      border-radius: 4px;
    }

    .trash {
      cursor: pointer;
      height: 24px;
      width: 24px;
      position: absolute;
      top: 16px;
      right: 16px;
      z-index: 1;

      svg {
        stroke: ${props => props.theme.colors.error};
        width: 100%;
      }
    }
  }
`;
