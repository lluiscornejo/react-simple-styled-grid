import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { customConfig } from '@Grid/docs/config';

const config = { simpleGrid: customConfig || {} };

export default class StyleguidistWrapper extends Component {
  render() {
    return (
      <section style={{ position: 'relative' }}>
        <ThemeProvider theme={config}>
          {this.props.children}
        </ThemeProvider>
      </section>
    );
  }
}
