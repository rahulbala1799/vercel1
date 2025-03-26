export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container-custom py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Premium Custom Printed Packaging
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            High-quality customized packaging solutions from the best manufacturers at affordable prices
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#products"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300"
            >
              Shop Now
            </a>
            <a
              href="#benefits"
              className="border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Trusted by section */}
      <div className="bg-white/10 py-8">
        <div className="container-custom">
          <p className="text-center text-sm uppercase tracking-wider mb-6 text-blue-100">Trusted by 1000+ companies</p>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-80">
            <div className="text-white font-semibold text-lg">PrintCafe</div>
            <div className="text-white font-semibold text-lg">BoxMasters</div>
            <div className="text-white font-semibold text-lg">GreenPackage</div>
            <div className="text-white font-semibold text-lg">FoodContainer</div>
            <div className="text-white font-semibold text-lg">PackSolutions</div>
          </div>
        </div>
      </div>
    </div>
  );
} 