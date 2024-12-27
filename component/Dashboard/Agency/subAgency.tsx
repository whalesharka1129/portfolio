import Image, { StaticImageData } from "next/image"


interface SubAgencyProps {
    image: StaticImageData,
    topic: string,
    content: string
}

export default function SubAgency ({image, topic, content}: SubAgencyProps){
    return(
        <div className="flex">
           <Image 
              src={image}
              alt=""
              className="mt-[10px] mb-[20px] w-[45px] h-[45px] mr-[10px]"
           />
           <div>
            <h2 className="text-[22px] text-black font-semibold mb-[10px]">{topic}</h2>
            <p className="max-w-[545px] text-[16px] text-[#4c4c4c]">{content}</p>
           </div>
        </div>
    )
}