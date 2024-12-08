import React from "react";

const Moreone: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
    
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold text-purple-900 mb-10">
          What Shopex Offer!
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {Array(4)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-md max-w-xs text-center"
              >
                <div className="mb-4">
                  {/* Replace with an icon/image */}
                  <div className="w-16 h-16 mx-auto flex items-center justify-center text-lg
                   text-orange-600 font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  24/7 Support
                </h3>
                <p className="relative text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                  purus gravida.
                </p>
              </div>
            ))}
        </div>
      </section>

      
      <section className="bg-white   h-[579px]">
        <div className="p-[64px]  flex flex-wrap md:flex-nowrap items-center gap-10 px-6">
          <div className="flex-1">
           
            <img
              src="/blue sofaa.png"
              alt="Product"
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-purple-700 mb-4">
              Unique Features Of Latest & Trending Products
            </h3>
            <ul className="relative text-gray-700 space-y-2 list-disc pl-5">
              <li>
                All frames constructed with hardwood solids and laminates.
              </li>
              <li>
                Reinforced with double wood dowels, glue, screws, nails at
                corner blocks, and machine nails.
              </li>
              <li>Arms, backs, and seats are structurally reinforced.</li>
            </ul>
            <div className="mt-8">
              <button className="relative bg-purple-600 text-white py-2 px-6 rounded shadow-md hover:bg-purple-700">
                Add To Cart
              </button> B&B Italian Sofa - $32.00
            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Moreone;
