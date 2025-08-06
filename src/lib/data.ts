export interface Drama {
  id: number;
  title: string;
  description: string;
  coverArt: string;
  dataAiHint: string;
  genre: string;
  url: string;
}

export interface Genre {
  id: string;
  name: string;
}

export const genres: Genre[] = [
  { id: "romance", name: "Romance" },
  { id: "action", name: "Action" },
  { id: "comedy", name: "Comedy" },
  { id: "thriller", name: "Thriller" },
  { id: "fantasy", name: "Fantasy" },
  { id: "historical", name: "Historical" },
];

export const dramas: Drama[] = [
  {
    id: 1,
    title: "Echoes of Eternity",
    description: "A timeless love story that transcends dimensions, as two souls are destined to meet, life after life.",
    coverArt: "https://placehold.co/300x450.png",
    dataAiHint: "couple silhouette",
    genre: "Romance",
    url: "/drama/1",
  },
  {
    id: 2,
    title: "Cyber Strike",
    description: "In a neon-drenched future, a rogue agent must take down a powerful corporation from the inside.",
    coverArt: "https://placehold.co/300x450.png",
    dataAiHint: "cyberpunk city",
    genre: "Action",
    url: "/drama/2",
  },
  {
    id: 3,
    title: "The Last Laugh",
    description: "When a cursed artifact is mistaken for a prop, a struggling comedian's jokes become dangerously real.",
    coverArt: "https://placehold.co/300x450.png",
    dataAiHint: "stage lights",
    genre: "Comedy",
    url: "/drama/3",
  },
  {
    id: 4,
    title: "Shadows of Deceit",
    description: "A detective haunted by his past uncovers a conspiracy that goes deeper than he could ever imagine.",
    coverArt: "https://placehold.co/300x450.png",
    dataAiHint: "dark alley",
    genre: "Thriller",
    url: "/drama/4",
  },
  {
    id: 5,
    title: "The Crystal Kingdom",
    description: "An orphan discovers she is the lost princess of a magical realm and must reclaim her throne from a dark sorcerer.",
    coverArt: "https://placehold.co/300x450.png",
    dataAiHint: "fantasy castle",
    genre: "Fantasy",
    url: "/drama/5",
  },
  {
    id: 6,
    title: "The Gilded Age",
    description: "In the heart of the 18th century, a noble family navigates political intrigue and forbidden romance.",
    coverArt: "https://placehold.co/300x450.png",
    dataAiHint: "vintage portrait",
    genre: "Historical",
    url: "/drama/6",
  },
  {
    id: 7,
    title: "First Kiss",
    description: "Two high school rivals are forced to work together on a project, discovering that hate is close to love.",
    coverArt: "https://placehold.co/300x450.png",
    dataAiHint: "young love",
    genre: "Romance",
    url: "/drama/7",
  },
  {
    id: 8,
    title: "Velocity",
    description: "A getaway driver is pulled back in for one last job, but this time, the stakes are personal.",
    coverArt: "https://placehold.co/300x450.png",
    dataAiHint: "car chase",
    genre: "Action",
    url: "/drama/8",
  },
  {
    id: 9,
    title: "Office Antics",
    description: "A mockumentary-style look at the absurd lives of employees at a failing paper company.",
    coverArt: "https://placehold.co/300x450.png",
    dataAiHint: "office cubicle",
    genre: "Comedy",
    url: "/drama/9",
  },
  {
    id: 10,
    title: "The Silent Patient",
    description: "A psychologist becomes obsessed with unraveling the mystery of her new patient who has gone mute.",
    coverArt: "https://placehold.co/300x450.png",
    dataAiHint: "eerie room",
    genre: "Thriller",
    url: "/drama/10",
  },
  {
    id: 11,
    title: "Dragon's Prophecy",
    description: "A young blacksmith learns he is the last dragon rider and must unite the land against an ancient evil.",
    coverArt: "https://placehold.co/300x450.png",
    dataAiHint: "dragon eye",
    genre: "Fantasy",
    url: "/drama/11",
  },
  {
    id: 12,
    title: "War of the Roses",
    description: "A gripping tale of power, betrayal, and loyalty during the tumultuous English civil wars.",
    coverArt: "https://placehold.co/300x450.png",
    dataAiHint: "medieval battle",
    genre: "Historical",
    url: "/drama/12",
  },
];
