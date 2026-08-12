import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaRegClock, FaUser } from "react-icons/fa";
import { newsAPI } from "../api";

const formatDate = (value) => value
  ? new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "numeric", minute: "2-digit" }).format(new Date(value))
  : "Latest";

const NewsCard = ({ item }) => (
  <article className="news-marquee-card group relative my-3 w-[350px] shrink-0 overflow-hidden bg-white sm:w-[700px]">
    <div className="grid min-h-[460px] sm:min-h-[390px] sm:grid-cols-[46%_54%]">
      <div className="flex min-w-0 flex-col border-b border-gray-100 sm:border-b-0 sm:border-r">
        <Link to={`/news/${item._id}`} className="relative block h-64 shrink-0 overflow-hidden bg-gray-200 sm:h-[285px]" aria-label={`Read ${item.title}`}>
          <img src={item.imageUrl} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
          <span className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-[#7b1d1d] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-lg">Latest News</span>
        </Link>
        <div className="flex flex-1 flex-col justify-center px-5 py-4 sm:px-6">
          <div className="space-y-1.5 text-[10px] font-semibold uppercase tracking-wide text-gray-400">
            <span className="flex items-center gap-2"><FaRegClock className="shrink-0 text-[#7b1d1d]" /> {formatDate(item.publishedAt || item.createdAt)}</span>
            <span className="flex items-center gap-2"><FaUser className="shrink-0 text-[#7b1d1d]" /> {item.author || "Jadhavar Yuva Sansad"}</span>
          </div>
        </div>
      </div>
      <div className="relative flex min-w-0 flex-col bg-gradient-to-br from-white to-slate-50 px-6 py-8 sm:px-9 sm:py-10">
        <p className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#7b1d1d]">Latest update</p>
        <h3 className="line-clamp-2 text-xl font-extrabold leading-snug text-[#0a2a66] transition group-hover:text-[#7b1d1d] sm:text-2xl">{item.title}</h3>
        <p className="mt-5 line-clamp-5 text-sm leading-6 text-gray-600 sm:text-[15px] sm:leading-7">{item.description}</p>
        <Link to={`/news/${item._id}`} className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-[#0a2a66] px-5 py-3 text-xs font-extrabold uppercase tracking-wider text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#7b1d1d] hover:shadow-lg">Read more <FaArrowRight className="text-[9px] transition group-hover:translate-x-1" /></Link>
      </div>
    </div>
  </article>
);

export default function NewsCarousel() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    let active = true;
    newsAPI.getPublished({ limit: 10 })
      .then(({ data }) => { if (active) setItems(Array.isArray(data) ? data : []); })
      .catch(() => {});
    return () => { active = false; };
  }, []);

  if (!items.length) return null;

  return (
    <section className="news-carousel-section relative overflow-hidden border-y border-red-100 py-12" aria-labelledby="latest-news-heading">
      <span className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#7b1d1d]/5 blur-2xl" />
      <span className="pointer-events-none absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-[#0a2a66]/10 blur-3xl" />
      <div className="container-wide relative mb-8 flex items-end justify-between px-4">
        <div>
          <div><p className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#7b1d1d]">Fresh from Yuva Sansad</p><h2 id="latest-news-heading" className="mt-1 text-3xl font-extrabold text-[#0a2a66] md:text-4xl">Latest News</h2></div>
        </div>
        <Link to="/news" className="group hidden items-center gap-3 rounded-full border border-[#7b1d1d]/20 bg-white px-5 py-2.5 text-sm font-extrabold text-[#7b1d1d] shadow-sm transition hover:border-[#7b1d1d] hover:shadow-md sm:inline-flex">View all news <FaArrowRight className="text-xs transition group-hover:translate-x-1" /></Link>
      </div>
      <div className="news-marquee-mask">
        <div className="news-marquee-track">
          {[0, 1].map((group) => (
            <div className="news-marquee-group" key={group} aria-hidden={group === 1}>
              {items.map((item) => <NewsCard key={`${group}-${item._id}`} item={item} />)}
            </div>
          ))}
        </div>
      </div>
      <div className="relative mt-7 text-center sm:hidden"><Link to="/news" className="inline-flex items-center gap-2 rounded-full bg-[#7b1d1d] px-5 py-2.5 text-sm font-bold text-white shadow-md">View all news <FaArrowRight className="text-xs" /></Link></div>
    </section>
  );
}
