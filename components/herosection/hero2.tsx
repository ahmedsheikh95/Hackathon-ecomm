import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

import Image from "next/image";

const Hero2 = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
        <div className="w-full sm:w-1/2">
        <span className="mt-28 mx-3 border-dotted border-2 border-gray-600 bg-red-400 px-2 py-1">
        Sale 70%
      </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mt-5">
          
            An Industrial <br /> Take on <br /> Streetwear
          </h1>
          <p className="leading-7 text-2xl mt-6">
            Anyone can beat you but no one can <br />
            beat your outfit as long as you wear <br />
            Dine outfits.
          </p>
          <Button className="mt-12">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Start Shopping
          </Button>
          <div className="flex space-x-5 mt-8">
            <Image
              src="/bazaar.png"
              width={120}
              height={100}
              alt="Bazaar Logo"
            />
            <Image
              src="/bustle.png"
              width={120}
              height={100}
              alt="Bustle Logo"
            />
            <Image
              src="/vercase.png"
              width={120}
              height={100}
              alt="Vercase Logo"
            />
            <Image
              src="/instyle.png"
              width={120}
              height={100}
              alt="Instyle Logo"
            />
          </div>
        </div>
        <div className="w-full sm:w-1/2 bg-orange-200 rounded-bl-full">
          <Image
            src="/header.png"
            width={500}
            height={500}
            alt="Girl Model"
            className="mx-auto"
          />
        </div>
      </div>
     
    </div>
  );
};

export default Hero2;
