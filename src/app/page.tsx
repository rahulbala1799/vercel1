import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import ProductCard from '@/components/ProductCard';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Link from 'next/link';

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
      <Benefits />
      
      <section id="products" className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Premium quality custom printed packaging solutions for your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.slug} {...product} />
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/products" 
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800"
            >
              View All Products
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      
      <CallToAction />

      <section id="contact" className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get in touch for a personalized quote on your custom packaging needs
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <p className="mb-6 text-gray-600">
                  Our team is here to help! Contact us and we&apos;ll get back to you as soon as possible.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:contact@printnpack.com" className="text-gray-600 hover:text-blue-600">contact@printnpack.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:+35312345678" className="text-gray-600 hover:text-blue-600">+353 1 234 5678</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-blue-600 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold">Hours</p>
                      <p className="text-gray-600">Mon-Fri: 8:00 - 16:00</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Get a Quote</h3>
                <a
                  href="mailto:contact@printnpack.com?subject=Custom Packaging Quote Request"
                  className="bg-blue-600 text-white w-full px-8 py-3 rounded-md font-semibold inline-block text-center hover:bg-blue-700 transition-colors duration-300"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
