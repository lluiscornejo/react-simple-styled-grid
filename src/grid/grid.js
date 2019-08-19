import styled from 'styled-components';
import { defaultConfig } from './grid-config';
import { gutter, negativeGutter, columns } from './mixins';

export const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: ${({ width, theme }) => width || (theme.simpleGrid && theme.simpleGrid.containerMaxWith) || defaultConfig.containerMaxWith}px;
  ${({ fluid }) => fluid && `
     max-width: 100%;
  `}
  ${({ theme }) => gutter({ ...defaultConfig, ...theme.simpleGrid })}
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: ${({ center }) => center ? 'center' : 'normal'};
  ${({ theme }) => negativeGutter({ ...defaultConfig, ...theme.simpleGrid })}
`;

export const Col = styled.div`
  flex: 0 1 100%;
  flex-flow: column nowrap;
  max-width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;
  ${({ theme, small }) => small && `
    ${columns({ ...defaultConfig, ...theme.simpleGrid } || defaultConfig, 'small', small)}
  `}
  ${({ theme, medium }) => medium && `
    ${columns({ ...defaultConfig, ...theme.simpleGrid } || defaultConfig, 'medium', medium)}
  `}
  ${({ theme, large }) => large && `
    ${columns({ ...defaultConfig, ...theme.simpleGrid } || defaultConfig, 'large', large)}
  `}
  ${({ theme }) => gutter({ ...defaultConfig, ...theme.simpleGrid })}
  ${({ center }) => center && `
    text-align: center;
  `};
`;
