import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'

function App() {
  // useState returns a variable and a function inside an array
  // we use array destructuring to capture those
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "bowser's live stream", id: 2 },
    { title: 'race on moo moo farm', id: 3 }
  ])

  // when updating state depends on the previous state, it is best practice to do it like this
  // to prevent weird things
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
  }

  const subtitle = "All the latest events in Marioland"

  return (
    <div className="App">
      <Title title="Events in Your Area" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}

      {showEvents && events.map((event) => (
        <React.Fragment key={event.id}>
          <h2>{event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
          {/* make the onClick an anonymous function so that it doesn't just run automatically when the component is rendered */}
        </React.Fragment>
      ))}

      <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code SK8ORDIE at the checkout</p>
      </Modal>
    </div>
  )
}

export default App;
