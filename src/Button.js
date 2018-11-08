import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <React.Fragment>
        <button>
          Click me!
        </button>
        {children}
      </React.Fragment>
    )
  }
}

export default Button;