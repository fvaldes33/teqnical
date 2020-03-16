import styled from "../../../styled";

export const StyledSearchBar = styled.div`
  position: relative;

  input {
    appearance: none;
    border: none;
    background: ${props => props.theme.colors.primary};
    font-family: ${props => props.theme.fonts.body};
    font-size: 1rem;
    height: 64px;
    outline: none;
    padding: ${props => props.theme.space[3]}px ${props => props.theme.space[4]}px;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
  }
`;
