import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      temperature: ''
    }
  }



  delayData = () => {
    return new Promise((resolve, reject) => {

      setTimeout(()=>{ resolve(3)}, 2000)

    })
    
  }

  handleClick = () => {
    console.log('1');
    console.log('2');
    // this.delayData()
    // .then(data => data + 3)
    // .then(data => data + 2)
    // .then(data => console.log('data', data))
    // .catch(err => console.log(err))
    fetch('https://goweather.herokuapp.com/weather/thoothukudi')
    .then(res => res.json())
    .then(data => this.setState({temperature: data.temperature}))
    console.log('4');
    console.log('5');
  }
  render(){
    return(<div>
      <div>{this.state.temperature}</div>
      <button onClick={this.handleClick}>Submit</button>
      </div>)
  }
}

export default App;