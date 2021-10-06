import { useState} from 'react';
import { Header} from './components/Header';
import { Footer} from './components/Footer';
const App = () => {

  let name = "Marcos Ariel";
  let age = 100;
  const [bg, setBg] = useState("#ff0000");
   //bg = "";

  const handleClick = () => {
    //alert("Fala Jovem com constante");
    setBg("#0000ff");
  }

  return(
    <div style={{backgroundColor: bg}}>
      <Header name={name} age={age}/>
      
      <button onClick={handleClick}> Botão </button>

      <Footer />
    </div>
  )

}
export default App;


/*import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Olá Mundo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vlws é nóix
        </a>
      </header>
    </div>
  );
}

export default App;
*/
