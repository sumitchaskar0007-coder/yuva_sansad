import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const eventsData = [
    {
      id: 1,
      title: "1st Jadhavar Yuva Sansad",
      category: "Yuva Sansad",
      date: "2017",
      image: "/assets/yuva-sansad/1.jpg",
      description:
        "The inaugural Jadhavar Yuva Sansad introducing youth to democratic values and parliamentary procedures.",
      details:
        "Participants experienced mock parliamentary sessions, debates, and discussions inspired by the Indian Parliament."
    },
    {
      id: 2,
      title: "2nd Jadhavar Yuva Sansad",
      category: "Yuva Sansad",
      date: "2018",
      image: "/assets/yuva-sansad/2.jpg",
      description:
        "Youth voices came together to discuss governance, public policy, and social reform.",
      details:
        "Delegates debated national issues and explored solutions through democratic dialogue."
    },
    {
      id: 3,
      title: "3rd Jadhavar Yuva Sansad",
      category: "Yuva Sansad",
      date: "2019",
      image: "/assets/yuva-sansad/3.jpg",
      description:
        "Focused on leadership development, constitutional awareness, and civic responsibility.",
      details:
        "Sessions included structured debates, leadership talks, and parliamentary simulations."
    },
    {
      id: 4,
      title: "Youth Leadership Workshop",
      category: "Workshop",
      date: "2020",
      image: "/assets/yuva-sansad/workshop.jpg",
      description:
        "Leadership workshop aimed at empowering youth with communication and decision-making skills.",
      details:
        "Experts guided participants on leadership ethics, public speaking, and nation building."
    },
    {
      id: 5,
      title: "Policy & Governance Conclave",
      category: "Conference",
      date: "2021",
      image: "/assets/yuva-sansad/conference.jpg",
      description:
        "A conclave focusing on public policy, governance challenges, and youth participation.",
      details:
        "Academicians, administrators, and youth leaders shared insights on democratic governance."
    },
    {
      id: 6,
      title: "6th Jadhavar Yuva Sansad",
      category: "Yuva Sansad",
      date: "2022",
      image: "/assets/yuva-sansad/6.jpg",
      description:
        "Emphasis on constitutional values, leadership ethics, and democratic engagement.",
      details:
        "Youth representatives debated contemporary social and national issues."
    },
    {
      id: 7,
      title: "7th Jadhavar Yuva Sansad",
      category: "Yuva Sansad",
      date: "2023",
      image: "/assets/yuva-sansad/7.jpg",
      description:
        "A national platform empowering youth through structured debate and dialogue.",
      details:
        "Delegates from various regions participated in large-scale parliamentary discussions."
    },
    {
      id: 8,
      title: "8th Jadhavar Yuva Sansad",
      category: "Yuva Sansad",
      date: "2024",
      image: "/assets/yuva-sansad/8.jpg",
      description:
        "Latest edition highlighting youth leadership and nation building.",
      details:
        "Focused on future leadership, governance challenges, and civic responsibility."
    }
  ];

  const categories = ["All", ...new Set(eventsData.map(e => e.category))];

  const filteredEvents =
    activeCategory === "All"
      ? eventsData
      : eventsData.filter(e => e.category === activeCategory);

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Events | Jadhavar Yuva Sansad</title>
        <meta
          name="description"
          content="Jadhavar Yuva Sansad events including youth parliaments, leadership workshops, policy discussions, and conferences."
        />
        <meta
          name="keywords"
          content="Jadhavar Yuva Sansad, Youth Parliament, Yuva Sansad events, youth leadership, democracy"
        />
        <link
          rel="canonical"
          href="https://www.jadhavaryuvasansad.org/events"
        />
      </Helmet>

      <div className="bg-white">
        {/* ================= HERO ================= */}
        <section className="bg-gradient-to-r from-[#7b1d1d] to-red-700 text-white py-16 px-4">
          <div className="container-wide">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Events & Programs
            </h1>
            <p className="text-red-100 max-w-3xl text-lg">
              Jadhavar Yuva Sansad – nurturing democratic values, leadership,
              and responsible citizenship among youth
            </p>
          </div>
        </section>

        {/* ================= CATEGORY FILTER ================= */}
        <section className="bg-gray-50 py-8 px-4 sticky top-0 z-40">
          <div className="container-wide flex gap-3 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition whitespace-nowrap ${activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-white border-2 border-gray-200 hover:border-primary"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* ================= EVENTS GRID ================= */}
        <section className="container-wide py-16 px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map(event => (
              <div
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="bg-white rounded-xl border hover:shadow-xl transition cursor-pointer"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5 space-y-3">
                  <p className="text-xs text-primary font-bold">{event.date}</p>
                  <h3 className="text-lg font-bold">{event.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {event.description}
                  </p>
                  <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= MODAL ================= */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white max-w-lg w-full rounded-xl overflow-hidden">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold">
                    {selectedEvent.title}
                  </h2>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-2xl font-bold"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-gray-700">{selectedEvent.description}</p>
                <p className="text-sm text-gray-600">{selectedEvent.details}</p>
              </div>
            </div>
          </div>
        )}

        {/* ================= CTA ================= */}
        <section className="bg-gradient-to-r from-[#7b1d1d] to-red-700 text-white py-16 px-4">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join the Youth Parliament Movement
            </h2>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Be a part of Jadhavar Yuva Sansad and contribute to democratic
              nation building
            </p>
            <Link
              to="/contact"
              className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold"
            >
              Get Involved
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
