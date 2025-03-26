import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Product data - in a real app, this would come from an API or database
const productsData = [
  {
    title: 'Printed Pizza Boxes',
    description: 'Custom printed pizza boxes with your brand logo. Perfect for pizzerias and restaurants.',
    longDescription: 'Our high-quality pizza boxes are made from food-grade cardboard with full-color custom printing options. Available in various sizes to fit all your pizza needs, these boxes maintain food temperature while showcasing your brand. The boxes are grease-resistant and stackable for easy transport.',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop',
    price: 'From €0.85/box',
    slug: 'printed-pizza-boxes',
    features: [
      'Available in multiple sizes: 8", 10", 12", 14", 16", 18"',
      'Full-color custom printing on all sides',
      'Food-safe materials, FDA approved',
      'Minimum order: 500 units',
      'Fast 2-week turnaround time'
    ],
    specifications: {
      material: 'Food-grade cardboard',
      thickness: '300gsm',
      printColors: 'CMYK, Pantone',
      minOrder: '500 units',
      leadTime: '2-3 weeks'
    }
  },
  {
    title: 'Paper Bags',
    description: 'Eco-friendly paper bags with custom printing. Ideal for retail and food service.',
    longDescription: 'Our custom printed paper bags are perfect for retail stores, food services, and events. Made from sustainable paper sources, these bags are sturdy, eco-friendly, and can be fully customized with your branding. Available with different handle options and in multiple sizes.',
    imageUrl: 'https://images.unsplash.com/photo-1608541737042-87a14e3de3c0?q=80&w=600&auto=format&fit=crop',
    price: 'From €0.45/bag',
    slug: 'paper-bags',
    features: [
      'Multiple handle options: twisted paper, flat paper, or no handles',
      'Eco-friendly materials from sustainable sources',
      'Custom size options available',
      'Minimum order: 1000 units',
      'Bulk discounts available for larger orders'
    ],
    specifications: {
      material: 'Kraft paper, recycled options available',
      thickness: '100-170gsm',
      printColors: 'Up to 4 colors, CMYK process',
      minOrder: '1000 units',
      leadTime: '2-4 weeks'
    }
  },
  {
    title: 'Bagasse Burger Boxes',
    description: 'Sustainable bagasse burger boxes with custom branding. Perfect for fast food restaurants.',
    longDescription: 'Our bagasse burger boxes are an eco-friendly solution for fast-food restaurants looking to reduce their environmental impact. Made from sugarcane fiber (bagasse), these compostable containers are sturdy, grease-resistant, and perfect for holding burgers, sandwiches, and other foods.',
    imageUrl: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop',
    price: 'From €0.65/box',
    slug: 'bagasse-burger-boxes',
    features: [
      'Compostable and biodegradable material',
      'Grease and water-resistant properties',
      'Microwave and refrigerator safe',
      'Minimum order: 500 units',
      'Customizable sizes to fit your products'
    ],
    specifications: {
      material: 'Sugarcane fiber (bagasse)',
      thickness: '2mm',
      printColors: 'Up to 2 colors',
      minOrder: '500 units',
      leadTime: '3-4 weeks'
    }
  },
  {
    title: 'Premium Linen Napkins',
    description: 'High-quality linen feel napkins with custom printing. Add elegance to your dining experience.',
    longDescription: 'Elevate your dining experience with our premium linen-feel napkins. These high-quality napkins look and feel like fabric but offer the convenience of disposables. Perfect for restaurants, cafes, events, and catering services seeking to make a sophisticated impression.',
    imageUrl: 'https://images.unsplash.com/photo-1596459435843-a8e8958c5fb5?q=80&w=600&auto=format&fit=crop',
    price: 'From €0.15/napkin',
    slug: 'premium-linen-napkins',
    features: [
      'Linen-feel texture for an upscale impression',
      'Multiple folding options available',
      'Full-color printing capabilities',
      'Minimum order: 2000 units',
      'Range of sizes available: cocktail, luncheon, dinner'
    ],
    specifications: {
      material: 'Airlaid paper with linen feel',
      thickness: '50-80gsm',
      printColors: 'CMYK, up to 4 colors',
      minOrder: '2000 units',
      leadTime: '2-3 weeks'
    }
  }
];

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}): Promise<Metadata> {
  const product = productsData.find(p => p.slug === params.slug);
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found'
    };
  }
  
  return {
    title: `${product.title} - PrintnPack`,
    description: product.description
  };
}

export default function ProductPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const product = productsData.find(p => p.slug === params.slug);
  
  if (!product) {
    notFound();
  }
  
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-600 text-white py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-xl text-blue-100">
              {product.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="mb-8">
          <Link href="/products" className="text-blue-600 hover:text-blue-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Products
          </Link>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-72 md:h-full w-full">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h2>
              <div className="mb-6">
                <span className="text-2xl font-bold text-blue-600">{product.price}</span>
              </div>
              
              <div className="mb-6">
                <p className="text-gray-700">{product.longDescription}</p>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <Link 
                  href={`mailto:contact@printnpack.com?subject=Quote Request for ${product.title}`}
                  className="bg-blue-600 text-white py-3 px-8 rounded-md text-center block hover:bg-blue-700 transition-colors duration-300"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
          
          <div className="p-8 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-4">Specifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex">
                  <div className="w-1/2 font-semibold text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  <div className="w-1/2 text-gray-600">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-8 text-center">Related Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productsData
              .filter(p => p.slug !== product.slug)
              .slice(0, 3)
              .map(relatedProduct => (
                <div 
                  key={relatedProduct.slug}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="relative h-48 w-full">
                    <Image
                      src={relatedProduct.imageUrl}
                      alt={relatedProduct.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold mb-2">{relatedProduct.title}</h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedProduct.description}</p>
                    <Link
                      href={`/products/${relatedProduct.slug}`}
                      className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
} 