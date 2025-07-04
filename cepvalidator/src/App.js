import { useState } from 'react';
import './App.css';
import MainButton from './components/MainButton';
import { InputMask } from '@react-input/mask';

function App() {

  const [address, setAddress] = useState({});

  const track = ({ inputType, value, data, selectionStart, selectionEnd }) => {
    if (inputType === 'insert' && selectionStart === 8) {
      const cep = value+data;
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
          setAddress(data);
        });
    }
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <form className='address-form'>
          <h1>Endereço</h1>
          <div>
            <label>Bairro</label>
            <input type="text" value={address.bairro}></input>
          </div>
          <div>
            <label>Rua</label>
            <input type="text" value={address.logradouro}></input>
          </div>
          <div>
            <label>Número</label>
            <input type="text" value={address.numero}></input>
          </div>
          <div>
            <label>Cidade</label>
            <input type="text" value={address.localidade}></input>
          </div>
          <div>
            <label>cep</label>
            <InputMask 
              mask="_____-___" 
              replacement={{ _: /\d/}} 
              maxLength={9}
              track={track}
            ></InputMask>
          </div>
          <MainButton>Send</MainButton>
        </form>
      </header>
    </div>
  );
}

export default App;
