import CommonButton from "@/component/Navbar/button";

export default function LeftLanding(){
    return(
        <div className="max-w-[610px] w-full mx-auto flex justify-center flex-col grow px-[64px] sm:px-[16px] slide-in-bottom">
            <h1 className="text-[#1E1F4B] text-[20px] md:text-[20px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] 
            leading-[20px] md:leading-[30px] lg:leading-[40px] xl:leading-[50px] 2xl:leading-[60px] 
            font-bold mb-[20px] sm:mb-[30px] mt-[12px] inline w-618 sm:w-auto aos-init aos-animate">Explore the Digital
            Universe with <span className="text-[#008DF1]">VividVista</span>
            </h1>
            <p className="text-[16px] md:text-[16px] font-medium mb-[30px] w-508 text-[#2E3E5C] aos-init aos-animate">Help find solutions with intitutive and in accordance with client
            business goals. we provide a high-quality services.</p>
            <CommonButton content="Let's Talk" />
        </div>
    )
}