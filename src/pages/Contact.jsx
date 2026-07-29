import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { dbApi } from "../lib/firebase";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await dbApi.addDoc(dbApi.collection(dbApi.db, "contact"), {
        ...form,
        source: "Jadhavar Yuva Sansad",
        createdAt: dbApi.serverTimestamp(),
      });

      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch (err) {
      console.error(err);
      setStatus("Failed to send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: "📍",
      title: "Office Address",
      details: ["Narhe, Pune", "Maharashtra, India"],
    },
    {
      icon: "📞",
      title: "Phone",
      details: ["+91 9823872816"],
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["ssj8995@gmail.com"],
    },
    {
      icon: "🕐",
      title: "Office Hours",
      details: ["Mon – Fri: 10:00 AM – 6:00 PM"],
    },
  ];

  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Contact Us | Jadhavar Yuva Sansad</title>
        <meta
          name="description"
          content="Contact Jadhavar Yuva Sansad – a national, non-political youth platform promoting democratic values and leadership."
        />
        <meta
          name="keywords"
          content="Jadhavar Yuva Sansad contact, youth parliament India, youth leadership contact"
        />
        <link
          rel="canonical"
          href="https://www.jadhavaryuvasansad.org/contact"
        />
      </Helmet>

      <div className="bg-white">
        {/* ================= HERO ================= */}
        <section className="bg-gradient-to-r from-[#7b1d1d] to-red-700 text-white py-16 px-4">
          <div className="container-wide">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Jadhavar Yuva Sansad
            </h1>
            <p className="text-red-100 max-w-2xl">
              Reach out for participation, collaboration, or general inquiries.
            </p>
          </div>
        </section>

        {/* ================= CONTACT INFO ================= */}
        <section className="container-wide py-16 px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-primary hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((d, j) => (
                  <p key={j} className="text-sm text-gray-700">
                    {d}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* ================= FORM & MAP ================= */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* FORM */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
              <h2 className="text-3xl font-bold mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill in the form and our team will respond shortly.
              </p>

              <form className="space-y-5" onSubmit={onSubmit}>
                {[
                  { label: "Full Name", key: "name", type: "text" },
                  { label: "Email Address", key: "email", type: "email" },
                  { label: "Phone Number", key: "phone", type: "tel" },
                  { label: "Subject", key: "subject", type: "text" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="block text-sm font-semibold mb-2">
                      {f.label} *
                    </label>
                    <input
                      type={f.type}
                      value={form[f.key]}
                      onChange={(e) =>
                        setForm({ ...form, [f.key]: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary outline-none"
                      required
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="5"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-red-800 transition"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {status && (
                  <div
                    className={`p-4 rounded-lg text-center font-semibold ${status.includes("success")
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                      }`}
                  >
                    {status}
                  </div>
                )}
              </form>
            </div>

            {/* MAP */}
            <div className="space-y-6">
              <div className="bg-red-50 rounded-2xl p-8 border-2 border-red-200">
                <h3 className="text-2xl font-bold mb-4">About Our Office</h3>
                <p className="text-gray-700 leading-relaxed">
                  Jadhavar Yuva Sansad is committed to youth leadership,
                  democratic values, and responsible citizenship.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg h-80">
                <iframe
                  title="Jadhavar Yuva Sansad Location"
                  src="https://maps.google.com/maps?q=Maharashtra%20India&t=&z=6&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="bg-gradient-to-r from-[#7b1d1d] to-red-700 text-white py-16 px-4">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-bold mb-4">
              Join the Youth Parliament Movement
            </h2>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Be a part of Jadhavar Yuva Sansad and contribute to nation building.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
