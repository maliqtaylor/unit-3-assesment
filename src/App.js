import React, { Component } from 'react';
import './App.css';
import CircleSelector from './Components/CircleSelector/CircleSelector';
import Circles from './Components/Circles/Circles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: null };
    this.handler = this.handler.bind(this)
  }

  handler(e) {
    this.setState({
      selected: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 3 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            handler={this.handler}
          />
          <Circles
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;