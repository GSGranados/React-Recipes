import React, {Component} from 'react';
import './App.css';
import InputForm from './Components/InputForm/InputForm';

class App extends Component {

  state ={

    recipes: []

  }

  getRecipe = (e) =>{

    //Food2FORK API GOT DEPRECATED :(

    e.preventDefault();
    const recipe = e.target.elements.recipeName.value;
    console.log(recipe);

  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Recipe Search
        </p>
      </header>
      <InputForm getRecipe={this.getRecipe}></InputForm>
      </div>
  );
}
}

export default App;
