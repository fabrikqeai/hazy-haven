const CTA = () => {
  return (
    <section className="relative min-h-[400px] flex items-center justify-center px-4 sm:px-6 py-20 text-white text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cta-bg.jpeg')",
          backgroundAttachment: "fixed",
        }}
        aria-hidden="true"
      />

      {/* Blur & Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Ready for a Serene Getaway?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Book your escape today and let nature rejuvenate your soul.
        </p>
        <a
          href="/booking"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 px-6 py-3 text-white font-semibold rounded-md shadow-md transition-colors duration-300"
        >
          Book Now
        </a>
      </div>
    </section>
  );
};

export default CTA;
