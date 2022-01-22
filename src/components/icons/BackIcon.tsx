import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const BackIcon = (props: SvgProps): JSX.Element => (
  <Svg width="10" height="18" viewBox="0 0 10 18" {...props}>
    <Path
      d="M9 17L1 9L9 1"
      fill="#5603AD"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default BackIcon;
