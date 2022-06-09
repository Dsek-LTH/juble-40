import React from "react";
import { Event } from "../data/events";
import { getReadableDate, getReadableTime } from "../utils/datetimes";

type Props = {
  date: string;
  events: Event[];
};

const weekdays = [
  {
    name: "Söndag",
    short: "Sön",
  },
  {
    name: "Måndag",
    short: "Mån",
  },
  {
    name: "Tisdag",
    short: "Tis",
  },
  {
    name: "Onsdag",
    short: "Ons",
  },
  {
    name: "Torsdag",
    short: "Tor",
  },
  {
    name: "Fredag",
    short: "Fre",
  },
  {
    name: "Lördag",
    short: "Lör",
  },
];

const DaySchedule: React.FC<Props> = ({ date, events }) => {
  const day = new Date(date);
  const weekday = weekdays[day.getDay()];

  return (
    <div className="relative mb-4 sm:rounded-xl sm:bg-neutral-800 sm:p-8 sm:shadow-md">
      <div className="mb-4 flex flex-col">
        <h4 className="text-xl text-råsa">{weekday.name}</h4>
        <span className="text-sm text-lila">{getReadableDate(day)}</span>
      </div>
      <div>
        {events.map((event) => (
          <div
            key={event.id}
            className="mb-2 rounded-md bg-råsa p-8 text-white sm:-mx-4 sm:grid sm:p-4"
          >
            <h5 className="whitespace-nowrap">{event.name}</h5>
            <span className="text-lila">
              {getReadableTime(event.startTime)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaySchedule;
