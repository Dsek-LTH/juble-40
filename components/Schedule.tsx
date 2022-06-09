import React from 'react'
import events, { Event } from '../data/events'
import DaySchedule from './DaySchedule';

type Props = {}


const Schedule: React.FC<Props> = () => {
  const eventsGroupedByDay: Record<string, Event[]> = events.reduce((acc, event) => {
    const date = event.startTime.toDateString()
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(event)
    return acc
  }, {})
  return (
    <div> {/* Wrapper */}
      <h1>Schema</h1>
      <div> {/* Days wrapper */}
        {Object.entries(eventsGroupedByDay).map(([date,events]) => <DaySchedule date={date} events={events}/>)}
      </div>
    </div>
  )
}

export default Schedule