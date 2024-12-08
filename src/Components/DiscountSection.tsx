import Image from "next/image";
import Link from "next/link";

export default function () {
  return (
    <div className="m-9 py-10">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
      
        <div className="relative bg-white p-4 flex flex-col justify-between h-[250px]">
          <div
            className="absolute inset-0 bg-no-repeat  bg-right w-full h-full"
            style={{ backgroundImage: "url('/image 1162.png')" }}
          >
          
          </div>
          <div className="relative z-10 text-left p-4">
            <h2 className="text-violet-900 text-xl font-semibold mb-2">23% off in all products</h2>
            <Link href="/" className="text-pink-500 hover:underline">Shop Now</Link>
          </div>
        </div>

        
        <div className="relative bg-[#EEEFFB] p-4 flex flex-col justify-between h-[250px]">
          <div
            className="absolute inset-0 bg-no-repeat bg-bottom w-full h-full"
            style={{ backgroundImage: "url('/image 1161.png')" }}
          >
            
          </div>
          <div className="relative z-10 text-left p-4">
            <h2 className="text-violet-900text-xl font-semibold mb-2">23% off in all products</h2>
            <Link href="/" className="text-pink-500 hover:underline">View Collection</Link>
          </div>
        </div>

        
        <div className="grid grid-rows-3 gap-6 h-[250px]">
     
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-20 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/image 19.png" 
                alt="Image 3"
                layout="fill"
                objectFit="contain" 
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-violet-900 text-lg font-semibold mb-2">Executive Seat Chair</h3>
              <p className="text-violet-900 line-through">$32.00</p>
            </div>
          </div>

         
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-20 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/image 28.png" 
                alt="Image 4"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-violet-900 text-lg font-semibold mb-2">Executive Seat Chair</h3>
              <p className="text-violet-900 line-through">$32.00</p>
            </div>
          </div>

         
          <div className="grid grid-cols-2 gap-6">
            <div className="relative w-full h-20 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/image 31.png" 
                alt="Image 5"
                layout="fill"
                objectFit="contain" 
              />
            </div>
            <div className="flex flex-col justify-center text-left">
              <h3 className="text-violet-900 text-lg font-semibold mb-2">Executive Seat Chair</h3>
              <p className="text-violet-900 line-through">$32.00</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}