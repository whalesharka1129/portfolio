import dotline from "@/assets/Dashboard/dot-lines.3b0a0a45.png"
import CommonButton from "@/component/Navbar/button"
import Image from "next/image"
import butt from "@/assets/Dashboard/button.svg"

import SubCapability from "./subCapability"
import { Capone } from "@/assets/Dashboard/capone"
import { ReactNode } from "react"
import { Captwo } from "@/assets/Dashboard/captwo"
import { Capthree } from "@/assets/Dashboard/capthree"
import { Capfour } from "@/assets/Dashboard/capfour"


const CapyArr : Array<{ agencyimage : ReactNode, topic : string, content : string}>=
[{
    agencyimage : Capone,
    topic : "Website Development",
    content : "Crafting tailor-made, responsive, and engaging websites that deliver compelling user experiences and drive business growth."
},
{
    agencyimage : Captwo,
    topic : "Mobile App Development",
    content : "Designing feature-rich, intuitive, and secure mobile apps for iOS and Android platforms that resonate with user needs and expectations."
},
{
    agencyimage : Capthree,
    topic : "Custom Software Development",
    content : "Tailored solutions for desktop, web, and mobile applications to meet unique business needs.."
},
{
    agencyimage : Capfour,
    topic : "Digital Marketing",
    content : "Our Digital Marketing services harness the power of social media, LinkedIn, guerrilla tactics, and influencers to elevate your brand's online presence and engagement."
}]





export default function Capability(){
    return(
        <div className="pt-[100px] flex flex-col justify-center items-center">
          <p className="text-black uppercase text-[15px] md:text-[17px] mb-[15px] font-bold flex mr-[1110px]">CAPABILITIES</p>
          <div className="flex gap-[430px] items-center mb-[100px]">
            <div className="flex items-center">
            <h1 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] max-w-[556px]">
                Cutting-Edge Technologies, 
                Tailor-Made Solutions - Services 
                by VividVista.Tech
            </h1>
            <Image 
              src={dotline}
              alt=""
              className="w-[236px] h-[78px]"
            />
            </div>
            <CommonButton content="ViEW ALL SERVICES" />
          </div>
          <div className="flex gap-[120px] px-[40px] py-[50px]">
            {
                CapyArr.map((item, idx : number)=>(
                    <SubCapability key={idx} image={item.agencyimage} name={item.topic} description={item.content} />
                ))
            }
          </div>
        </div>
    )
}