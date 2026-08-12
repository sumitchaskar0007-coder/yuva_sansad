import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { eventAPI } from "../api";
import { eventImageFallback, eventsData, normalizeEvent } from "../data/events";

export default function EventDetail() {
  const { id } = useParams();
  const localEvent = eventsData.find((event) => event.id === id);
  const [event, setEvent] = useState(localEvent || null);
  const [loading, setLoading] = useState(!localEvent);

  useEffect(() => {
    if (localEvent) return undefined;
    let active = true;

    async function loadEvent() {
      try {
        const { data } = await eventAPI.getById(id);
        if (active) setEvent(normalizeEvent(data));
      } catch {
        // A clear not-found state is shown below if the database cannot be reached.
      } finally {
        if (active) setLoading(false);
      }
    }

    loadEvent();
    return () => { active = false; };
  }, [id, localEvent]);

  if (loading) {
    return <div className="flex min-h-[55vh] items-center justify-center"><div className="h-11 w-11 animate-spin rounded-full border-4 border-red-100 border-t-primary" /></div>;
  }

  if (!event) {
    return (
      <section className="container-wide flex min-h-[55vh] flex-col items-center justify-center px-4 text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-wider text-primary">Event not found</p>
        <h1 className="mb-4 text-3xl font-bold text-[#0a2a66]">This event is no longer available</h1>
        <Link to="/events" className="rounded-lg bg-primary px-6 py-3 font-semibold text-white">View all events</Link>
      </section>
    );
  }

  return (
    <>
      <Helmet>
        <title>{event.title} | Jadhavar Yuva Sansad</title>
        <meta name="description" content={event.description} />
      </Helmet>

      <article className="bg-white">
        <header className="bg-[#0a2a66] px-4 py-12 text-white md:py-16">
          <div className="container-wide">
            <Link to="/events" className="mb-6 inline-flex text-sm font-semibold text-blue-100 hover:text-white">← Back to all events</Link>
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm font-bold uppercase tracking-wider text-yellow-300">
              <span>{event.category}</span><span aria-hidden="true">•</span><time>{event.date}</time>
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-5xl">{event.title}</h1>
          </div>
        </header>

        <div className="container-wide grid gap-10 px-4 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
          <img
            src={event.image || eventImageFallback}
            alt={event.title}
            onError={(e) => { e.currentTarget.src = eventImageFallback; }}
            className="h-full max-h-[540px] min-h-80 w-full rounded-2xl object-cover shadow-lg"
          />
          <div className="self-center rounded-2xl border border-gray-100 bg-gray-50 p-7 shadow-sm md:p-9">
            <p className="mb-5 text-xl font-semibold leading-8 text-[#0a2a66]">{event.description}</p>
            <p className="leading-7 text-gray-600">{event.details}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-[#0a2a66]">Enquire about this event</Link>
              <Link to="/events" className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-[#0a2a66] transition hover:border-primary">More events</Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
