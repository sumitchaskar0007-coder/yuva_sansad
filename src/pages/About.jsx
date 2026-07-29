import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>About Jadhavar Yuva Sansad | National Youth Leadership Platform</title>
        <meta
          name="description"
          content="Jadhavar Yuva Sansad is a national, non-political youth platform empowering young Indians through democratic dialogue, leadership development, and nation-building initiatives."
        />
        <meta
          name="keywords"
          content="Jadhavar Yuva Sansad, Yuva Sansad, Youth Parliament India, Youth Leadership, Democracy, Nation Building"
        />
        <meta name="author" content="Jadhavar Yuva Sansad" />
        <link rel="canonical" href="https://jadhavaryuvasansad.org/about" />
      </Helmet>

      <div className="bg-white">
        {/* ================= HERO ================= */}
        <section className="bg-gradient-to-r from-[#7b1d1d] to-red-700 text-white py-16 md:py-20 px-4">
          <div className="container-wide">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Yuva Sansad
            </h1>
            <p className="text-lg text-red-100 max-w-3xl leading-relaxed">
              The happiness of the leader lies in the happiness of his people, his welfare in their welfare, He will only consider those things desirable which are desirable to them. - Chanakya
            </p>
          </div>
        </section>

        {/* ================= VISION & MISSION ================= */}
        <section className="container-wide py-16 md:py-20 px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* VISION */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Vision
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To channel the energy of youth in the right direction and momentum, make them aware of social bonds and values, and create a strong and meaningful role for youth in socialization and politics.
              </p>

              <div className="bg-red-50 rounded-xl p-8 border-l-4 border-primary">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  Vision Pillars
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>✓ Empowering youth for nation-building.</li>
                  <li>✓ Leadership, values, and democracy.</li>
                  <li>✓ Shaping India’s future together.</li>
                </ul>
              </div>
            </div>

            {/* MISSION */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To contribute towards the realization of a strong and capable India by empowering youth with moral values and providing opportunities to develop their hidden talents.
              </p>

              <div className="bg-green-50 rounded-xl p-8 border-l-4 border-green-600">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  Mission Objectives
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li>→ Empowering youth with strong moral values</li>
                  <li>→ Nurturing and developing hidden talents among young people</li>
                  <li>→ Contributing to the realization of a strong and capable India</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ABOUT THE PLATFORM ================= */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              About the Platform
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg h-80 md:h-96">
                <img
                  src="/assets/about.jpg"
                  alt="Jadhavar Yuva Sansad National Session"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Jadhavar Yuva Sansad acts as a national मंच where student
                  leaders, young professionals, and socially conscious youth
                  come together to exchange ideas, deliberate on public
                  challenges, and propose solutions through democratic dialogue.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The platform encourages respectful debate, constitutional
                  thinking, and collaborative problem-solving, ensuring that
                  youth voices are heard in a responsible and constructive
                  manner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= OBJECTIVES ================= */}
        <section className="container-wide py-16 md:py-20 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Objectives
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Promote democratic values among youth",
              "Develop leadership and policy thinking",
              "Encourage civic responsibility",
              "Enable dialogue between youth and governance",
              "Strengthen national unity and integrity",
              "Build ethical public leadership",
            ].map((obj, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 text-center"
              >
                <p className="font-medium text-gray-700">{obj}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= LEADERSHIP ================= */}
        <section className="bg-gray-50 py-16 md:py-20 px-4">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              Leadership Team
            </h2>

            <div className="space-y-14">

              {/* ================= PRESIDENT ================= */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8 md:p-12 text-center">

                  {/* IMAGE – TOP CENTER */}
                  <div className="relative mx-auto mb-6 w-fit">
                    {/* Soft glow */}
                    <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl"></div>

                    <div className="relative p-2 rounded-full bg-white shadow-2xl">
                      <img
                        src="/assets/owner.jpeg"
                        alt="President"
                        className="w-48 h-48 rounded-full object-cover border-4 border-white"
                      />
                    </div>
                  </div>

                  {/* NAME */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Prin. Dr. Sudhakarrao Jadhavar
                  </h3>

                  {/* QUALIFICATIONS */}
                  <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">
                    M.Com, M.A., L.L.M., M.P.M., D.T.L., D.L.L.&L.W., G.D.C.&A., Ph.D.
                  </p>

                  <div className="border-t pt-6 max-w-4xl mx-auto">
                    <h4 className="font-bold text-gray-900 mb-4">
                      Leadership Credentials
                    </h4>

                    <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-6 text-left max-w-3xl mx-auto">
                      <li>✓ Member – Management Council, Savitribai Phule Pune University</li>
                      <li>✓ Former Dean – Commerce Department, SPPU</li>
                      <li>✓ General Secretary – Principals Forum, SPPU</li>
                      <li>✓ Member – Maharashtra Nursing Council</li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
                      <strong>“Education for strength, wisdom and intellect”</strong> — with
                      this vision, Jadhavar International School (CBSE) has emerged as a
                      knowledge hub providing value-based education that nurtures disciplined,
                      confident and capable young minds.
                    </p>

                    <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                      Situated in a rural region, the institution empowers students to become
                      nation builders through strong academics, character development and
                      opportunities for holistic growth.
                    </p>

                    {/* BOOKS */}
                    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-5 max-w-3xl mx-auto text-left">
                      <h4 className="font-bold text-gray-900 mb-3">
                        Books & Writings
                      </h4>

                      <ul className="text-sm text-gray-700 space-y-2">
                        <li>
                          <a
                            href="/pdfs/autobiography-marathi.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:underline"
                          >
                            📘 Autobiography (Marathi)
                          </a>
                        </li>
                        <li>
                          <a
                            href="/pdfs/autobiography-hindi.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:underline"
                          >
                            📘 Autobiography (Hindi)
                          </a>
                        </li>
                        <li>
                          <a
                            href="/pdfs/autobiography-english.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary hover:underline"
                          >
                            📘 Autobiography (English)
                          </a>
                        </li>
                        <li>
                          <a
                            href="/pdfs/yashache-shilpakar.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:text-primary hover:underline"
                          >
                            📕 यशाचे शिल्पकार : संघर्षातून शिखराकडे
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>


              {/* ================= SECRETARY ================= */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8 md:p-12 text-center">

                  {/* IMAGE */}
                  <div className="relative mx-auto mb-6 w-fit">
                    <div className="absolute inset-0 rounded-full bg-green-500/30 blur-xl"></div>

                    <div className="relative p-2 rounded-full bg-white shadow-2xl">
                      <img
                        src="/assets/Shardul_jadhavar.jpeg"
                        alt="Secretary"
                        className="w-48 h-48 rounded-full object-cover border-4 border-white"
                      />
                    </div>
                  </div>

                  {/* NAME */}
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Adv. Shardul Sudhakarrao Jadhavar
                  </h3>

                  {/* QUALIFICATIONS */}
                  <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-6">
                    M.B.A., P.G.D.H.R.M., B.Com., D.H.R.&L., D.C.L., D.CP.L., APCL, DIPL,
                    CMED, D.LL&L.W., L.L.M.
                  </p>

                  <div className="border-t pt-6 max-w-4xl mx-auto">
                    <p className="text-gray-700 leading-relaxed mb-4 max-w-3xl mx-auto">
                      Education today is rapidly transforming, making it challenging for
                      students to choose the right path. Our aim is to develop not just
                      knowledgeable individuals, but responsible, confident and compassionate
                      citizens.
                    </p>

                    <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                      At Jadhavar Institutes, we follow a student-centric approach with
                      mentoring, counseling, NSS activities, mental health workshops,
                      placements and career guidance to ensure holistic development.
                    </p>
                  </div>

                </div>
              </div>


              {/* ================= TREASURER ================= */}



            </div>

          </div >
        </section>
        {/* ================= ENDORSEMENT & SUPPORT ================= */}
        <section className="bg-white py-16 px-4">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Endorsement & Support
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Jadhavar Yuva Sansad has received encouragement and moral
                  support from respected leaders, academicians, social
                  thinkers, and public representatives who believe in
                  strengthening democracy through youth participation.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Their endorsement reinforces the vision of creating a
                  non-political, inclusive, and constructive platform for
                  democratic engagement.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"].map(
                  (img, i) => (
                    <img
                      key={i}
                      src={`/images/${img}`}
                      alt="Endorsement and Support"
                      className="w-full h-48 object-cover rounded-lg shadow-sm"
                    />
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ================= WORLD PEACE DOME (GENERIC, NO MIT) ================= */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container-wide">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              About World Peace Dome
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-xl overflow-hidden shadow-lg h-80 md:h-96">
                <img
                  src="/images/about11.jpg"
                  alt="World Peace Dome"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  The World Peace Dome stands as a global symbol of peace,
                  harmony, and universal human values. It represents dialogue,
                  coexistence, and the spirit of unity beyond differences.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Its philosophy aligns with the values of Jadhavar Yuva
                  Sansad in promoting non-violence, democratic dialogue,
                  ethical leadership, and collective responsibility.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Programs inspired by such ideals encourage young leaders to
                  reflect, deliberate, and commit themselves to building a
                  just, peaceful, and inclusive society.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-gradient-to-r from-[#7b1d1d] to-red-700 text-white py-16 md:py-20 px-4">
          <div className="container-wide text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Movement
            </h2>
            <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
              Be a part of India’s youth-led democratic platform and help shape
              the future of Bharat.
            </p>
            <Link
              to="/register"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition text-lg"
            >
              Join Jadhavar Yuva Sansad
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
