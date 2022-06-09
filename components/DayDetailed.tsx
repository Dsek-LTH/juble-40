import React from 'react'
import { Event } from '../data/events'
import { getReadableDate, getReadableTime } from '../utils/datetimes'


const DayDetailed: React.FC<Event> = (event) => {
    const date = new Date(event.startTime)
    return (
      <div>
        <h2>{event.name}</h2>
        <h2>{event.description}</h2>
      </div>
    )
  }