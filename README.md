# ReactSimpleStyledGrid

A simple responsive grid for React using styled-components

## Installation

```
npm i --save react-simple-styled-grid
``` 

## Dependencies

```
npm i --save styled-components
```

## Demo

<a href="https://lluiscornejo.github.io/react-simple-styled-grid/index.html" target="_blank">https://lluiscornejo.github.io/react-simple-styled-grid/index.html</a>

## Basic usage

```js
import { Container, Row, Col } from 'react-simple-styled-grid';

<Container>
  <Row as="section">
    <Col small={4} medium={6} large={8}>
      Col 1
    </Col>
    <Col small={8} medium={6} large={4}>
      Col 2
    </Col>
  </Row>
  <Row>
    <Col small={7} medium={3} large={4}>
      Col 3
    </Col>
    <Col small={5} medium={6} large={5}>
      Col 4
    </Col>
    <Col medium={3} large={3}>
      Col 5
    </Col>
  </Row>
</Container>

```

## Custom configuration

```js
import { ThemeProvider } from 'styled-components';
import { Container, Row, Col } from 'react-simple-styled-grid';

const config = {
  simpleGrid: {
    containerMaxWith: 1200,
    gutter: 20,
    gutterSmall: 10,
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
        Col 1
      </Col>
      <Col small={8} medium={6} large={4}>
        Col 2
      </Col>
    </Row>
    <Row>
      <Col small={7} medium={3} large={4}>
        Col 3
      </Col>
      <Col small={5} medium={6} large={5}>
        Col 4
      </Col>
      <Col medium={3} large={3}>
        Col 5
      </Col>
    </Row>
  </Container>
</ThemeProvider>

```

## Default Configuration

```js
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
```
