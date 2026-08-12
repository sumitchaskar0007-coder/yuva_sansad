import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { FaArrowLeft, FaRegClock, FaUser } from "react-icons/fa";
import { newsAPI } from "../api";

export default function NewsDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;
    newsAPI.getById(id)
      .then(({ data }) => { if (active) { setItem(data); setStatus("ready"); } })
      .catch(() => active && setStatus("error"));
    return () => { active = false; };
  }, [id]);

  if (status === "loading") return <div className="container-wide px-4 py-24 text-center">Loading news…</div>;
  if (status === "error" || !item) return <div className="container-wide px-4 py-24 text-center"><h1 className="text-2xl font-bold">News article unavailable</h1><Link to="/news" className="mt-6 inline-flex items-center gap-2 font-bold text-[#7b1d1d]"><FaArrowLeft /> Back to news</Link></div>;

  const publishedDate = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "long", year: "numeric" }).format(new Date(item.publishedAt || item.createdAt));
  return (
    <>
      <Helmet><title>{item.title} | Jadhavar Yuva Sansad</title><meta name="description" content={item.description.slice(0, 155)} /></Helmet>
      <article className="bg-[#f8f5f2] py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Link to="/news" className="inline-flex items-center gap-2 font-bold text-[#7b1d1d] hover:gap-3"><FaArrowLeft /> Back to news</Link>
          <header className="mt-8"><p className="text-sm font-bold uppercase tracking-widest text-[#7b1d1d]">News</p><h1 className="mt-4 text-4xl font-bold leading-tight text-[#0a2a66] md:text-5xl">{item.title}</h1><div className="mt-5 flex flex-wrap gap-5 text-sm text-gray-500"><span className="inline-flex items-center gap-2"><FaRegClock className="text-[#7b1d1d]" /> {publishedDate}</span><span className="inline-flex items-center gap-2"><FaUser className="text-[#7b1d1d]" /> {item.author || "Jadhavar Yuva Sansad"}</span></div></header>
          <img src={item.imageUrl} alt={item.title} className="mt-10 max-h-[36rem] w-full rounded-2xl object-cover shadow-lg" />
          <div className="mt-10 whitespace-pre-wrap rounded-2xl bg-white p-7 text-lg leading-8 text-gray-700 shadow-sm md:p-10">{item.description}</div>
        </div>
      </article>
    </>
  );
}
