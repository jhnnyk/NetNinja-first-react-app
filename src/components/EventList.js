import React from 'react'

function EventList({ events, handleClick }) {
  return (
    <div>
      {events.map((event) => (
        <React.Fragment key={event.id}>
          <h2>{event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
          {/* make the onClick an anonymous function so that it doesn't just run 
          automatically when the component is rendered */}
        </React.Fragment>
      ))}
    </div>
  )
}

export default EventList