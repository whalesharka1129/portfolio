import Image, { StaticImageData } from "next/image"


interface SubAgencyProps {
    number: number,
    topic: string,
    content: string
}

export default function SubProcess ({number, topic, content}: SubAgencyProps){
    return(
        <div className="flex gap-[20px]">
           <p className="text-[75px] text-[#E3E3E3] italic font-bold leading-none max-w-[436px]">{number}</p>
           <div>
            <h2 className="text-black text-[20px] md:text-[22px] font-semibold mb-[10px]">{topic}</h2>
            <p className="max-w-[435.83px] text-[16px] text-[#4c4c4c]">{content}</p>
           </div>
        </div>
    )
}