import React from 'react';
import { StyledBox } from './styled-box';
import Text from './../text';

const Box = ({ content: { small, medium, large } }) => (
  <StyledBox>
    {small && <Text>Small {small}</Text>}
    {medium && <Text>Medium {medium}</Text>}
    {large && <Text>Large {large}</Text>}
  </StyledBox>
);

export default Box;
