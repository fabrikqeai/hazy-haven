"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "/images/reserve1.jpeg",
    alt: "Scenic view of the reserve",
    caption: "Breathtaking landscapes and serene nature.",
  },
  {
    src: "/images/reserve2.jpeg",
    alt: "Wildlife in the reserve",
    caption: "Experience wildlife up close and personal.",
  },
  {
    src: "/images/reserve3.jpeg",
    alt: "Hiking trail",
    caption: "Explore our scenic hiking trails.",
  },
];

const AUTOPLAY_DELAY = 5000; // 5 seconds

const ExploreReserveCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [key, setKey] = useState(0); // force restart progress bar animation
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
    setKey((prev) => prev + 1);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
    setKey((prev) => prev + 1);
  };

  const goToSlide = (i: number) => {
    setIndex(i);
    setKey((prev) => prev + 1);
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  // Autoplay with proper interval clearing
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setKey((prev) => prev + 1);
      }, AUTOPLAY_DELAY);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [index, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="py-16 text-center px-4">
      <h2 className="text-3xl font-semibold mb-6">Explore the Reserve</h2>

      <div
        {...handlers}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
        tabIndex={0}
        className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg aspect-video outline-none"
      >
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-full"
            role="img"
            aria-label={images[index].alt}
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              priority
              className="object-cover rounded-lg"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent text-white p-4 text-lg">
              {images[index].caption}
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 p-2 rounded-full shadow-md transition"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 p-2 rounded-full shadow-md transition"
        >
          &#10095;
        </button>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 z-20">
          <motion.div
            key={key}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: AUTOPLAY_DELAY / 1000, ease: "linear" }}
            className="h-full bg-yellow-500"
          />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="mt-4 flex justify-center space-x-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full transition ${
              i === index ? "bg-yellow-500 scale-110" : "bg-gray-300 hover:bg-yellow-300"
            }`}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <Link href="/explore-reserve">
          <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-lg font-semibold rounded-md shadow-md transition">
            Learn More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ExploreReserveCarousel;
