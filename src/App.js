import React from 'react'
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
function App() {
  return (
    <div className="App">
     <h2>-----Class Component-----</h2>
      <ClassComponent cityname="Berlin"/>
      <h2>-----Functional Component-----</h2>
      <FunctionalComponent name="Jubaer" age="25"/>
      
    </div>
  )

}

export default App;
