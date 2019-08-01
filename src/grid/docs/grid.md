Basic usage

```js
import { Container, Row, Col } from '../../grid';
import Box from '../docs/components/box';

<Container>
  <Row as="section">
    <Col small={4} medium={6} large={8}>
      <Box content={{ small: 4, medium: 6, large: 8 }} />
    </Col>
    <Col small={8} medium={6} large={4}>
      <Box content={{ small: 8, medium: 6, large: 4 }} />
    </Col>
  </Row>
  <Row>
    <Col small={7} medium={3} large={4}>
      <Box content={{ small: 2, medium: 3, large: 4 }} />
    </Col>
    <Col small={5} medium={6} large={5}>
      <Box content={{ small: 4, medium: 6, large: 5 }} />
    </Col>
    <Col medium={3} large={3}>
      <Box content={{ small: 6, medium: 3, large: 3 }} />
    </Col>
  </Row>
</Container>

```

Custom configuration

```js
import { ThemeProvider } from 'styled-components';
import { Container, Row, Col } from '../../grid';
import Box from '../docs/components/box';

const config = {
  simpleGrid: {
    containerMaxWith: 1180,
    gutter: 20,
    gutterSmall: 20,
    maxColNumber: 12,
    screen: {
      small: 640,
      medium: 997,
      large: 1024,
    },
  },
};

<ThemeProvider theme={config}>
  <Container>
    <Row as="section">
      <Col small={4} medium={6} large={8}>
        <Box content={{ small: 4, medium: 6, large: 8 }} />
      </Col>
      <Col small={8} medium={6} large={4}>
        <Box content={{ small: 8, medium: 6, large: 4 }} />
      </Col>
    </Row>
    <Row>
      <Col small={7} medium={3} large={4}>
        <Box content={{ small: 2, medium: 3, large: 4 }} />
      </Col>
      <Col small={5} medium={6} large={5}>
        <Box content={{ small: 4, medium: 6, large: 5 }} />
      </Col>
      <Col medium={3} large={3}>
        <Box content={{ small: 6, medium: 3, large: 3 }} />
      </Col>
    </Row>
  </Container>
</ThemeProvider>

```
