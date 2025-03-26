export default function Testimonials() {
  const testimonials = [
    {
      text: "Fantastic customer service, great quality products. My custom printed boxes arrived early and in completely recyclable packaging. I was super impressed. Cheaper than a lot of alternatives too!",
      author: "Daniel, Fresh Pizza Co."
    },
    {
      text: "Terrific service, friendly and helpful staff. Design team are very efficient and happy to change and amend product design numerous times. Excellent product quality and delivered ahead of time.",
      author: "Joanna, Bakery Express"
    },
    {
      text: "I would absolutely order from PrintnPack again. The team went above and beyond to make sure our packaging was perfect. Outstanding communication and product quality.",
      author: "Katherine, Gourmet Foods"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don&apos;t just take our word for it - see what our customers have to say about their experience with PrintnPack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-lg relative shadow-sm"
            >
              <div className="text-4xl text-blue-200 absolute top-4 left-4">&quot;</div>
              <p className="text-gray-700 mb-6 relative z-10 pt-6">
                {testimonial.text}
              </p>
              <div className="font-semibold text-blue-600">
                {testimonial.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 