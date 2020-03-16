import styled from "../../../styled";

export const StyledQuestionForm = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: ${props => props.theme.space[5]}px;
  }

  .form {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    label {
      padding-bottom: 8px;
    }

    input,
    textarea {
      appearance: none;
      -webkit-appearance: none;
      border: 1px solid ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.primary};
      outline: none;
      padding: 12px 16px;
      font-family: ${props => props.theme.fonts.body};
      font-size: 1rem;
    }

    &-error {
      color: ${props => props.theme.colors.error};
    }

    &-group {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
      width: 100%;

      &.submit {
        margin-top: 16px;
        width: unset;
      }
    }
  }
`;
