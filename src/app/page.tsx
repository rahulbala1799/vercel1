import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';

const products = [
  {
    title: 'Printed Pizza Boxes',
    description: 'Custom printed pizza boxes with your brand logo. Perfect for pizzerias and restaurants.',
    imageUrl: '/images/pizza-box.jpg',
    price: 'From €0.85/box',
    slug: 'printed-pizza-boxes'
  },
  {
    title: 'Paper Bags',
    description: 'Eco-friendly paper bags with custom printing. Ideal for retail and food service.',
    imageUrl: '/images/paper-bags.jpg',
    price: 'From €0.45/bag',
    slug: 'paper-bags'
  },
  {
    title: 'Bagasse Burger Boxes',
    description: 'Sustainable bagasse burger boxes with custom branding. Perfect for fast food restaurants.',
    imageUrl: '/images/burger-boxes.jpg',
    price: 'From €0.65/box',
    slug: 'bagasse-burger-boxes'
  },
  {
    title: 'Premium Linen Napkins',
    description: 'High-quality linen feel napkins with custom printing. Add elegance to your dining experience.',
    imageUrl: '/images/napkins.jpg',
    price: 'From €0.15/napkin',
    slug: 'premium-linen-napkins'
  }
];

export default function Home() {
  return (
    <main>
      <Hero />
      
      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Get Your Custom Quote</h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us for a personalized quote on your custom packaging needs
            </p>
            <a
              href="mailto:contact@example.com"
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
