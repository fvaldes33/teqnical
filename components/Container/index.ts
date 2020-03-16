import styled from '../../styled';
import { ThemedStyledFunction } from 'styled-components';
import { IDefaultTheme } from '../../theme';
import { space, SpaceProps, flexbox, FlexboxProps, display, DisplayProps, get } from 'styled-system';
import { media } from '../../theme/breakpoints';

type ContainerProps = Omit<ThemedStyledFunction<'div', IDefaultTheme, {}, never>, 'attrs'> & SpaceProps & FlexboxProps & DisplayProps & {
  thin?: boolean;
};

export default styled.div<ContainerProps>`
  height: 100%;
  margin: 0 auto;
  padding: 0 ${props => get(props.theme, 'space.5')}px;
  max-width: ${props => props.theme.siteMaxWidth};
  width: 100%;

  ${display};
  ${flexbox};
  ${space};

  ${props => props.thin && `max-width: 768px;`}

  ${media.xl} {
    padding: 0;
  }
`;
