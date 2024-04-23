import './App.css';
// import * from './components/1';
import Axios from 'axios';
import { useState } from 'react';

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
    <div style={{textAlign: 'center'}}>Hllo
    <br/>
    <button onClick={getJoke}>Click me for jokes</button><br/><hr/>
    {joke}
    </div>
    </>
  );
}

export default App;
