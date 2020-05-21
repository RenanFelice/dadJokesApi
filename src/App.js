import React from 'react';
import JokeList from './components/JokeList'
import Sidebar from './components/Sidebar'
import './styles/App.css';
import JokeProvider from './context/JokeContext'

function App() {
  return (
    <div className="App">
      <JokeProvider>
        <Sidebar />
        <JokeList />
      </JokeProvider>
    </div>
  );
}

export default App;
