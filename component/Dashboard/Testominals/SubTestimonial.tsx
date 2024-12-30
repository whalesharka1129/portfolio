import Image, { StaticImageData } from "next/image";

interface SubTestimonialProps {
    image: StaticImageData;
    description: string;
    Name : string;
    role : string;
}

export default function SubTestimonial ( {image, description, Name, role} : SubTestimonialProps){
    return(
        <div className="flex flex-col justify-center items-center">
            <p className="italic text-[18px] font-medium color-[#4C4C4C] w-[1275px]">{description}</p>
           <div className="flex gap-[20px] mt-[71px] w-[1275px] justify-start ">
            <Image 
             src={image}
             alt=""
            /> 
            <div>
                <p className="text-black font-medium text-[18px]">{Name}</p>
                <p className="text-[16px] text-[#4c4c4c]">{role}</p>
            </div>
            </div>
        </div>
    )
}