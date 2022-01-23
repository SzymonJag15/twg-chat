import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const BackIcon = (props: SvgProps): JSX.Element => (
  <Svg viewBox="0 0 12.611 22.123" {...props}>
    <Path
      d="M97.592 12.156l9.512 9.512a1.549 1.549 0 1 0 2.191-2.191l-8.417-8.417 8.422-8.416a1.549 1.549 0 0 0-2.2-2.19l-9.508 9.512a1.549 1.549 0 0 0 0 2.19z"
      transform="translate(-97.138 0)"
      fill="currentColor"
    />
  </Svg>
);

export default BackIcon;
