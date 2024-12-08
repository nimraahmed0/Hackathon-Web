import React from "react";

const FeaturedProducts = () => {
  const products = [
    {
      name: "Cantilever chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/chair.png",
    },
    {
      name: "Comfort chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/cushion chair.png",
    },
    {
      name: "Office chair",
      code: "Code - Y523201",
      price: "$42.00",
      image: "/white chair.png",
    },
   
  ];

  return (
    <section className="bg-purple-50 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Featured Products
        </h2>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative border rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition duration-300"
              style={{ height: "361px" }} 
            >
              <div className="w-full h-40 flex items-center justify-center overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500">{product.code}</p>
                <p className="text-lg font-bold text-gray-800 mt-2">
                  {product.price}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;