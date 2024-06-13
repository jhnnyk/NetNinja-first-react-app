import './App.css'
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'

function App() {
  // useState returns a variable and a function inside an array
  // we use array destructuring to capture those
  const [showModal, setShowModal] = useState(false)
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

  const handleClose = () => {
    setShowModal(false)
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

      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code SK8ORDIE at the checkout</p>
      </Modal> */}

      {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
        <h2>Terms & Conditions</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam eligendi similique
          iure vero explicabo accusantium. Mollitia pariatur eum soluta impedit natus eos nobis
          alias, sed dicta.</p>
      </Modal>}

      <p>
        <button onClick={() => setShowModal(true)} >
          T&C's
        </button>
      </p>
    </div>
  )
}

export default App;
