import React from 'react'
import { Event } from '../data/events'
import { getReadableDate, getReadableTime } from '../utils/datetimes'

type Props = {
  date: string,
  events: Event[],
}

const weekdays = [
  {
    name: 'Söndag',
    short: 'Sön',
  },
  {
    name: 'Måndag',
    short: 'Mån',
  },
  {
    name: 'Tisdag',
    short: 'Tis',
  },
  {
    name: 'Onsdag',
    short: 'Ons',
  },
  {
    name: 'Torsdag',
    short: 'Tor',
  },
  {
    name: 'Fredag',
    short: 'Fre',
  },
  {
    name: 'Lördag',
    short: 'Lör',
  },
]

const DaySchedule: React.FC<Props> = ({ date, events }) => {
  const day = new Date(date)
  const weekday = weekdays[day.getDay()]
  return (
    <div>
      <h2>{weekday.name}</h2>
      <h4>{getReadableDate(day)}</h4>
      {events.map((event) => (
        <div key={event.id}>
          <h4>{event.name}</h4>
          <h4>{getReadableTime(event.startTime)}</h4>
        </div>
      ))}
    </div>
  )
}

export default DaySchedule