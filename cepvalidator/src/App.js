import { useState } from 'react';
import './App.css';
import MainButton from './components/MainButton';

function App() {

  const [fullNameIsVisible, setFullNameIsVisible] = useState(false);

  const name = "Alexander";
  const fullName = name + " Alcantar Linhares";

  const showFullName = () => {
    setFullNameIsVisible(!fullNameIsVisible);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{!fullNameIsVisible? name : fullName}</h1>
        <MainButton onClick={showFullName}>Mostrar nome completo</MainButton>
      </header>
    </div>
  );
}

export default App;
