"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { FaWifi, FaCocktail, FaBath, FaTv, FaBed } from "react-icons/fa";
import Image from "next/image";

const rooms = [
  {
    name: "Luxury Suite",
    image: "/images/room1.jpeg",
    description: "Spacious and elegant with stunning views.",
    price: "$299/night",
    amenities: [<FaWifi key="wifi" />, <FaCocktail key="cocktail" />, <FaBath key="bath" />, <FaTv key="tv" />, <FaBed key="bed" />],
  },
  {
    name: "Mountain View Room",
    image: "/images/room2.jpeg",
    description: "Relax in comfort with breathtaking mountain scenery.",
    price: "$249/night",
    amenities: [<FaWifi key="wifi" />, <FaCocktail key="cocktail" />, <FaBed key="bed" />],
  },
  {
    name: "Garden Retreat",
    image: "/images/room3.jpeg",
    description: "A serene escape surrounded by lush gardens.",
    price: "$199/night",
    amenities: [<FaWifi key="wifi" />, <FaBath key="bath" />, <FaTv key="tv" />, <FaBed key="bed" />],
  },
];

const FeaturedRooms = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % rooms.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + rooms.length) % rooms.length);

  return (
    <section className="relative py-20 text-center overflow-visible">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/room-bg.jpeg"
          alt="Background of luxury room"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-10">Our Rooms</h2>

        {/* Carousel */}
        <div className="relative min-h-[540px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4 }}
              layout
              className="absolute w-full"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg mx-auto transform transition-transform hover:scale-105">
                <Image
                  src={rooms[index].image}
                  alt={rooms[index].name}
                  width={500}
                  height={300}
                  className="w-full h-60 object-cover mb-4 rounded-md"
                />
                <h3 className="text-2xl font-semibold text-gray-800">{rooms[index].name}</h3>
                <p className="text-sm text-gray-600 mb-3">{rooms[index].description}</p>
                <div className="flex justify-center gap-3 text-yellow-500 text-lg mb-3">
                  {rooms[index].amenities.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
                <p className="text-lg font-semibold text-yellow-600">{rooms[index].price}</p>
                <button className="mt-4 bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition">
                  View Details
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          aria-label="Previous room"
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition z-10"
        >
          <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next room"
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200 transition z-10"
        >
          <ChevronRightIcon className="w-6 h-6 text-gray-600" />
        </button>

        {/* CTA */}
        <div className="mt-10">
          <button className="bg-yellow-500 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition">
            See All Rooms
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
