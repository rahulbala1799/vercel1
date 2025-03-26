export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to elevate your brand with custom packaging?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Get started today and receive a free design draft in less than 2 hours!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#products"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 