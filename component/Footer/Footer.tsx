import logofoot from "@/assets/Dashboard/logo.03d73689.svg"
import Image from "next/image"
import insta from "@/assets/Dashboard/Instagram.8982e0fb.svg"
import yutube from "@/assets/Dashboard/YouTube.5f8916ff.svg"
import LinkedIn from "@/assets/Dashboard/LinkedIn.1b3534d9.svg"
import facebook from "@/assets/Dashboard/Facebook.db28d389.svg"
import Twitter from "@/assets/Dashboard/Twitter.0858832c.svg"
import SubSite from "./SubSite"
import SubFooter from "./subFooter"

const SiteArry : string [] = [
    yutube,
    LinkedIn,
    insta,
    facebook,
    Twitter,
]

const SubFooterArr : Array<{ heading : string, content : string, contentent : string, url : string, urlone : string,}> = [
  {
    heading : "About Us",
    content : "Meet Our Team",
    contentent : "Success Stories",
    url : "https://www.vividvista.tech/about-us",
    urlone : "https://www.vividvista.tech/success-stories"
  },
  {
    heading : "Services & Plans",
    content : "Services",
    contentent : "Pricing Plans",
    url : "https://www.vividvista.tech/serices",
    urlone : "https://www.vividvista.tech/pricing-plans"
  },
  {
    heading : "Discover & Connect",
    content : "Blogs",
    contentent : "Contact Us",
    url : "https://www.vividvista.tech/blog",
    urlone : "https://www.vividvista.tech/contact-us"
  }
]


export default function Footer (){
    return(
        <div>
        <div className="flex justify-center items-start p-[30px]">
            <div className="flex flex-col justify-center items-center w-[300px] mr-[160px]">
               <Image 
                src={logofoot}
                alt=""
                className="w-[170px] h-[23.4px]"
               />
               <p className=" text-[14px] font-medium text-[#1E1F4B] text-center">Cutting-Edge Technologies,<br></br> Tailor-Made Solutions - Services by VividVista.Tech</p>
               <div className="flex">
               {
                SiteArry.map((item, idk : number)=>(
                   <SubSite key={idk} site={item} /> 
                ))
               }
               </div>
            </div>
            <div className="flex gap-[80px]">
               {
                SubFooterArr.map((item, idx:number)=>(
                    <SubFooter key={idx} {...item} />
                ))
               }
            </div>
        </div>
         <div className="p-[32px] flex flex-col justify-center items-center">
            <hr className="w-[1320px]"></hr>
            <div className="pt-[32px] text-[14px]">
                <p>Copyright © 2024 VividVista | All Rights Reserved |
                    <span className="underline">Terms and Conditions |</span>
                    <span className="underline">Privacy Policy</span>
                </p>

            </div>
         </div>
        </div>
    )
}