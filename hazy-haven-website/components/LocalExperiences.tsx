import Link from "next/link";

const LocalExperiences = () => {
  return (
    <section id="nature-experience" className="py-16 text-center px-4">
      <h2 className="text-3xl font-semibold mb-6">Experience Nature</h2>

      {/* Horizontal Scrolling for Mobile */}
      <div className="sm:hidden overflow-x-auto no-scrollbar">
        <div className="flex space-x-8">
          {[
            {
              image: "/images/hiking.jpeg",
              alt: "Hiking",
              title: "Guided Hikes",
              description: "Explore hidden trails with a local guide.",
            },
            {
              image: "/images/river-kayak.jpeg",
              alt: "Kayaking",
              title: "River Kayaking",
              description: "Paddle through pristine waters surrounded by nature.",
            },
            {
              image: "/images/birdwatching.jpeg",
              alt: "Bird Watching",
              title: "Bird Watching",
              description: "Spot rare birds in their natural habitat.",
            },
          ].map(({ image, alt, title, description }, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300 w-72"
            >
              <img
                src={image}
                alt={alt}
                className="w-full h-40 object-cover mb-4 rounded-md"
                loading="lazy"
              />
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Layout for Larger Screens */}
      <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {[
          {
            image: "/images/hiking.jpeg",
            alt: "Hiking",
            title: "Guided Hikes",
            description: "Explore hidden trails with a local guide.",
          },
          {
            image: "/images/river-kayak.jpeg",
            alt: "Kayaking",
            title: "River Kayaking",
            description: "Paddle through pristine waters surrounded by nature.",
          },
          {
            image: "/images/birdwatching.jpeg",
            alt: "Bird Watching",
            title: "Bird Watching",
            description: "Spot rare birds in their natural habitat.",
          },
        ].map(({ image, alt, title, description }, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 duration-300"
          >
            <img
              src={image}
              alt={alt}
              className="w-full h-40 object-cover mb-4 rounded-md"
              loading="lazy"
            />
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-10">
        <Link
          href="/experiences"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg shadow-md transition"
        >
          See More Experiences
        </Link>
      </div>
    </section>
  );
};

export default LocalExperiences;
