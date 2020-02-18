import React, { useState, useEffect } from 'react';

import './global.css';
import './App.css';
import './Main.css'

import api from './services/api';


import DevForm from './components/DevForm';
import DevItem from './components/DevItem';


import Header from './Header';
//Componente: Bloco isolado de HTML, CSS e JS, o qual não interferem no restante da aplicação.
//Estado: informações mantida pelo componente (lembrete: imutabilidade)
//Propriedade: Informações que um componente pai passa para um componente filho


function App() {

  const [devs, setDevs] = useState([]);


useEffect(()=>{
  async function loadDevs(){
      const response = await api.get('/devs');

      setDevs(response.data);
  }

  loadDevs();
}, []);

async function handleAddDev(data){

  const response = await api.post(
      '/devs', data
  )
  console.log(response.data);
}
  
  return (
    <div id="app">
      <DevForm onSubmit={handleAddDev}/>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}
          
        </ul>
      </main>
    </div>
  );
  /*const [counter, setCounter] = useState(0);

  const incrementCounter = () =>{
    setCounter(counter + 1);
  };
  
  return (
    <>
      <h1>É assim que o React funciona, top</h1>
      <p>Contador: {counter}</p>
      <button onClick={incrementCounter}>Incrementar</button>
      <Header title = 'Cabeçalho'/>
    </>
  );*/
}

export default App;
