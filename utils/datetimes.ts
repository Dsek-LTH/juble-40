

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Maj",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Dec",
];

// Returns date in format 28e Apr
export const getReadableDate = (date: Date) => {
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const suffix = day % 10 <= 2 ? "a" : 'e';
  return `${day}${suffix} ${month}`;
}

const padLeft = (str: string, length: number) => {
  return (Array(length).join("0") + str).slice(-length);
}

// Returns time in format 12:30
export const getReadableTime = (date: Date) => {
  const hours = padLeft(date.getHours().toString(), 2)
  const minutes = padLeft(date.getMinutes().toString(), 2)
  return `${hours}:${minutes}`;
}