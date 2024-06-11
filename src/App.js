import './App.css';
import { useState } from 'react';

function App() {
  // useState returns a variable and a function inside an array
  // we use array destructuring to capture those
  const [name, setName] = useState('mario');

  const handleClick = () => {
    setName('luigi')
    console.log(name);
  }

  return (
    <div className="App">
      <h1>My name is {name}!</h1>
      <button onClick={handleClick}>change name</button>
    </div>
  );
}

export default App;
