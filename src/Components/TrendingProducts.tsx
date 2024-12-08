import Image from "next/image";

export default function Trendingproducts() {
  return (
    <div className="py-10">
      <div className="text-violet-700 text-3xl font-bold font-serif text-center mb-8">
       Top Categories
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        
        <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-[280px] md:w-[300px] h-[450px]">
         
          <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image
              src="/image 31.png"
              alt="Image 1"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="text-center">
            <h3 className="text-[16px] font-semibold text-violet-700 mb-2">Cantilever chair</h3>
            <p className="mb-4 text-violet-700">
              $26.00 <span className="line-through text-gray-500">$42.00</span>
            </p>
          </div>
        </div>

      
        <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-[280px] md:w-[300px] h-[450px]">
        
          <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image
              src="/image 32.png"
              alt="Image 2"
              layout="fill"
              objectFit="contain" 
            />
          </div>
          
          <div className="text-center">
            <h3 className="text-[16px] font-semibold text-violet-700 mb-2">Cantilever chair</h3>
            <p className="mb-4 text-violet-700">
              $26.00 <span className="line-through text-gray-500">$42.00</span>
            </p>
          </div>
        </div>

        
        <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-[280px] md:w-[300px] h-[450px]">
          
          <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image
              src="/image 1170.png"
              alt="Image 3"
              layout="fill"
              objectFit="contain" 
            />
          </div>
          
          <div className="text-center">
            <h3 className="text-[16px] font-semibold text-violet-700 mb-2">Cantilever chair</h3>
            <p className="mb-4 text-violet-700">
              $26.00 <span className="line-through text-gray-500">$42.00</span>
            </p>
          </div>
        </div>

        
        <div className="bg-white shadow-lg rounded-lg p-4 w-full sm:w-[280px] md:w-[300px] h-[450px]">
         
          <div className="relative w-full h-80 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image
              src="/image 1171.png" 
              alt="Image 4"
              layout="fill"
              objectFit="contain"
            />
          </div>
         
          <div className="text-center">
            <h3 className="text-[16px] font-semibold text-violet-700 mb-2">Cantilever chair</h3>
            <p className="mb-4 text-violet-700">
              $26.00 <span className="line-through text-gray-500">$42.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


