import React from 'react';
import Link from 'next/link';

const Products = () => {
  const promotionData = [
    {
      title: 'Black Mate Shirt',
      imageSrc: '/back shirt.jpg',
      description: 'The Luxury mate finish shirt',
      price: '$24.99',
    },
    {
      title: 'Blue Kid Shirt',
      imageSrc: '/kid blue shirt.jpg',
      description: 'Kid Blue Shirt with soft fabric',
      price: '$29.99',
    },
    {
      title: 'Cameryn Sash Tie Dress',
      imageSrc: '/header.png',
      description: 'Cameryn Sash Tie Dress ',
      price: '$19.99',
    },
    {
      title: 'Flex Push Button Bomber',
      imageSrc: '/event3.png',
      description: 'Flex Push Button Bomber',
      price: '$19.99',
    },
    {
      title: 'Soft Women Pent',
      imageSrc: '/womenpent1.jpg',
      description: 'Soft Women Pent Slik soft',
      price: '$24.99',
    },
    {
      title: 'Women Dress',
      imageSrc: '/womenpentshirt.jpg',
      description: 'Complete Woman Dressing',
      price: '$29.99',
    },
    
    
  ];

  return (
    <section className="bg-gray-100 py-8">
    <div className="container mx-auto px-4">
      <h2 className="  mt-1 text-center text-blue-700">Products</h2>
      <h1 className="mt-2 mb-3 text-center text-2xl font-bold"> Checkout Our Latest Collection</h1>
      <div className="flex flex-row overflow-x-auto hide-scrollbar space-x-4">
        {promotionData.map((product, index) => (
          <div
            key={index}
            className="flex-shrink-0 bg-white p-6 rounded-lg shadow flex flex-col items-center"
          >
            <img
              src={product.imageSrc}
              alt={product.title}
              className="h-40 w-40  mb-4 "
            />
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <span className="text-gray-800 font-semibold mb-2">
              {product.price}
            </span>
            <Link href="/allproducts"><button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button></Link>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Products;
