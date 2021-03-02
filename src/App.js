import React ,{Component} from 'react';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state={
    persons: [
      {name:'Max',age:78},
      {name:'Aasima' ,age:100}
    ],

    otherState: 'some other value',

    username: 'Sophie'
  }


  switchNameHandler = (newName) => {
     // console.log("Was Clicked");
     this.setState(
       {
        persons: [
          {name: newName,age:78},
          {name:'Aasima' ,age:230}
        ]
       })
  }

  nameChangedHandler= (event) => {
    this.setState(
      {
       persons: [
         {name: "Aasia",age:78},
         {name: event.target.value ,age:230}
       ]
      })
  }

  UserameChangedHandler= (event) => {
    this.setState(
      {
       username : event.target.value
      });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
          <h1>I am a react app</h1>
          <h1>Hello</h1>
          <button 
          style={style}
          onClick={this.switchNameHandler.bind(this,'Priya!!!!')}>Click Me!</button>
          <Person 
          name={this.state.persons[0].name} 
          click={this.switchNameHandler.bind(this, 'Max!!')}
          age={this.state.persons[0].age}/>
          <Person 
          name={this.state.persons[1].name} 
          changed={this.nameChangedHandler}
          age={this.state.persons[1].age}>Hey!</Person>
          <UserInput
          change={this.UserameChangedHandler}
          currentName={this.state.username}/>
          <UserOutput
          username={this.state.username}/>
          <UserOutput
          username="Max!!"/>
          <UserOutput
          username="Max!!"/>

          
      </div>
      
    );
    }
  //return React.createElement('div',null,React.createElement('h1',null,'Hello'));
}

export default App;
