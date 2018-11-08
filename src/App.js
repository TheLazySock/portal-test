import React from 'react';
import './App.css';

import Button from './Button';
import Child from './Button';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Header */}
        </header>
        <section className="app-section">
          <Button />
        </section>
      </div>
    );
  }
}

export default App;
