import Image from 'next/image';
import Link from 'next/link';
import { RatingStars } from './RatingStars';
import { Badge } from './Badge';

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  isNew?: boolean;
  isOnSale?: boolean;
}

interface Props {
  product: Product;
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-200">
      {product.isNew && <Badge variant="new">New</Badge>}
      {product.isOnSale && <Badge variant="sale">Sale</Badge>}
      <Link href={`/product/${product.id}`}> 
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={400}
          className="object-cover w-full h-48"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 truncate">{product.name}</h3>
        <p className="mt-1 text-primary font-semibold">${product.price.toFixed(2)}</p>
        <RatingStars rating={product.rating} className="mt-2" />
        <button className="mt-3 w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};
