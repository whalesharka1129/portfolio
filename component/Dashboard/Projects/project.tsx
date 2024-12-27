import successone from "@/assets/Dashboard/success-stories14.jpg";
import CommonButton from "@/component/Navbar/button";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="py-[50px] flex flex-col justify-center items-center ">
      <p className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] mb-[40px] max-w-[550px] mr-[750px]">
        Our successful works and projects from other company
      </p>
      <div className="flex flex-col items-center gap-[20px]">
        <div className="flex items-center gap-[20px]">
          <Image
            src={successone}
            alt=""
            className="w-[180.34px] h-[350px] rounded-md object-cover"
          />
          <div className="flex flex-col justify-around gap-[30px]">
            <p className="uppercase text-[#008DF1] text-[16px] font-semibold">
              11 Tenth Racecraft
            </p>
            <p className="font-semibold text-[18px] text-[#1E1F4B] max-w-[1090px]">
              The project involved the development and management of the
              11Tenths Racecraft website, an acclaimed Canadian motorsport
              parts, and service provider specializing in high-performance
              products for racing and track enthusiasts.
            </p>
            <p className="text-[#1E1F4B] font-light text-[14px] ">
              Automotive Industry
            </p>
            <CommonButton content="VIEW WORK" />
          </div>
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="flex flex-col justify-around gap-[30px]">
            <p className="uppercase text-[#008DF1] text-[16px] font-semibold">
              Trainer Friendt
            </p>
            <p className="font-semibold text-[18px] text-[#1E1F4B] max-w-[1090px]">
              Fulfilling its mission to make fitness accessible and
              personalized, TrainerFriend.com allows users to explore and choose
              trainers based on multiple parameters such as geographic location,
              availability, ratings, reviews, and specializations.
            </p>
            <p className="text-[#1E1F4B] font-light text-[14px] ">
              Fitness and Training
            </p>
            <CommonButton content="VIEW WORK" />
          </div>
          {/* <video width="320" height="240" controls preload="none">
            <source src="/images/success-stories2.mp4" type="mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video> */}
        </div>        
      </div>
      <div className="border-b-[1px] border-[gray] opacity-[100%]"></div>
    </div>
  );
}
