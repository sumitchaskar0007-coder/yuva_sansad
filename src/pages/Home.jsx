import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { useEffect, useState } from 'react';
import { eventAPI } from '../api';
import SpeakersAutoSlider from '../components/SpeakersAutoSlider';
import NewsCarousel from '../components/NewsCarousel';
import { eventImageFallback, latestEvents, normalizeEvent } from '../data/events';

function Section({ title, children, cta, id }) {
  return (
    <section id={id} className="container-wide py-12 md:py-20 px-4">
      <div className="flex items-center justify-between mb-10 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
        {cta && (
          <Link
            to={cta.href}
            className="text-primary text-sm font-semibold hover:underline transition-colors"
          >
            {cta.label} →
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

export default function Home() {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        setIsLoading(true);
        const { data } = await eventAPI.getPublished({ limit: 3 });
        const apiEvents = Array.isArray(data) ? data.map(normalizeEvent) : [];
        setEvents(apiEvents.length ? apiEvents : latestEvents.map(normalizeEvent));
      } catch (err) {
        console.error('Events load failed:', err);
        // Fallback data
        setEvents(latestEvents.map(normalizeEvent));
      } finally {
        setIsLoading(false);
      }
    };

    loadEvents();
  }, []);

  // Fallback gallery data
  const gallery = [
    { id: 1, image: '/assets/slider1.jpg', title: 'National Conclave' },
    { id: 2, image: '/assets/slider2.jpg', title: 'Youth Parliament Session' },
    { id: 3, image: '/assets/slider3.jpg', title: 'Leadership Interaction' },
    { id: 4, image: '/assets/slider4.jpg', title: 'Policy Discussion Forum' },
  ];

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Yuva Sansad | Youth Leadership & Democracy Platform</title>
        <meta
          name="description"
          content="Yuva Sansad is a non-political youth platform empowering future leaders through democratic dialogue, leadership training, and national conclaves."
        />
        <meta
          name="keywords"
          content="Yuva Sansad, youth parliament, student leadership, democracy, leadership platform, India"
        />
        <meta name="author" content="Yuva Sansad" />
        <meta property="og:title" content="Yuva Sansad" />
        <meta
          property="og:description"
          content="Empowering youth to lead India through democratic values and public leadership"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jadhavaryuvasansad.com" />
        <link rel="canonical" href="https://jadhavaryuvasansad.com" />
      </Helmet>

      {/* HERO */}
      <HeroSlider />

      {/* INTRO SECTION */}
      <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-wide grid md:grid-cols-2 gap-10 items-center">
          <img
            src="/images/khadse.jpg"
            alt="Yuva Sansad Leadership"
            className="rounded-xl shadow-lg w-full h-auto"
          />

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              <span className="text-primary">Yuva Sansad</span>
            </h2>
            <p className="text-gray-600 text-lg">
              A national non-political platform dedicated to nurturing
              responsible, ethical, and visionary youth leadership through
              democratic dialogue and public engagement.
            </p>

            <div className="space-y-3">
              {[
                'Largest youth leadership forum',
                'Democratic discussions & resolutions',
                'Interaction with national leaders',
                'Platform for future policymakers',
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-2xl">🇮🇳</span>
                  <span className="font-medium text-gray-700">{text}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition"
            >
              Know More →
            </Link>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 px-4">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: 'Youth Participants', value: '10,000+' },
            { label: 'Colleges Represented', value: '20+' },
            { label: 'National Sessions', value: '30+' },
            { label: 'Years of Impact', value: '8+' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
              <p className="text-blue-100 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="pt-32 pb-20 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#0a2a66]">
            Yuva Sansad
          </h1>

          <p className="mt-3 text-xl font-semibold text-gray-800">
            A Platform for Youth Leadership & Democratic Awareness
          </p>

          <p className="text-sm text-gray-600 mt-1">
            (Indian Youth Parliament Initiative)
          </p>

          <div className="w-24 h-1 bg-[#0a2a66] mx-auto my-6" />

          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Yuva Sansad is a national, non-political youth platform created to
            inspire, educate, and empower the politically conscious youth of Bharat.
            It serves as a forum where young minds engage in meaningful dialogue on
            democracy, governance, social responsibility, and nation-building.
          </p>

          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mt-4">
            Through structured discussions, leadership interactions, and simulated
            parliamentary sessions, Jadhavar Yuva Sansad nurtures ethical leadership,
            critical thinking, and a deep respect for democratic values, preparing the
            next generation to contribute responsibly to India’s future.
          </p>
        </div>
      </section>


      {/* QUOTE + IMAGE SECTION */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT BLUE PANEL */}
        <div className="bg-[#295a7d] flex items-center justify-center px-6 py-16">
          <div className="bg-white p-8 md:p-10 max-w-md">
            <blockquote className="italic text-lg leading-relaxed text-black">
              "With the involvement of youth in public movements and the electoral success of a newly launched party, our belief that young and educated people should join politics is vindicated."
            </blockquote>

            <p className="mt-8 font-semibold text-black">
              Adv. Shardul Sudhakarrao Jadhavar
            </p>

            <p className="text-sm text-gray-700 leading-relaxed mt-3">
              Secretary • M.B.A., P.G.D.H.R.M., B.Com., D.H.R.&L., D.C.L., D.C.P.L.,
              APCL, DIPL, CMED, D.LL&L.W., L.L.M.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE PANEL */}
        <div className="h-[520px] lg:h-auto">
          <img
            src="/assets/Shardul_jadhavar.jpeg"
            alt="Adv Shardul Sudhakarrao Jadhavar"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Latest news carousel */}
      <NewsCarousel />

      {/* INSPIRING YOUTH SECTION */}
      <section className="py-16 md:py-24" aria-labelledby="inspiring-youth-heading">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

            {/* LEFT STICKY HEADING — offset below the fixed desktop navbar */}
            <div className="self-start lg:sticky lg:top-40">
              <h2
                id="inspiring-youth-heading"
                className="text-4xl font-extrabold text-[#0a2a66] leading-tight"
              >
                Inspiring Youth,
                <br />
                Strengthening
                <br />
                Democracy
              </h2>
              <div className="w-20 h-1 bg-[#0a2a66] mt-6" />
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-2 space-y-8">
              {[
                {
                  img: "/yuva/6udan.jpg",
                  text: "Jadhavar Yuva Sansad is a national youth platform that empowers students and young leaders across Bharat to participate in democratic discussions, leadership forums, and policy-oriented dialogue for nation building.",
                  link: "/about",
                },
                {
                  img: "/yuva/55udan.jpg",
                  text: "Ideas, discussions, and resolutions emerging from Jadhavar Yuva Sansad conclaves are documented and presented as youth recommendations to public institutions, encouraging participatory governance and responsible citizenship.",
                  link: "/about",
                },
                {
                  img: "/images/img3.jpg",
                  text: "Jadhavar Yuva Sansad honors inspiring individuals and young changemakers who demonstrate exceptional leadership, social responsibility, and commitment to democratic values.",
                  link: "/about",
                },
              ].map((item, i) => (
                <div key={i} className="grid md:grid-cols-2 gap-6 items-center">
                  <img
                    src={item.img}
                    alt="Jadhavar Yuva Sansad National Program"
                    className="w-full h-64 object-cover object-top rounded-xl"
                    loading="lazy"
                  />
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <p className="text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                    <Link
                      to={item.link}
                      className="inline-block mt-4 text-[#0a2a66] font-semibold hover:underline"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Speakers Slider */}
      <SpeakersAutoSlider />

      {/* Latest Events Section */}
      <Section
        title="Latest Events"
        cta={{ label: "View All", href: "/events" }}
      >
        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg border shadow-sm animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event) => (
              <article
                key={event.id}
                className="group overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Link to={`/events/${event.id}`} className="block overflow-hidden">
                  <img
                    src={event.image || event.imageUrl || eventImageFallback}
                    alt={event.title}
                    onError={(e) => { e.currentTarget.src = eventImageFallback; }}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </Link>
                <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-3">
                  {event.title}
                </h3>
                <p className="text-gray-600">
                  {event.description}
                </p>
                {(event.date || event.eventDate) && (
                  <p className="text-sm text-gray-500 mt-3">
                    {event.date || new Date(event.eventDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </p>
                )}
                <Link
                  to={`/events/${event.id}`}
                  className="inline-block mt-4 text-primary font-medium hover:underline"
                >
                  View Details →
                </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </Section>

      {/* College Image Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">

            {/* LEFT IMAGE COLLAGE */}
            <div className="grid grid-cols-1 gap-4">
              <img
                src="/assets/yuva1.jpeg"
                alt="BCS National Conclave"
                className="w-full h-[180px] object-cover object-top rounded-md"
                loading="lazy"
              />
              <img
                src="/yuva/award6.jpg"
                alt="BCS Youth Address"
                className="w-full h-[180px] object-cover object-top rounded-md"
                loading="lazy"
              />
            </div>

            {/* CENTER CONTENT */}
            <div className="bg-white flex items-center justify-center p-10 border rounded-md">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0a2a66] leading-snug">
                Are you ready to be the political
                <br />
                future of Bharat?
              </h2>
            </div>

            {/* RIGHT IMAGE COLLAGE */}
            <div className="grid grid-cols-1 gap-4">
              <img
                src="/assets/yuva3.jpeg"
                alt="BCS Leadership Panel"
                className="w-full h-[180px] object-cover object-top rounded-md"
                loading="lazy"
              />
              <img
                src="/assets/yuva4.jpeg"
                alt="BCS Student Parliament Stage"
                className="w-full h-[180px] object-cover object-top rounded-md"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* OBJECTIVES - Marathi Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#0a2a66] mb-12">
            संसद मुद्दे – उद्दिष्टे
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* 2rd */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="text-xl font-semibold text-[#0a2a66] mb-4">
                प्रथम युवा संसद
              </h3>

              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>मजबूत राज्य, मजबूत भारत</li>
                <li>महासत्ता की ओर युवकों का योगदान</li>
                <li>खेती विषयक सवालों पर युवकों की भूमिका</li>
              </ul>
            </div>
            {/* 2rd */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="text-xl font-semibold text-[#0a2a66] mb-4">
                द्वितीय संसद कट्टा
              </h3>

              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>मजबूत राज्य, मजबूत भारत</li>
                <li>महासत्ता की ओर युवकों का योगदान</li>
                <li>खेती विषयक सवालों पर युवकों की भूमिका</li>
              </ul>
            </div>
            {/* 3rd */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="text-xl font-semibold text-[#0a2a66] mb-4">तृतीय संसद कट्टा</h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>सत्र १: सोड नाराजी, घे भरारी – युवकांना संदेश</li>
                <li>सत्र २: विकासाचे राजकारण म्हणजे काय?</li>
                <li>सत्र ३: माझा राष्ट्रवाद आणि तुझा राष्ट्रवाद – खरा कोणाचा?</li>
                <li>सत्र ४: सशक्त युवा – सशक्त भारत</li>
                <li>सत्र ५: जातीवाद आघाडीवर, आधुनिकता पिछाडीवर</li>
              </ul>
            </div>

            {/* 4th */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="text-xl font-semibold text-[#0a2a66] mb-4">चतुर्थ संसद कट्टा</h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>सत्र १: सोड नाराजी, घे भरारी – युवकांना संदेश</li>
                <li>सत्र २: सशक्त राज्य – सशक्त भारतासाठी</li>
                <li>सत्र ३: भ्रष्टाचार मुक्त भारत – सत्य आघण स्वप्न</li>
                <li>सत्र ४: सशक्त युवा – सशक्त राजकारण – सशक्त भारत</li>
                <li>सत्र ५: राजकारण आणि आश्वासन</li>
              </ul>
            </div>

            {/* 5th */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="text-xl font-semibold text-[#0a2a66] mb-4">पंचम संसद कट्टा</h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>सत्र १: सशक्त युवा – सशक्त राजकारण – सशक्त भारत</li>
                <li>सत्र २: भारतीय पत्रकारिता – किती लोकाभिमुख? किती पक्षाभिमुख?</li>
                <li>सत्र ३: भारत महासत्ता बनण्याचे प्रवेशद्वार – धर्म? शिक्षण? की राजकारण?</li>
                <li>सत्र ४: सक्षम युवा – समर्थ भारत</li>
                <li>सत्र ५: ग्रामसभा ते लोकसभा</li>
              </ul>
            </div>

            {/* 6th */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="text-xl font-semibold text-[#0a2a66] mb-4">षष्ठ संसद कट्टा</h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>सत्र १: सशक्त युवा – सशक्त राजकारण – सशक्त भारत</li>
                <li>सत्र २: मीडियाचा खरा मालक कोण?</li>
                <li>सत्र ३: आयडिया ऑफ इंडिया</li>
                <li>सत्र ४: अभिव्यक्ती स्वातंत्र्य – अतिरेक की गळचेपी?</li>
              </ul>
            </div>

            {/* 7th */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="text-xl font-semibold text-[#0a2a66] mb-4">सप्तम संसद कट्टा</h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>सत्र १: सामाजिक चळवळ आणि युवक</li>
                <li>सत्र २: सशक्त युवा – सशक्त राजकारण – सशक्त भारत</li>
                <li>सत्र ३: भारतीय राजकारणाची ७५ वर्षे – किती नैतिक? किती अनैतिक?</li>
              </ul>
            </div>

            {/* 8th */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h3 className="text-xl font-semibold text-[#0a2a66] mb-4">अष्टम संसद कट्टा</h3>
              <ul className="space-y-2 text-gray-700 list-disc list-inside">
                <li>सत्र १: ग्रामसभा ते लोकसभा</li>
                <li>सत्र २: राजकारणातील व समाजकारणातील महिलांचा सहभाग</li>
                <li>सत्र ३: माध्यमे राजकारण घडवतात?</li>
                <li>सत्र ४: संसद कट्टा</li>
                <li>सत्र ५: व्हिजन भारत २०२९</li>
                <li>सत्र ६: संसद कट्टा</li>
                <li>सत्र ७: सशक्त युवा – सशक्त राजकारण – सशक्त भारत</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-[#0a2a66] text-white text-center">
        <h2 className="text-3xl font-bold">Join the Movement</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Become a part of India's largest youth-led democratic platform and
          contribute to nation-building through dialogue and leadership.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <Section title="Voices of Youth Leaders">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: 'Student Delegate',
              text: 'Yuva Sansad gave me confidence to speak on national issues.',
            },
            {
              name: 'Youth Leader',
              text: 'A powerful platform to understand democracy practically.',
            },
            {
              name: 'College Representative',
              text: 'Inspired me to work for society and governance.',
            },
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border hover:shadow-md transition-shadow">
              <p className="italic text-gray-600">"{t.text}"</p>
              <p className="mt-3 font-semibold text-primary">{t.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Be the Voice of Tomorrow's India
        </h2>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          Join Jadhavar Yuva Sansad and contribute to nation-building through
          ideas, leadership, and action.
        </p>
        <Link
          to="/contact"
          className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300 transition inline-block"
        >
          Join the Movement
        </Link>
      </section>
    </>
  );
}
