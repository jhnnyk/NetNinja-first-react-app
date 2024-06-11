import './App.css';
import { useState } from 'react';

function App() {
  // useState returns a variable and a function inside an array
  // we use array destructuring to capture those
  const [name, setName] = useState('mario');
  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bowser's live stream", id: 2},
    {title: 'race on moo moo farm', id: 3}
  ])

  const handleClick = () => {
    setName('luigi');
    console.log(name);
  }

  return (
    <div className="App">
      <h1>My name is {name}!</h1>
      <button onClick={handleClick}>change name</button>

      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default App;
