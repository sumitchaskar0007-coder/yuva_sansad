import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function YuvaSansadReports() {
  const videos = [
    { id: 1, title: "Jadhavar Yuva Sansad Session 1", youtubeId: "VXeq67zQ4sM" },
    { id: 2, title: "Jadhavar Yuva Sansad Session 2", youtubeId: "h2B7jD2bHyY" },
    { id: 3, title: "Jadhavar Yuva Sansad Session 3", youtubeId: "j6hutpchnkY" },
    { id: 4, title: "Jadhavar Yuva Sansad Session 4", youtubeId: "a1icgeuKUys" },
    { id: 5, title: "Jadhavar Yuva Sansad Session 5", youtubeId: "87jWfVc1Bww" },
    { id: 6, title: "Jadhavar Yuva Sansad Session 6", youtubeId: "JSXegdFwQ7o" },
    { id: 7, title: "Jadhavar Yuva Sansad Session 7", youtubeId: "PbYwpDaxi0g" },
    { id: 8, title: "Jadhavar Yuva Sansad Session 8", youtubeId: "0391HjlNcoo" },
    { id: 9, title: "Jadhavar Yuva Sansad Session 9", youtubeId: "juja_4Tb5Mo" },
    { id: 10, title: "Jadhavar Yuva Sansad Session 10", youtubeId: "aENZXz1BExE" },
    { id: 11, title: "Jadhavar Yuva Sansad Session 11", youtubeId: "6E7QJjdmlh0" },
    { id: 12, title: "Jadhavar Yuva Sansad Session 12", youtubeId: "8Exfyw-BFGA" },
    { id: 13, title: "Jadhavar Yuva Sansad Session 13", youtubeId: "0sHmkhdKqUw" },
    { id: 14, title: "Jadhavar Yuva Sansad Session 14", youtubeId: "mGNIM2JbTLw" },
    { id: 15, title: "Jadhavar Yuva Sansad Session 15", youtubeId: "Tn4ugJHRl2g" },
    { id: 16, title: "Jadhavar Yuva Sansad Session 16", youtubeId: "Eh2kziLlt98" },
    { id: 17, title: "Jadhavar Yuva Sansad Session 17", youtubeId: "hWC9CxZlaWA" },
  ];

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Jadhavar Yuva Sansad Reports | Youth Parliament Videos</title>
        <meta
          name="description"
          content="Watch all Jadhavar Yuva Sansad sessions and reports. Explore youth leadership, democracy, and nation-building through parliamentary discussions."
        />
        <link
          rel="canonical"
          href="https://www.jadhavaryuvasansad.org/reports"
        />
      </Helmet>

      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: "url('/assets/hero1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Jadhavar Yuva Sansad Reports
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Empowering youth voices through democratic dialogue and leadership
          </p>
        </div>
      </section>

      {/* ================= VIDEOS GRID ================= */}
      <section className="container-wide py-16 px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gray-50 py-14 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Inspiring Youth Leadership
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Jadhavar Yuva Sansad nurtures informed, responsible, and visionary young
          leaders through meaningful parliamentary engagement.
        </p>
        <Link
          to="/contact"
          className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-red-800 transition"
        >
          Get Involved
        </Link>
      </section>
    </>
  );
}
