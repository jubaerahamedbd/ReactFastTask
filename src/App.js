import React from 'react'
import './App.css';

function App() {
  //without JSX
  // return React.createElement("div", {
  //   className: "App",
  //   item: "one",
  //   id: "myid"
  // }, React.createElement("h1", null, "Jubaer Ahamed"));

  //withJSX
  return (
    <div className="App" item="one" id="myid">
      <h1>Jubaer Ahamed</h1>
    </div>
  )
}

export default App;
