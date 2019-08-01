import 'babel-polyfill';
import React from 'react';
import { Container, Row, Col } from '@Grid/';
import Box from '@Grid/docs/components/box';

const Application = () => (
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
);

export default Application;
