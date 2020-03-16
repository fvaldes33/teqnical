import React from 'react';
import NextLink, { LinkProps } from 'next/link';
import Box from '../Box';
import { StyledSystemProps } from '../../types';
import { typographyStyles } from './styles';

export type AnchorProps = StyledSystemProps & Omit<LinkProps, 'as'>;

const ProxyLink: React.FC<AnchorProps> = ({ href, children, passHref, prefetch, replace, scroll, shallow, ...props }) => (
  <NextLink href={href} passHref={passHref} replace={replace} scroll={scroll} shallow={shallow} prefetch={prefetch}>
    <Box {...typographyStyles.Link} {...props}>
      {children}
    </Box>
  </NextLink>
);

const createComponent: (textStyle: StyledSystemProps, displayName: string) => React.FC<StyledSystemProps> = (textStyle, displayName) => {
  const component: React.FC<StyledSystemProps> = props => (
    <Box {...textStyle} {...props}>
      {props.children}
    </Box>
  );
  component.displayName = displayName;
  return component;
};

export const H1: React.FC<StyledSystemProps> = createComponent(typographyStyles.H1, 'H1');
export const H2: React.FC<StyledSystemProps> = createComponent(typographyStyles.H2, 'H2');
export const H3: React.FC<StyledSystemProps> = createComponent(typographyStyles.H3, 'H3');
export const H4: React.FC<StyledSystemProps> = createComponent(typographyStyles.H4, 'H4');
export const H5: React.FC<StyledSystemProps> = createComponent(typographyStyles.H5, 'H5');
export const LargeLead: React.FC<StyledSystemProps> = createComponent(typographyStyles.LargeLead, 'LargeLead');
export const SmallLead: React.FC<StyledSystemProps> = createComponent(typographyStyles.SmallLead, 'SmallLead');
export const Paragraph: React.FC<StyledSystemProps> = createComponent(typographyStyles.Paragraph, 'Paragraph');
export const SmallParagraph: React.FC<StyledSystemProps> = createComponent(typographyStyles.SmallParagraph, 'SmallParagraph');
export const Link: React.FC<AnchorProps> = ProxyLink;
