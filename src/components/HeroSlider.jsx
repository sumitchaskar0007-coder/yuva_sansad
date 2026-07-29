import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function HeroSlider() {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-black
        pt-[80px]
        h-[60vh]
        md:h-[75vh]
      "
    >
      {/* 🎥 Background Video */}
      <video
        className="absolute inset-0 w-full h-100px object-cover"
        src="/video/home1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🌑 Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* 📄 Content */}
      <div className="relative z-10 h-full container-wide flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl text-white"
        >
          {/* Tagline */}
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-yellow-400 mb-3">
            Yuva Sansad
          </p>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
            Eduction for Strenght Intellect  and Wisdom

          </h1>

          {/* Description */}
          <p className="text-base md:text-xl text-gray-200 mb-8">
            A national, non-political platform nurturing democratic values,
            leadership, and public responsibility among India’s youth.
          </p>

          {/* CTA */}
          <Link
            to="/about"
            className="
              inline-block
              bg-yellow-400
              text-gray-900
              px-8
              py-3
              rounded-lg
              font-bold
              hover:bg-yellow-300
              transition
            "
          >
            About Yuva Sansad →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
