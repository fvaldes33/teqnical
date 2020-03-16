import styled from "../../../styled";

export const StyledLoader = styled.div`
  animation: progress 2s ease infinite;
  background-color: ${props => props.theme.colors.dark};
  height: 10px;
  left: 0;
  position: absolute;
  top: 0;
  width: 0%;
  z-index: 999;

  @keyframes progress {
    0% { width: 0%; }
    100% { width: 100%; }
  }
`;
