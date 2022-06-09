import React from "react";
import events, { Event } from "../data/events";
import DaySchedule from "./DaySchedule";

type Props = {};

const Schedule: React.FC<Props> = () => {
  const eventsGroupedByDay: Record<string, Event[]> = events.reduce(
    (acc, event) => {
      const date = event.startTime.toISOString().substring(0, 10);
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(event);
      return acc;
    },
    {}
  );

  const eventDays = Object.entries(eventsGroupedByDay).sort((a, b) => {
    return a[0].localeCompare(b[0]);
  });

  return (
    <div>
      {" "}
      {/* Wrapper */}
      <h1>Schema</h1>
      <div className="sm:grid sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
        {/* Days wrapper */}
        {eventDays.map(([date, events]) => (
          <DaySchedule date={date} events={events} />
        ))}
      </div>
    </div>
  );
};

export default Schedule;
