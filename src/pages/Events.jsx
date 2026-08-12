import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { eventAPI } from "../api";
import { eventImageFallback, eventsData, normalizeEvent } from "../data/events";

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [remoteEvents, setRemoteEvents] = useState([]);

  useEffect(() => {
    let active = true;

    async function loadEvents() {
      try {
        const { data } = await eventAPI.getPublished();
        if (!active) return;
        setRemoteEvents(Array.isArray(data) ? data.map(normalizeEvent) : []);
      } catch {
        // Curated events keep the public page useful if the API is unavailable.
      }
    }

    loadEvents();
    return () => { active = false; };
  }, []);

  const allEvents = useMemo(() => {
    const remoteIds = new Set(remoteEvents.map((event) => event.id));
    return [...remoteEvents, ...eventsData.filter((event) => !remoteIds.has(event.id))]
      .map(normalizeEvent)
      .sort((a, b) => b.sortDate - a.sortDate);
  }, [remoteEvents]);

  const categories = ["All", ...new Set(allEvents.map((event) => event.category))];
  const filteredEvents = activeCategory === "All"
    ? allEvents
    : allEvents.filter((event) => event.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Events | Jadhavar Yuva Sansad</title>
        <meta name="description" content="Explore Jadhavar Yuva Sansad youth parliaments, leadership workshops, policy discussions, and conferences." />
        <link rel="canonical" href="https://www.jadhavaryuvasansad.org/events" />
      </Helmet>

      <div className="bg-white">
        <section className="bg-gradient-to-r from-[#7b1d1d] via-[#9f2020] to-red-700 px-4 py-14 text-white md:py-20">
          <div className="container-wide">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-red-100">Connect. Debate. Lead.</p>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Events & Programs</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-red-100">
              Discover programmes that nurture democratic values, responsible leadership, and active citizenship among young people.
            </p>
          </div>
        </section>

        <section className="border-b bg-gray-50 px-4 py-7">
          <div className="container-wide flex gap-3 overflow-x-auto pb-1">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap rounded-full px-6 py-2 font-semibold transition ${activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "border border-gray-200 bg-white text-gray-700 hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        <section className="container-wide px-4 py-12 md:py-16">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <article key={event.id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <Link to={`/events/${event.id}`} className="block overflow-hidden">
                  <img
                    src={event.image || eventImageFallback}
                    alt={event.title}
                    onError={(e) => { e.currentTarget.src = eventImageFallback; }}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
                <div className="flex min-h-64 flex-col p-6">
                  <div className="mb-3 flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-wide text-primary">
                    <span>{event.category}</span>
                    <time>{event.date}</time>
                  </div>
                  <h2 className="mb-3 text-xl font-bold text-[#0a2a66]">{event.title}</h2>
                  <p className="mb-5 line-clamp-3 text-sm leading-6 text-gray-600">{event.description}</p>
                  <Link
                    to={`/events/${event.id}`}
                    className="mt-auto inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 font-semibold text-white transition hover:bg-[#0a2a66] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    View Details <span className="ml-2" aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-[#7b1d1d] to-red-700 px-4 py-14 text-white">
          <div className="container-wide text-center">
            <h2 className="mb-4 text-3xl font-bold">Join the Youth Parliament Movement</h2>
            <p className="mx-auto mb-8 max-w-2xl text-red-100">Be part of Jadhavar Yuva Sansad and contribute to democratic nation building.</p>
            <Link to="/contact" className="inline-flex rounded-lg bg-yellow-400 px-8 py-3 font-bold text-gray-900 transition hover:bg-yellow-300">Get Involved</Link>
          </div>
        </section>
      </div>
    </>
  );
}
