import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaImages, FaPlay, FaTimes, FaVideo } from "react-icons/fa";
import { galleryAPI } from "../api";
import { getMediaType, getMediaUrl, getVideoEmbedUrl } from "../utils/media";

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [activeTab, setActiveTab] = useState("image");
  const [category, setCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await galleryAPI.getAll();
        setItems(Array.isArray(response.data) ? response.data : []);
      } catch {
        setError("We couldn't load the gallery right now. Please try again shortly.");
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  useEffect(() => setCategory("all"), [activeTab]);

  const tabItems = useMemo(
    () => items.filter((item) => getMediaType(item) === activeTab),
    [items, activeTab]
  );
  const categories = useMemo(
    () => ["all", ...new Set(tabItems.map((item) => item.category).filter(Boolean))],
    [tabItems]
  );
  const visibleItems = category === "all"
    ? tabItems
    : tabItems.filter((item) => item.category === category);

  const renderVideo = (item, expanded = false) => {
    const url = getMediaUrl(item);
    const embedUrl = getVideoEmbedUrl(url);
    if (embedUrl) {
      return (
        <iframe
          src={embedUrl}
          title={item.title}
          className="h-full w-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
    return (
      <video
        src={url}
        controls
        preload="metadata"
        className={`h-full w-full ${expanded ? "object-contain" : "object-cover"}`}
      >
        Your browser does not support video playback.
      </video>
    );
  };

  return (
    <>
      <Helmet>
        <title>Photo & Video Gallery | Jadhavar Yuva Sansad</title>
        <meta name="description" content="Explore photos and videos from Jadhavar Yuva Sansad programs, speakers, and youth initiatives." />
      </Helmet>

      <div className="min-h-screen bg-[#f8f5f2]">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#641818] via-[#7b1d1d] to-[#0a2a66] px-4 py-16 text-white md:py-20">
          <div className="absolute -right-20 -top-28 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -bottom-36 -left-20 h-80 w-80 rounded-full bg-white/5" />
          <div className="container-wide relative text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-amber-300">Moments that inspire</p>
            <h1 className="text-4xl font-bold md:text-5xl">Our Gallery</h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-red-50 md:text-lg">
              Relive the conversations, leadership, and energy shaping India&apos;s youth movement.
            </p>
          </div>
        </section>

        <main className="container-wide py-10 md:py-14">
          <div className="mx-auto mb-8 flex max-w-md rounded-2xl border border-[#7b1d1d]/10 bg-white p-1.5 shadow-sm">
            {[
              { value: "image", label: "Photos", icon: FaImages },
              { value: "video", label: "Videos", icon: FaVideo },
            ].map(({ value, label, icon: Icon }) => (
              <button
                key={value}
                type="button"
                onClick={() => setActiveTab(value)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-all ${
                  activeTab === value
                    ? "bg-[#7b1d1d] text-white shadow-md"
                    : "text-gray-600 hover:bg-red-50 hover:text-[#7b1d1d]"
                }`}
              >
                <Icon /> {label}
                <span className={`rounded-full px-2 py-0.5 text-xs ${activeTab === value ? "bg-white/20" : "bg-gray-100"}`}>
                  {items.filter((item) => getMediaType(item) === value).length}
                </span>
              </button>
            ))}
          </div>

          {categories.length > 1 && (
            <div className="mb-8 flex flex-wrap justify-center gap-2" aria-label="Gallery categories">
              {categories.map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setCategory(value)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    category === value
                      ? "border-[#0a2a66] bg-[#0a2a66] text-white"
                      : "border-gray-200 bg-white text-gray-600 hover:border-[#0a2a66] hover:text-[#0a2a66]"
                  }`}
                >
                  {value === "all" ? `All ${activeTab === "image" ? "Photos" : "Videos"}` : value}
                </button>
              ))}
            </div>
          )}

          {loading ? (
            <div className="flex min-h-64 items-center justify-center" role="status">
              <div className="h-11 w-11 animate-spin rounded-full border-4 border-red-100 border-t-[#7b1d1d]" />
              <span className="sr-only">Loading gallery</span>
            </div>
          ) : error ? (
            <div className="mx-auto max-w-xl rounded-2xl border border-red-200 bg-white p-8 text-center text-[#7b1d1d] shadow-sm">{error}</div>
          ) : visibleItems.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-20 text-center">
              {activeTab === "image" ? <FaImages className="mx-auto mb-4 text-4xl text-gray-300" /> : <FaVideo className="mx-auto mb-4 text-4xl text-gray-300" />}
              <h2 className="text-xl font-bold text-gray-800">No {activeTab === "image" ? "photos" : "videos"} yet</h2>
              <p className="mt-2 text-gray-500">New moments will appear here as they are added.</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleItems.map((item) => (
                <article key={item._id} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-950">
                    {activeTab === "image" ? (
                      <button type="button" onClick={() => setSelectedItem(item)} className="h-full w-full" aria-label={`View ${item.title}`}>
                        <img src={getMediaUrl(item)} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                        <span className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-0 transition group-hover:opacity-100" />
                      </button>
                    ) : (
                      <>
                        {renderVideo(item)}
                        {getVideoEmbedUrl(getMediaUrl(item)) && (
                          <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-[#7b1d1d] p-2.5 text-white shadow-lg"><FaPlay className="text-xs" /></span>
                        )}
                      </>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="mb-2 flex items-start justify-between gap-3">
                      <h2 className="text-lg font-bold leading-snug text-[#0a2a66]">{item.title}</h2>
                      {item.category && <span className="shrink-0 rounded-full bg-red-50 px-2.5 py-1 text-xs font-bold text-[#7b1d1d]">{item.category}</span>}
                    </div>
                    {item.description && <p className="line-clamp-2 text-sm leading-6 text-gray-600">{item.description}</p>}
                  </div>
                </article>
              ))}
            </div>
          )}
        </main>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4" onClick={() => setSelectedItem(null)} role="dialog" aria-modal="true" aria-label={selectedItem.title}>
          <button type="button" onClick={() => setSelectedItem(null)} className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-xl text-white hover:bg-white/20" aria-label="Close preview"><FaTimes /></button>
          <div className="max-h-[90vh] max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <img src={getMediaUrl(selectedItem)} alt={selectedItem.title} className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl" />
            <div className="mt-4 text-center text-white"><h2 className="text-xl font-bold">{selectedItem.title}</h2>{selectedItem.description && <p className="mt-1 text-sm text-gray-300">{selectedItem.description}</p>}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
