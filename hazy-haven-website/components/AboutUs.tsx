// components/AboutUs.tsx

import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center py-16 px-6 lg:px-16 bg-white">
      {/* Image Section */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
        <figure>
          <Image
            src="/images/about-image.jpeg"
            alt="Scenic view of Hazy Haven B&B surrounded by nature"
            width={600}
            height={400}
            className="rounded-lg shadow-xl w-full h-auto"
            priority
          />
        </figure>
      </div>

      {/* Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left px-4 lg:px-0">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg mb-6">
          Nestled in the heart of nature, our B&B & Lodge offers a peaceful
          getaway with stunning views and luxurious accommodations. Escape the
          hustle and bustle of everyday life and unwind in elegance and comfort.
        </p>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
