import { useState } from 'react';
import './NewEventForm.css'

export default function NewEventForm({ addEvent }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [location, setLocation] = useState('arvada')

  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('arvada')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const event = {
      title: title,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000)
    }

    addEvent(event)
    resetForm()
  }

  // const handleChange = (e) => {
  //   setTitle(e.target.value)
  // } // switched to inline anonymous functions as seen below

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Event Title:</span>
        <input 
          type="text" 
          onChange={(e) => setTitle(e.target.value)} 
          value={title} 
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input 
          type="date" 
          onChange={(e) => setDate(e.target.value)} 
          value={date}
        />
      </label>
      <label>
        <span>Event location:</span>
        <select onChange={(e) => setLocation(e.target.value)}>
          <option value="arvada">Arvada</option>
          <option value="pittsburgh">Pittsburgh</option>
          <option value="littleton">Littleton</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  )
}