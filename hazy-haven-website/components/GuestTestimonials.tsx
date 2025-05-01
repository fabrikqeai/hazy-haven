"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah & John",
    location: "New York, USA",
    image: "/images/guest1.jpeg",
    rating: 5,
    text: "An unforgettable experience. The views and hospitality were beyond compare!",
  },
  {
    name: "Lisa",
    location: "California, USA",
    image: "/images/guest2.jpeg",
    rating: 4.5,
    text: "A peaceful escape with everything we needed. Highly recommend the spa!",
  },
  {
    name: "Michael & Emma",
    location: "Boston, USA",
    image: "/images/guest3.jpeg",
    rating: 5,
    text: "Perfect place for a romantic getaway. The staff was amazing and the views were breathtaking!",
  },
  {
    name: "David & Anna",
    location: "Chicago, USA",
    image: "/images/guest4.jpeg",
    rating: 4.5,
    text: "A beautiful place with top-notch service. The private balcony views were stunning!",
  },
];

// Create looped carousel items for infinite scroll illusion
const carouselItems = [
  testimonials[testimonials.length - 1],
  ...testimonials,
  testimonials[0],
];

const GuestTestimonials = () => {
  const [index, setIndex] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideInterval = 8000;

  // Handle responsive transition speed
  const setTransitionSpeed = () => {
    const transition =
      window.innerWidth < 768
        ? "transform 0.6s ease-in-out"
        : "transform 0.4s ease-in-out";
    if (containerRef.current) {
      containerRef.current.style.transition = transition;
    }
  };

  useEffect(() => {
    setTransitionSpeed();
    window.addEventListener("resize", setTransitionSpeed);
    return () => window.removeEventListener("resize", setTransitionSpeed);
  }, []);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), slideInterval);
    return () => clearInterval(interval);
  }, []);

  // Loop reset logic
  useEffect(() => {
    const atStart = index === 0;
    const atEnd = index === carouselItems.length - 1;
    const resetIndex = atStart ? carouselItems.length - 2 : 1;

    if (atStart || atEnd) {
      setTimeout(() => {
        if (containerRef.current) containerRef.current.style.transition = "none";
        setIndex(resetIndex);
      }, 600);
    } else {
      setTransitionSpeed();
    }
  }, [index]);

  const nextSlide = () => setIndex((prev) => prev + 1);
  const prevSlide = () => setIndex((prev) => prev - 1);

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-semibold text-center mb-8">
        What Our Guests Say
      </h2>

      <div className="relative overflow-hidden max-w-5xl mx-auto pb-12">
        <div
          ref={containerRef}
          className="flex"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {carouselItems.map((testimonial, i) => (
            <motion.div
              key={i}
              className="min-w-full px-4 flex justify-center"
            >
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-center w-full max-w-xl">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 mx-auto rounded-full mb-4 object-cover border-2 border-yellow-500"
                />
                <div className="flex justify-center mb-2">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <FaStar
                      key={j}
                      className={`text-yellow-500 ${
                        j < Math.floor(testimonial.rating) ? "" : "opacity-50"
                      }`}
                    />
                  ))}
                </div>
                <blockquote className="italic text-lg mb-4">
                  “{testimonial.text}”
                </blockquote>
                <p className="text-sm font-semibold text-gray-700">{testimonial.name}</p>
                <p className="text-xs text-gray-500">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200"
        >
          <FaArrowRight />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-4">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                i === index - 1 ? "bg-yellow-500 scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestTestimonials;
