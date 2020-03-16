import React from 'react';
import firebase from "firebase/app";
import {
  BorderRadiusProps,
  FontFamilyProps,
  FontSizeProps,
  FontStyleProps,
  FontWeightProps,
  LetterSpacingProps,
  LineHeightProps,
  SizeProps,
  SpaceProps,
  TextAlignProps,
  TextStyleProps,
} from 'styled-system';

export type StyledSystemProps =
  | SpaceProps
  | FontSizeProps
  | FontStyleProps
  | SizeProps
  | TextStyleProps
  | LetterSpacingProps
  | FontFamilyProps
  | FontWeightProps
  | BorderRadiusProps
  | FontFamilyProps
  | LineHeightProps
  | TextAlignProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | { color: string; as?: keyof JSX.IntrinsicElements | React.ComponentType<any> };

export enum Status {
  Approved = 'approved',
  Pending = 'pending',
}

export interface Question {
  id?: string;
  question: string;
  answer: string;
  link: string;
  language: string;
  company?: string;
  status: Status;
  createdBy?: string;
  createdById?: string;
  createdDate?: firebase.firestore.Timestamp;
}
