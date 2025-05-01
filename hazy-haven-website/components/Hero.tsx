// components/Hero.tsx

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden text-white flex items-center justify-center text-center snap-start">
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.jpeg')",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 z-10" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-20 px-6 max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Escape to Nature’s Embrace
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Reconnect with tranquility and luxury in the heart of the reserve.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 sm:justify-center">
          <Link href="/booking">
            <button className="w-full sm:w-auto px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold rounded-md shadow-md transition">
              Book Your Stay
            </button>
          </Link>
          <Link href="#explore-rooms">
            <button className="w-full sm:w-auto px-6 py-3 border-2 border-white text-lg font-semibold rounded-md transition">
              Explore Rooms
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
