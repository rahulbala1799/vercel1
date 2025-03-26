import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  slug: string;
}

export default function ProductCard({ title, description, imageUrl, price, slug }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="relative h-56 w-full overflow-hidden bg-gray-200">
        <div className="w-full h-full flex items-center justify-center text-gray-400">
          {title}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">{price}</span>
          <Link 
            href={`/products/${slug}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors duration-300"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
} 