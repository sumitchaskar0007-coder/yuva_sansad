import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

export default function Naac() {
  const [selectedImage, setSelectedImage] = useState(null);

  const docs = [
    { title: 'AQAR 2023-24', url: '/aqar-2023-24.pdf', icon: '📄' },
    { title: 'SSR Report', url: '/ssr-report.pdf', icon: '📋' },
    { title: 'Accreditation Certificate', url: '/certificate.pdf', icon: '🎓' },
    { title: 'Quality Assurance Policy', url: '/qa-policy.pdf', icon: '✓' },
    { title: 'Strategic Plan', url: '/strategic-plan.pdf', icon: '📊' },
  ];

  const images = [
    { id: 1, title: 'NAAC Accreditation Certificate', src: '/naac-cert.jpg', category: 'Certificate' },
    { id: 2, title: 'Quality Assurance Meeting', src: '/qa-meeting.jpg', category: 'Event' },
    { id: 3, title: 'Campus Infrastructure', src: '/campus-infra.jpg', category: 'Facility' },
    { id: 4, title: 'Student Learning Outcomes', src: '/learning.jpg', category: 'Academic' },
    { id: 5, title: 'Faculty Development Workshop', src: '/faculty-dev.jpg', category: 'Training' },
    { id: 6, title: 'Research & Innovation Center', src: '/research.jpg', category: 'Research' },
    { id: 7, title: 'NAAC Evaluation Panel', src: '/evaluation.jpg', category: 'Event' },
    { id: 8, title: 'Accreditation Achievement', src: '/achievement.jpg', category: 'Achievement' },
  ];

  return (
    <>
      <Helmet>
        <title>NAAC Accreditation | AIMS MBA | Quality Assurance</title>
        <meta name="description" content="AIMS NAAC B Grade accreditation - Quality assurance, AQAR, SSR report, and accreditation documents." />
        <meta name="keywords" content="NAAC, accreditation, B grade, quality assurance, AQAR, SSR, college certification" />
        <meta name="author" content="AIMS Bhubaneswar" />
        <meta property="og:title" content="NAAC Accreditation | AIMS MBA" />
        <meta property="og:description" content="NAAC B Grade accredited institution with quality assurance commitment" />
        <link rel="canonical" href="https://adityainstitutemanagement.com" />
      </Helmet>

      <div className="bg-white">
        {/* ⭐ HERO */}
        <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 md:py-20 px-4">
          <div className="container-wide">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">NAAC Accreditation</h1>
            <p className="text-lg text-blue-100">Committed to quality education and continuous improvement</p>
          </div>
        </section>

        {/* ⭐ ACCREDITATION STATUS */}
        <section className="container-wide py-16 px-4">
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 md:p-12 border-l-4 border-green-500 flex flex-col md:flex-row gap-8 items-center">
            <div className="h-24 w-24 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-4xl flex-shrink-0">
              B
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">NAAC Accredited - Grade B</h2>
              <p className="text-gray-700 text-lg mb-4">
                AIMS has been accredited by the National Assessment and Accreditation Council with Grade B, recognizing our commitment to academic excellence and quality assurance.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-lg px-6 py-3 border-2 border-green-500">
                  <p className="text-xs text-gray-600 uppercase font-bold">Status</p>
                  <p className="text-green-600 font-bold">Accredited</p>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 border-2 border-green-500">
                  <p className="text-xs text-gray-600 uppercase font-bold">Grade</p>
                  <p className="text-green-600 font-bold">B</p>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 border-2 border-green-500">
                  <p className="text-xs text-gray-600 uppercase font-bold">Focus</p>
                  <p className="text-green-600 font-bold">Quality</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ⭐ DOWNLOADS SECTION */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Accreditation Documents</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {docs.map((doc) => (
                <a
                  key={doc.title}
                  href={doc.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-white rounded-xl p-8 border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all group"
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{doc.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{doc.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">Click to download PDF</p>
                  <button className="w-full bg-primary text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition text-sm">
                    📥 Download
                  </button>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ⭐ GALLERY SECTION */}
        <section className="container-wide py-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Accreditation Gallery</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((img) => (
              <button
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className="relative rounded-xl overflow-hidden border-2 border-gray-200 hover:border-primary hover:shadow-lg transition-all group h-48"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end p-4">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition">
                    <p className="font-semibold text-sm line-clamp-2">{img.title}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ⭐ IMAGE MODAL */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
                loading="lazy"
              />
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">{selectedImage.title}</h3>
                    <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold mt-2">
                      {selectedImage.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-3xl text-gray-400 hover:text-gray-900 font-bold w-8 h-8 flex items-center justify-center"
                  >
                    ✕
                  </button>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-full bg-gray-100 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ⭐ QUALITY ASSURANCE */}
        <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16 px-4">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Quality Assurance Framework</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 border-l-4 border-primary">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Academic excellence and continuous improvement</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Faculty development and research promotion</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Student learning outcomes and assessment</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Infrastructure and institutional development</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 border-l-4 border-primary">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Initiatives</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Internal Quality Assurance Cell (IQAC)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Regular stakeholder feedback mechanisms</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Student grievance redressal system</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span>Performance monitoring and evaluation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ⭐ CTA */}
        <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 px-4">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-bold mb-4">Learn More About NAAC</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Visit the official NAAC website for more information about accreditation standards and processes
            </p>
            <a
              href="https://www.naac.gov.in"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition"
            >
              Visit NAAC Website
            </a>
          </div>
        </section>
      </div>
    </>
  );
}