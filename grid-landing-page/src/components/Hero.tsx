const Hero = () => {
  return (
    <section className="flex min-h-[400px] flex-col justify-center border-b border-blue-200 p-8 text-left md:min-h-[600px] md:border-r md:p-12 lg:p-16">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold leading-[0.95] md:text-5xl lg:text-6xl">
          A classroom for every child.
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-relaxed">
          We fund the schools, train the teachers, and measure what works — so
          every child we reach today becomes a graduate tomorrow.
        </p>
      </div>
    </section>
  );
};

export default Hero;
