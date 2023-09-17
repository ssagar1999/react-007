import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Counter from './Counter';

function App() {


  const [visiblity, setVisibility] = useState(true);

  useEffect(() =>{
    console.log('App component changed')
        })

  return (
    <div className="App">

{visiblity ? <Counter /> : ''}

      <button onClick={() => setVisibility(s => !s)}>
       
   change visibility -- {visiblity}
      </button>
      
    </div>
  );
}

export default App;
