import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from 'react'

function App() {
 
  const [mode , setMode ] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = mode ? "App dark" : "App light"


function handleMode(){
   if (appClass === 'App dark'){
   return setMode(false) }
    else if (appClass === 'App light') {
    return setMode(true) 
   };
}


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{mode ? 'Dark Mode': 'Light Mode' }</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
