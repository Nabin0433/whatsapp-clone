import React from 'react'
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Chart from './Chart';
import Chartt from "./Chartt";


function App() {
  return (
    <div className="App">
      <div className='app-body'>
        <Chart />
        <Chartt />
     {/* <Sidebar />
      <Chat/> */}
     </div>
    </div>
  );
}
export default App;
