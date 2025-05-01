// pages/index.tsx

import { NextPage } from "next";
import Head from "next/head";

// Components
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import FeaturedRooms from "@/components/FeaturedRooms";
import GuestTestimonials from "@/components/GuestTestimonials";
import NatureExperiences from "@/components/LocalExperiences";
import ExploreReserveCarousel from "@/components/ExploreReserveCarousel";
import ExploreReserve from "@/components/ExploreReserve";
import CTA from "@/components/CTA";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hazy Haven B&B | Nature-Inspired Luxury Lodge</title>
        <meta
          name="description"
          content="Reconnect with nature in luxury at Hazy Haven B&B. Discover our stunning rooms, reserve, and guest experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Hazy Haven B&B | Nature-Inspired Luxury Lodge" />
        <meta
          property="og:description"
          content="Reconnect with nature in luxury at Hazy Haven B&B. Discover our stunning rooms, reserve, and guest experiences."
        />
        <meta property="og:image" content="https://yourdomain.com/images/hero.jpeg" />
        <meta property="og:url" content="https://yourdomain.com/" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hazy Haven B&B | Nature-Inspired Luxury Lodge" />
        <meta
          name="twitter:description"
          content="Reconnect with nature in luxury at Hazy Haven B&B. Discover our stunning rooms, reserve, and guest experiences."
        />
        <meta name="twitter:image" content="https://yourdomain.com/images/hero.jpeg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://yourdomain.com/" />
      </Head>

      {/* Page Sections */}
      <Hero />
      <AboutUs />
      <ExploreReserve />
      <ExploreReserveCarousel />
      <FeaturedRooms />
      <NatureExperiences />
      <GuestTestimonials />
      <CTA />
    </>
  );
};

export default Home;
