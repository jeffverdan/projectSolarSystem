import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './framework/bootstrap/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>        
        <Header />
        <SolarSystem />
        <Missions />
      </main>
    );
  }
}

export default App;
