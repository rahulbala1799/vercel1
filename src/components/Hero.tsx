export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Custom Printed Packaging
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            High-quality customized packaging solutions for your business
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#products"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 