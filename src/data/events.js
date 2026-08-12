export const eventsData = [
  {
    id: "1",
    title: "1st Jadhavar Yuva Sansad",
    category: "Yuva Sansad",
    date: "2017",
    image: "/assets/yuva1.jpeg",
    description: "The inaugural Jadhavar Yuva Sansad introduced young people to democratic values and parliamentary procedure.",
    details: "Participants took part in parliamentary simulations, structured debates, leadership sessions, and discussions inspired by the Indian Parliament.",
  },
  {
    id: "2",
    title: "2nd Jadhavar Yuva Sansad",
    category: "Yuva Sansad",
    date: "2018",
    image: "/assets/yuva2.jpeg",
    description: "Youth voices came together to discuss governance, public policy, and social reform.",
    details: "Delegates debated important national issues and explored practical solutions through respectful democratic dialogue.",
  },
  {
    id: "3",
    title: "3rd Jadhavar Yuva Sansad",
    category: "Yuva Sansad",
    date: "2019",
    image: "/assets/yuva3.jpeg",
    description: "An edition focused on leadership development, constitutional awareness, and civic responsibility.",
    details: "The programme included leadership talks, structured debates, and parliamentary simulations for emerging youth leaders.",
  },
  {
    id: "4",
    title: "Youth Leadership Workshop",
    category: "Workshop",
    date: "2020",
    image: "/assets/yuva4.jpeg",
    description: "A practical workshop building communication, teamwork, and responsible decision-making skills.",
    details: "Experienced speakers guided participants through public speaking, ethical leadership, teamwork, and nation-building activities.",
  },
  {
    id: "5",
    title: "Policy & Governance Conclave",
    category: "Conference",
    date: "2021",
    image: "/images/udan_1.JPG",
    description: "A conclave exploring public policy, governance challenges, and meaningful youth participation.",
    details: "Academicians, administrators, social leaders, and young delegates shared ideas for responsive and inclusive governance.",
  },
  {
    id: "6",
    title: "6th Jadhavar Yuva Sansad",
    category: "Yuva Sansad",
    date: "2022",
    image: "/images/udan1Img.jpg",
    description: "An event centred on constitutional values, leadership ethics, and democratic engagement.",
    details: "Youth representatives discussed contemporary social and national priorities through debates and interactive sessions.",
  },
  {
    id: "7",
    title: "7th Jadhavar Yuva Sansad",
    category: "Yuva Sansad",
    date: "2023",
    image: "/yuva/55udan.jpg",
    description: "A national platform empowering youth through structured debate, dialogue, and collaboration.",
    details: "Delegates from different regions participated in parliamentary discussions and exchanged ideas on public leadership.",
  },
  {
    id: "8",
    title: "8th Jadhavar Yuva Sansad",
    category: "Yuva Sansad",
    date: "2024",
    image: "/yuva/award6.jpg",
    description: "The latest edition highlighted youth leadership, civic responsibility, and nation building.",
    details: "The programme examined the future of leadership and encouraged young citizens to participate constructively in democracy.",
  },
];

export const latestEvents = [...eventsData]
  .sort((a, b) => Number(b.date) - Number(a.date))
  .slice(0, 3);

export const eventImageFallback = "/assets/yuva1.jpeg";

export function normalizeEvent(event) {
  const rawDate = event.eventDate || event.date;
  const dateObject = rawDate ? new Date(rawDate) : null;
  return {
    ...event,
    id: String(event._id || event.id),
    category: event.category || "Event",
    image: event.image || event.imageUrl || eventImageFallback,
    date: dateObject && !Number.isNaN(dateObject.getTime())
      ? dateObject.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })
      : rawDate || "Date to be announced",
    sortDate: dateObject && !Number.isNaN(dateObject.getTime()) ? dateObject.getTime() : Number.parseInt(rawDate, 10) || 0,
    description: event.description || "Event details will be available soon.",
    details: event.details || event.description || "Event details will be available soon.",
  };
}
