import { StyledSystemProps } from '../../../types';

export interface TypographyStyles {
  H1: StyledSystemProps;
  H2: StyledSystemProps;
  H3: StyledSystemProps;
  H4: StyledSystemProps;
  H5: StyledSystemProps;
  LargeLead: StyledSystemProps;
  SmallLead: StyledSystemProps;
  Paragraph: StyledSystemProps;
  SmallParagraph: StyledSystemProps;
  Link: StyledSystemProps;
}

const fontFamilies: { heading: string; body: string } = {
  heading: "'Source Code Pro', monospace",
  body: "'Source Code Pro', monospace",
};

export const typographyStyles: TypographyStyles = {
  H1: {
    fontSize: [50, 51, 52, 57],
    fontWeight: 700,
    fontFamily: fontFamilies.heading,
    lineHeight: 1.25,
    as: 'h1',
  },
  H2: {
    fontSize: [37, 39, 41, 43],
    fontWeight: 700,
    fontFamily: fontFamilies.heading,
    lineHeight: 1.25,
    as: 'h2',
  },
  H3: {
    fontSize: [27, 28, 30, 32],
    fontWeight: 700,
    fontFamily: fontFamilies.heading,
    lineHeight: 1.25,
    as: 'h3',
  },
  H4: {
    fontSize: [18, 20, 22, 24],
    fontWeight: 700,
    fontFamily: fontFamilies.heading,
    lineHeight: 1.25,
    as: 'h4',
  },
  H5: {
    fontWeight: 700,
    fontSize: [16, 17, 19, 21],
    fontFamily: fontFamilies.heading,
    as: 'h5',
  },
  LargeLead: {
    fontWeight: 500,
    fontSize: [18, 20, 22, 24],
    fontFamily: fontFamilies.heading,
    as: 'p',
  },
  SmallLead: {
    fontWeight: 500,
    fontSize: [17, 18, 19, 21],
    fontFamily: fontFamilies.heading,
    as: 'p',
  },
  Paragraph: {
    fontSize: [14, 15, 15, 16],
    fontWeight: 400,
    fontFamily: fontFamilies.body,
    as: 'p',
  },
  SmallParagraph: {
    fontSize: [12, 12, 12, 12],
    fontWeight: 400,
    fontFamily: fontFamilies.body,
    as: 'p',
  },
  Link: {
    fontWeight: 700,
    fontSize: [14, 15, 15, 16],
    fontFamily: fontFamilies.body,
    as: 'a',
  },
};
