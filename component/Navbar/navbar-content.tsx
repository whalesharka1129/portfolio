import Link from "next/link";


export default function Content(){
    return(
        <div>
           <Link className="text-[14px] text-[#008DF1] hover: xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group last:mr-0 first:ml-0 font-bold" href="https://www.vividvista.tech/">
              HOME
           </Link>
           <Link className="text-[14px] hover:text-[#008DF1] xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group last:mr-0 first:ml-0 font-bold" href="https://www.vividvista.tech/about-us">
              ABOUT US
           </Link>
           <Link className="text-[14px] hover:text-[#008DF1] xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group last:mr-0 first:ml-0  font-bold" href="https://www.vividvista.tech/services">
              SERVICES 
           </Link>
           <Link className="text-[14px] hover:text-[#008DF1] xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group last:mr-0 first:ml-0 font-bold" href="https://www.vividvista.tech/success-stories">
              PORTFOLIO
           </Link>
           <Link className="text-[14px] hover:text-[#008DF1] xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group last:mr-0 first:ml-0 font-bold" href="https://www.vividvista.tech/blog">
              BLOG
           </Link>
           <Link className="text-[14px] hover:text-[#008DF1] xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group last:mr-0 first:ml-0 font-bold" href="https://www.vividvista.tech/contact-us">
              CONTACT US
           </Link>
        </div>
    )
}