import React from 'react';

import HomePage from './pages/homepage/homepage.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meaningOfLife: 42
    }
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;
