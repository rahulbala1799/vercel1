import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - PrintnPack',
  description: 'Browse our premium custom printed packaging products',
};

const products = [
  {
    title: 'Printed Pizza Boxes',
    description: 'Custom printed pizza boxes with your brand logo. Perfect for pizzerias and restaurants.',
    imageUrl: '/images/pizza-box.jpg',
    price: 'From €0.85/box',
    slug: 'printed-pizza-boxes',
    features: [
      'Available in multiple sizes',
      'Full-color custom printing',
      'Food-safe materials',
      'Minimum order: 500 units',
      'Fast 2-week turnaround'
    ]
  },
  {
    title: 'Paper Bags',
    description: 'Eco-friendly paper bags with custom printing. Ideal for retail and food service.',
    imageUrl: '/images/paper-bags.jpg',
    price: 'From €0.45/bag',
    slug: 'paper-bags',
    features: [
      'Multiple handle options',
      'Eco-friendly materials',
      'Custom size options',
      'Minimum order: 1000 units',
      'Bulk discounts available'
    ]
  },
  {
    title: 'Bagasse Burger Boxes',
    description: 'Sustainable bagasse burger boxes with custom branding. Perfect for fast food restaurants.',
    imageUrl: '/images/burger-boxes.jpg',
    price: 'From €0.65/box',
    slug: 'bagasse-burger-boxes',
    features: [
      'Compostable material',
      'Grease-resistant',
      'Microwave-safe',
      'Minimum order: 500 units',
      'Customizable sizes'
    ]
  },
  {
    title: 'Premium Linen Napkins',
    description: 'High-quality linen feel napkins with custom printing. Add elegance to your dining experience.',
    imageUrl: '/images/napkins.jpg',
    price: 'From €0.15/napkin',
    slug: 'premium-linen-napkins',
    features: [
      'Linen-feel texture',
      'Multiple folding options',
      'Full-color printing',
      'Minimum order: 2000 units',
      'Range of sizes available'
    ]
  },
  {
    title: 'Custom Coffee Cups',
    description: 'Biodegradable coffee cups with your logo. Ideal for cafes and coffee shops.',
    imageUrl: '/images/coffee-cups.jpg',
    price: 'From €0.20/cup',
    slug: 'custom-coffee-cups',
    features: [
      'Multiple sizes available',
      'Double-wall insulation',
      'Biodegradable materials',
      'Minimum order: 1000 units',
      'Matching lids available'
    ]
  },
  {
    title: 'Food Containers',
    description: 'Eco-friendly food containers for takeaway meals and deliveries.',
    imageUrl: '/images/food-containers.jpg',
    price: 'From €0.55/container',
    slug: 'food-containers',
    features: [
      'Leak-proof design',
      'Microwave safe options',
      'Recyclable materials',
      'Minimum order: 500 units',
      'Various compartment options'
    ]
  }
];

export default function ProductsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-600 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-blue-100">
              Premium quality custom printed packaging solutions for your business
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.slug}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-700 mb-2">Features:</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-4 w-4 text-blue-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">{product.price}</span>
                  <Link 
                    href={`/products/${product.slug}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 