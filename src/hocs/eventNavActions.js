import React, { Component } from 'react';

export default (ComposedComponent, navigate, type) => {
  class NavActions extends Component {
    render() {
      return <ComposedComponent {...this.props} navigate={navigate} type={type} />;
    }
  }
  return NavActions;
}
