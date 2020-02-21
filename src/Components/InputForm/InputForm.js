import React from "react";
import './InputForm.css';
const InputForm = props => {
  return (
    <form onSubmit={props.getRecipe} className="inputForm">
      <input className="input"
        type="text"
        name="recipeName"
        placeholder="Type down a recipe...."
      ></input>
      <button className="searchButton" type="submit">Search Recipes</button>
    </form>
  );
};

export default InputForm;
