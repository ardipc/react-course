import React from 'react';
import './App.css';

import MainRoute from './routes/Main';

class App extends React.Component {

  state = {
    token: localStorage.getItem('token')
  }

  changeRoute = (value) => {
    this.setState({ token: value })

    if(value) {
      localStorage.setItem('token', value);
    } else {
      localStorage.clear();
    }
  }

  render() {
    const { token } = this.state;
    return (
      <MainRoute changeRoute={this.changeRoute} token={token} />
    )
  }
}

export default App;
