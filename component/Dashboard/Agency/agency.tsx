import SubAgency from "./subAgency";
import AgencyOne from "@/assets/Dashboard/ai.0f6b109f.png"
import AgencyTwo from "@/assets/Dashboard/management.99ff581c.png"
import AgencyThree from "@/assets/Dashboard/mvp.2cb3c80f.png"
import AgencyFour from "@/assets/Dashboard/user-avatar.7cd00932.png"
import { StaticImageData } from "next/image";

const AgencyArr : Array<{ agencyimage : StaticImageData, topic : string, content : string}>=
[{
    agencyimage : AgencyOne,
    topic : "Custom AI tools",
    content : "Unlock the potential of artificial intelligence tailored specifically to your business needs. Our Custom AI Tools streamline operations, enhance decision-making, and open new opportunities with bespoke AI solutions."
},
{
    agencyimage : AgencyTwo,
    topic : "In-house creative studio",
    content : "Our In-House Creative Studio merges creativity with technology, delivering stunning websites, engaging apps, and captivating content. Elevate your brand with our comprehensive design and creative services."
},
{
    agencyimage : AgencyThree,
    topic : "Full MVP service",
    content : "Turn your vision into reality with our Full MVP Service. From ideation to launch, we provide comprehensive support to develop a market-ready MVP that captivates users and attracts investors."
},
{
    agencyimage : AgencyFour,
    topic : "Account Managers",
    content : "Experience personalized service with our dedicated Account Managers. As your strategic partners, they ensure project success through clear communication, timely updates, and proactive problem-solving."
}]


export default function Agency(){
    return(
        <div className="py-[100px] flex flex-col justify-center items-center">

             <h1 className="flex justify-center items-center mr-[620px] text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] max-w-[596px]">
                The only agency you need for all 
                your development and digital 
                marketing needs!
             </h1>
            <p className="flex justify-center items-center mr-[620px] mt-[20px] max-w-[596px] text-[16px] text-[#4c4c4c]">Transforming your brand's online presence and generating meaningful results is our 
                top priority at VividVista. As a leading paid search ad agency, we bring together a 
                unique blend of creativity and data-driven.</p>
            <div className="mt-[50px]">
               <div className="flex justify-center items-center gap-[30px]">
                <SubAgency image={AgencyArr[0].agencyimage} topic={AgencyArr[0].topic}  content={AgencyArr[0].content} />
                <SubAgency image={AgencyArr[1].agencyimage} topic={AgencyArr[1].topic}  content={AgencyArr[1].content} />
               </div>
               <div className="flex mt-[30px] gap-[30px]">
                <SubAgency image={AgencyArr[2].agencyimage} topic={AgencyArr[2].topic}  content={AgencyArr[2].content} />
                <SubAgency image={AgencyArr[3].agencyimage} topic={AgencyArr[3].topic}  content={AgencyArr[3].content} />
               </div>
            </div>
        </div>
    )
}