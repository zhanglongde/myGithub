import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      val:0
    }
  }

  componentDidMount(){
    this.setState({val:this.state.val+1});
    console.log(this.state.val);

    this.setState({val:this.state.val+1});
    console.log(this.state.val);

    setTimeout(()=> {
      this.setState({val:this.state.val+1});
      console.log(this.state.val);

      this.setState({val:this.state.val+1});
      console.log(this.state.val);
    },0)
  }

  render() {
    return (
      <div className="App">
        {this.state.val}
      </div>
    );
  }
}

export default App;
