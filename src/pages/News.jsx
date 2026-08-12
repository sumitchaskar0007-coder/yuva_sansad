import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaArrowRight, FaNewspaper } from "react-icons/fa";
import { newsAPI } from "../api";

const formatDate = (value) => value
  ? new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value))
  : "";

export default function News() {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;
    newsAPI.getPublished()
      .then(({ data }) => {
        if (!active) return;
        setItems(Array.isArray(data) ? data : []);
        setStatus("ready");
      })
      .catch(() => active && setStatus("error"));
    return () => { active = false; };
  }, []);

  return (
    <>
      <Helmet>
        <title>Latest News | Jadhavar Yuva Sansad</title>
        <meta name="description" content="Read the latest news and announcements from Jadhavar Yuva Sansad." />
      </Helmet>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#641818] via-[#7b1d1d] to-[#0a2a66] px-4 py-16 text-white md:py-20">
        <div className="container-wide relative text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">Stay informed</p>
          <h1 className="text-4xl font-bold md:text-5xl">Latest News</h1>
          <p className="mx-auto mt-4 max-w-2xl text-red-50">Updates, announcements, and stories from the Jadhavar Yuva Sansad community.</p>
        </div>
      </section>

      <main className="container-wide px-4 py-14 md:py-16">
        {status === "loading" && <div className="flex min-h-64 items-center justify-center"><div className="h-11 w-11 animate-spin rounded-full border-4 border-red-100 border-t-[#7b1d1d]" /></div>}
        {status === "error" && <div className="rounded-2xl border border-red-200 bg-red-50 p-8 text-center text-red-800">News could not be loaded right now. Please try again shortly.</div>}
        {status === "ready" && items.length === 0 && (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-16 text-center"><FaNewspaper className="mx-auto text-4xl text-gray-300" /><h2 className="mt-4 text-xl font-bold">No news published yet</h2><p className="mt-2 text-gray-500">Please check back soon.</p></div>
        )}
        {status === "ready" && items.length > 0 && (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article key={item._id} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <Link to={`/news/${item._id}`} className="block aspect-[16/10] overflow-hidden bg-gray-100"><img src={item.imageUrl} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></Link>
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#7b1d1d]">{formatDate(item.publishedAt || item.createdAt)} · {item.author || "Jadhavar Yuva Sansad"}</p>
                  <h2 className="mt-2 line-clamp-2 text-xl font-bold leading-snug text-[#0a2a66]">{item.title}</h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{item.description}</p>
                  <Link to={`/news/${item._id}`} className="mt-5 inline-flex items-center gap-2 font-bold text-[#7b1d1d] hover:gap-3">Read more <FaArrowRight className="text-xs" /></Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </>
  );
}
