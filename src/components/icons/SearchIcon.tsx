import React from 'react';
import Svg, { Circle, Path, SvgProps } from 'react-native-svg';

const SearchIcon = (props: SvgProps): JSX.Element => (
  <Svg viewBox="0 0 44 44" width="44px" height="44px" {...props}>
    <Circle cx="22" cy="22" r="22" fill="white" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M33.4003 31.3493L27.7053 25.6262C34.5487 14.3252 20.7634 5.19905 12.7904 12.7831C5.05171 21.4967 14.7403 34.3726 25.6054 27.7354L31.3004 33.3039C32.9456 35.1132 35.0502 33.0039 33.4003 31.3493ZM19.6666 12.9799C28.6615 12.9799 28.9521 26.5261 19.6666 26.5261C10.6249 26.5261 10.8827 12.9799 19.6666 12.9799Z"
      fill="currentColor"
    />
  </Svg>
);

export default SearchIcon;
