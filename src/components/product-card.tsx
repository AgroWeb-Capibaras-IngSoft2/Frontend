import React from 'react';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
} from '@heroui/react';
import { Icon } from '@iconify/react';

import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Card
      className="overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover"
        />

        {product.isOrganic && (
          <Chip
            color="success"
            variant="flat"
            size="sm"
            className="absolute top-2 left-2"
          >
            Organic
          </Chip>
        )}

        {product.isBestSeller && (
          <Chip
            color="warning"
            variant="flat"
            size="sm"
            className="absolute top-2 right-2"
          >
            Best Seller
          </Chip>
        )}

        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            color="primary"
            variant="solid"
            className="font-medium"
            endContent={<Icon icon="lucide:shopping-cart" />}
          >
            Add to Cart
          </Button>
        </div>
      </div>

      <CardBody className="p-3">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-default-500 text-sm">{product.unit}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
            {product.originalPrice && (
              <p className="text-default-400 text-sm line-through">
                ${product.originalPrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>
      </CardBody>

      <CardFooter className="flex justify-between items-center pt-0">
        <div className="flex items-center">
          <Icon
            icon={product.inStock ? "lucide:check-circle" : "lucide:x-circle"}
            className={
              product.inStock ? "text-success mr-1" : "text-danger mr-1"
            }
          />
          <span
            className={`text-xs ${
              product.inStock ? "text-success" : "text-danger"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        <div className="flex items-center">
          <Icon icon="lucide:truck" className="text-default-400 mr-1" />
          <span className="text-xs text-default-400">
            {product.freeShipping ? "Free Shipping" : "Standard Shipping"}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};
