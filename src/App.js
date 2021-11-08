import React from 'react'
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';
function App() {
  return (
    <div className="App">
      <ClassComponent />
      <FunctionalComponent name="Jubaer" age="25"/>
      <FunctionalComponent name="Shakil" age="22"/>
      <FunctionalComponent name="Ashraf" age="19"/>
    </div>
  )

}

export default App;
