import ProcessRight from "@/assets/Dashboard/asset.86422cc9.png"
import Image from "next/image"
import SubProcess from "./SubProcess"

const AgencyArr : Array<{ agencyimage : number, topic : string, content : string}>=
[{
    agencyimage : 1,
    topic : "Custom AI tools",
    content : "Unlock the potential of artificial intelligence tailored specifically to your business needs. Our Custom AI Tools streamline operations, enhance decision-making, and open new opportunities with bespoke AI solutions."
},
{
    agencyimage : 2,
    topic : "In-house creative studio",
    content : "Our In-House Creative Studio merges creativity with technology, delivering stunning websites, engaging apps, and captivating content. Elevate your brand with our comprehensive design and creative services."
},
{
    agencyimage : 3,
    topic : "Full MVP service",
    content : "Turn your vision into reality with our Full MVP Service. From ideation to launch, we provide comprehensive support to develop a market-ready MVP that captivates users and attracts investors."
},
{
    agencyimage : 4,
    topic : "Account Managers",
    content : "Experience personalized service with our dedicated Account Managers. As your strategic partners, they ensure project success through clear communication, timely updates, and proactive problem-solving."
}]






export default function Process (){
    return(
        <div>
            <div className="py-[100px] flex flex-col justify-center items-center">
                <p className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">OUR PROCESS</p>
                <h1 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] max-w-[648px] text-center">The Art of Building Great Software: Our Development Process</h1>
            </div>
            <div className="flex justify-center items-center gap-[0px]">
               <div className="flex flex-col gap-[30px]  pr-[160px]">
                 {
                    AgencyArr.map((item, idx : number )=>(
                        <SubProcess key={idx} number={item.agencyimage} topic={item.topic} content={item.content} />
                    ))
                 }      
               </div>
            <Image
             src={ProcessRight}
             alt=""
             className="w-[647.5px] h-[373.7]"
            />
            </div>
        </div>
    )
}