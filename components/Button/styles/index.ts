import styled, { IThemeStyledFunction } from '../../../styled';
import { SpaceProps, ColorProps, LayoutProps, BorderProps, ButtonStyleProps, space, color, layout, border, buttonStyle } from 'styled-system';

export type IButtonProps = IThemeStyledFunction & SpaceProps & ColorProps & LayoutProps & BorderProps & ButtonStyleProps & {
  isLoading?: boolean;
}

const Button = styled.button<IButtonProps>`
  appearance: none;
  background: transparent;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1rem;
  outline: none;
  padding: ${props => props.theme.space[3]}px ${props => props.theme.space[4]}px;
  position: relative;

  svg {
    fill: white;
    transform: scale(0.75);
    transform-origin: center;
    transition: all 0.3s linear;
  }

  ${props => props.isLoading && `
    svg {
      animation: rotate 0.5s linear 0.3s infinite;
    }
  `}

  &:before,
  &:after {
    content: '';
    position: absolute;
    transition: all 0.2s ease;
  }

  &:before {
    bottom: -3px;
    height: 100%;
    left: -3px;
    width: 100%;
    z-index: -1;
  }

  &:hover {
    &::before {
      bottom: -6px;
      left: -6px;
    }
  }

  ${space}
  ${color}
  ${layout}
  ${border}
  ${buttonStyle}

  @keyframes rotate {
    0% { transform: scale(0.75) rotate(0deg); }
    100% { transform: scale(0.75) rotate(360deg); }
  }
`;

export { Button };
