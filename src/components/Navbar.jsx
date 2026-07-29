import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const slogans = [
  "“सशक्त युवा, सशक्त राजकारण, सशक्त भारत”",
  "“सशक्त युवा, सशक्त राजनिती, सशक्त भारत”",
];

const Navbar = () => {
  const [activeLine, setActiveLine] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const menu = [
    { label: "Home", path: "/" },
    { label: "About Yuva Sansad", path: "/about" },
    { label: "Report", path: "/reports" },
    { label: "Programs", path: "/programs" },
    { label: "Blog", path: "/blog" },
    { label: "Gallery", path: "/gallery" },
    { label: "Udan", path: "/udan" },
    { label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % slogans.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-[1400px] px-6 py-3">

        {/* ================= MOBILE HEADER (ONLY LOGO + MENU) ================= */}
        <div className="md:hidden flex items-center justify-between">
          <Link to="/">
            <img
              src="/assets/logomain.png"
              alt="Yuva Sansad Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl text-[#0a2a66]"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileOpen && (
          <div className="md:hidden mt-3 bg-gray-50 rounded-xl p-4">
            <div className="flex flex-col gap-2">
              {menu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-2 rounded-lg font-semibold
                    ${location.pathname === item.path
                      ? "bg-[#0a2a66] text-white"
                      : "text-[#0a2a66] hover:bg-[#eef2fb]"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="hidden md:grid grid-cols-[30%_70%] gap-4">

          {/* ================= LEFT 30% ================= */}
          <div className="flex items-start gap-4">
            <Link to="/" className="flex flex-col items-start">
              <img
                src="/assets/logomain.png"
                alt="Yuva Sansad Logo"
                className="h-16 sm:h-20 md:h-24 w-auto object-contain"
              />
              <span className="text-[11px] text-gray-600 mt-1">
                📞 +91 9823872816
              </span>
            </Link>

            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://www.instagram.com/jadhavar_yuvasansad/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="text-gray-600 hover:text-pink-600 cursor-pointer"
                  size={15}
                />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61579303354548"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF
                  className="text-gray-600 hover:text-blue-600 cursor-pointer"
                  size={15}
                />
              </a>

              {/* <a
                href="https://twitter.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  className="text-gray-600 hover:text-sky-500 cursor-pointer"
                  size={15}
                />
              </a>

              <a
                href="https://www.linkedin.com/company/yourpage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn
                  className="text-gray-600 hover:text-blue-700 cursor-pointer"
                  size={15}
                />
              </a> */}

              <a
                href="https://www.youtube.com/@jadhavargroupofinstitutespune"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube
                  className="text-gray-600 hover:text-red-600 cursor-pointer"
                  size={17}
                />
              </a>
            </div>

          </div>

          {/* ================= RIGHT 70% ================= */}
          <div className="flex flex-col">

            <div className="grid grid-cols-[55%_45%] items-start mt-1">

              {/* TEXT + SLOGAN */}
              <div className="flex flex-col items-center text-center">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeLine}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="text-[13px] font-semibold text-[#7b1d1d] mb-1"
                  >
                    {slogans[activeLine]}
                  </motion.p>
                </AnimatePresence>

                <h1 className="text-[18px] font-bold text-[#0a2a66]">
                  Yuva Sansad
                </h1>

                <p className="text-[12px] text-gray-600">
                  National Youth Leadership & Democratic Forum
                </p>

                <p className="text-[11px] text-[#0a2a66] font-semibold">
                  Non-Political • Youth Driven • Nation First
                </p>
              </div>

              {/* ================= PARTNER LOGOS (DESKTOP ONLY) ================= */}
              <div className="hidden lg:flex justify-end gap-5">
                {[
                  { img: "/assets/savitribai.png", name: "सावित्रीबाई फुले पुणे विद्यापीठ" },
                  { img: "/assets/jadhavar_logo.png", name: "जाधवकर शैक्षणिक संस्थांचा समूह" },
                  { img: "/assets/lions_logo.png", name: "लायन्स क्लब इंटरनॅशनल" },
                  { img: "/assets/roatari1.png", name: "रोटरी इंटरनॅशनल" },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center max-w-[80px]">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="h-8 w-auto object-contain"
                    />
                    <span className="text-[9px] text-gray-600 leading-tight mt-1">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ================= NAV MENU ================= */}
            <div className="flex justify-start gap-2 mt-3 flex-wrap">
              {menu.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-1.5 text-[13px] font-semibold rounded-md transition
                    ${location.pathname === item.path
                      ? "bg-[#0a2a66] text-white"
                      : "text-[#0a2a66] hover:bg-[#eef2fb]"
                    }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
