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

  handleClick = async () => {
    console.log('1');
    console.log('2');
    // this.delayData()
    // .then(data => data + 3)
    // .then(data => data + 2)
    // .then(data => console.log('data', data))
    // .catch(err => console.log(err))
    const data = await fetch('https://goweather.herokuapp.com/weather/thoothukudi')
    const dataObj = await data.json()
    console.log('data', dataObj)
    console.log('4');
    console.log('5');

    fetch('https://goweather.herokuapp.com/weather/thoothukudi')
    .then(res => res.json())
    .then(res => {
      console.log('data', res);
   
    })
    console.log('4');
    console.log('5');
  }


  onClick = () => {
    this.handleClick();
    console.log('6');
    console.log('7');
  }

  render(){
    return(<div>
      <Temperature temperature={this.state.temperature}/>
      <button onClick={this.onClick}>Submit</button>
      </div>)
  }
}

class Temperature extends Component {
  render(){
    console.log('state', this.state, 'props')
    return <div>{this.props.temperature}</div>
  }
}

export default App;