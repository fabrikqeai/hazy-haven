// components/ExploreReserve.tsx

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ExploreReserve = () => {
  return (
    <section className="relative py-16 bg-white text-center px-4 overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/reserve-bg.jpeg')",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 z-10" />

      {/* Section Content */}
      <div className="relative z-20">
        <motion.h2
          className="text-3xl text-white font-bold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Explore the Reserve
        </motion.h2>

        {/* Horizontal Scroll Gallery on Mobile */}
        <motion.div
          className="md:flex md:flex-wrap md:justify-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className="inline-block md:flex-none w-[85vw] sm:w-[60vw] md:w-[30%] mx-2 md:mx-0"
            >
              <Image
                src={`/images/reserve${num}.jpeg`}
                alt={`Scenic view of the reserve ${num}`}
                width={400}
                height={256}
                className="rounded-lg shadow-md object-cover w-full h-64"
              />
            </div>
          ))}
        </motion.div>

        <div className="mt-8">
          <Link href="/reserve">
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition">
              Discover More About the Reserve
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExploreReserve;
