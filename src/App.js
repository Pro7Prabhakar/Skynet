import './App.css';
// import * from './components/1';
import Axios from 'axios';
import { useState } from 'react';
import pokemon from './pokemon.json';

function App() {
  const [joke, SetJoke] = useState("");
  const getJoke = () => {

    Axios.get('https://official-joke-api.appspot.com/random_joke/').then ((res) =>{
      SetJoke(res.data.setup + '... ' + res.data.punchline);
    })

    // fetch('https://official-joke-api.appspot.com/random_joke/').then((res) => res.json())
    // .then((data) => {
    //   SetJoke(data.setup + '... ' + data.punchline);
    // })
  }
  return (
    <>
    <div style={{textAlign: 'center'}}>Hello
    <br/>
    <button onClick={getJoke}>Click me for jokes</button><br/><hr/>
    {joke}<br/>
    </div>
    <div
      style={
        {margin: 'auto',
        width : 800,
        paddingTop: '1rem',
      }
      } 
    >
      <h1 className='title'>Pokemon Search</h1>
      <table width="100%">
        <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
        </tr>
        </thead>
        
        <tbody>
          {pokemon.slice(0, 20).map(pokemon => (
            // <tr key={pokemon.id}>
            <tr key={[pokemon.name.english].join(':')}
            >
            <td>
              {pokemon.name.english}
            </td>
            <td>
              {pokemon.type.join(', ')}
            </td>
            </tr>
          ))}
          
        </tbody>
      </table>
    </div>
    </>
  );
}

export default App;
