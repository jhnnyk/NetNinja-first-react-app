import styles from './EventList.module.css'

function EventList({ events, handleClick }) {
  return (
    <div>
      {events.map((event) => (
        <div className={styles.card} key={event.id}>
          <h2>{event.title}</h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
          {/* make the onClick an anonymous function so that it doesn't just run 
          automatically when the component is rendered */}
        </div>
      ))}
    </div>
  )
}

export default EventList