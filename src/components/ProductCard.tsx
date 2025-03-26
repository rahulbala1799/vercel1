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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-600">{price}</span>
          <Link 
            href={`/products/${slug}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
} 