import Image from "next/image";

interface SubTestimonialProps {
    image: string;
    description: string;
    Name : string;
    role : string;
}

export default function SubTestimonial ( {image, description, Name, role} : SubTestimonialProps){
    return(
        <div>
            <p className="italic text-[18px] font-medium color-[#4C4C4C]">{description}</p>
           <div>
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