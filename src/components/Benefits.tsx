export default function Benefits() {
  const benefits = [
    {
      title: 'Free Expert Design Help',
      description: 'Receive a design proof in less than 2 hours during working hours. Our in-house experts will assist with your design.',
      icon: '🎨'
    },
    {
      title: '100% Price Guarantee',
      description: 'We guarantee the best prices on custom printed packaging. If you find a better price, we\'ll beat it by 5%!',
      icon: '💰'
    },
    {
      title: 'Always Free Shipping',
      description: 'Get free shipping on all orders, with expedited production available for urgent needs.',
      icon: '🚚'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose PrintnPack?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We make custom printed packaging easy, affordable, and hassle-free for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-4xl mb-5 flex justify-center">
                <span className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                  {benefit.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 