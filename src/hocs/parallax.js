import React, { Component } from 'react';

export default (ComposedComponent, sectionPosition) => {
  class Parallax extends Component {
    render() {
      return <ComposedComponent {...this.props} sectionPosition={sectionPosition} />;
    }
  }
  return Parallax;
}
