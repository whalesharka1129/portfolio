import Image from "next/image";
import { ReactNode } from "react";

interface SubCapabilityProps {
    image :ReactNode;
    name : string; 
    description : string;
}

export default function SubCapability({image, name, description} : SubCapabilityProps ){
    return(
        <div>
          <div className="w-[70px] h-[70px] rounded-full bg-[#F2F2F8] flex justify-center items-center">
          {image}
          </div>
          <h1 className="text-black text-[20px] md:text-[22px] font-semibold mb-[10px] max-w-[193.75px]">{name}</h1>
          <p className="max-w-[231.25px] text-[16px] text-[#4c4c4c]">{description}</p>
        </div>
    )
}