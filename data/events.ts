export interface Event {
  id: string;
  name: string;
  description: string;
  startTime: Date;
  endtime: Date;
  price?: string;
  location?: string;
  imageUrl?: string;
  dressCode?: string;
}

const events: Event[] = [
  {
    id: "mon",
    name: "Måndagsevent",
    description: "Detta är ett måndagsevent",
    startTime: new Date("2022-11-12T18:00:00"),
    endtime: new Date("2022-11-12T00:00:00"),
  },
  {
    id: "mon",
    name: "Måndagsevent",
    description: "Detta är ett måndagsevent",
    startTime: new Date("2022-11-13T18:00:00"),
    endtime: new Date("2022-11-13T00:00:00"),
  },
  {
    id: "mon",
    name: "Måndagsevent",
    description: "Detta är ett måndagsevent",
    startTime: new Date("2022-11-14T18:00:00"),
    endtime: new Date("2022-11-15T00:00:00"),
  },
  {
    id: "tis",
    name: "Lunchförel",
    description: "Detta är ett onsdagsevent",
    startTime: new Date("2022-11-15T12:00:00"),
    endtime: new Date("2022-11-15T13:00:00"),
  },
  {
    id: "ons",
    name: "Onsdagsevent",
    description: "Detta är ett onsdagsevent",
    startTime: new Date("2022-11-16T18:00:00"),
    endtime: new Date("2022-11-17T00:00:00"),
  },
  {
    id: "rasque",
    name: "Rasque",
    description: "Detta är ett måndagsevent",
    startTime: new Date("2022-11-17T12:00:00"),
    endtime: new Date("2022-11-17T13:00:00"),
  },
  {
    id: "forkrok",
    name: "Fredag förkrök",
    description: "Förkröksevent lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
    startTime: new Date("2022-11-18T15:00:00"),
    endtime: new Date("2022-11-18T18:00:00"),
  },
  {
    id: "hussittning",
    name: "Hussittning",
    description: "Förkröksevent lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
    startTime: new Date("2022-11-18T18:00:00"),
    endtime: new Date("2022-11-19T01:00:00"),
  },
  {
    id: "bal",
    name: "Bal",
    description: "Bal lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaerat.",
    startTime: new Date("2022-11-19T18:00:00"),
    endtime: new Date("2022-11-20T03:00:00"),
  },
]


export default events;