import Yokohama from "@/assets/Dashboard/yokohamalogo_white.58fbe11b.svg";
import ADORE from "@/assets/Dashboard/ab-logo.63cbfef8.webp";
import Zoku from "@/assets/Dashboard/zoku-logo.23c5cc72.svg";
import CBFX from "@/assets/Dashboard/CBFX_logo_gradient.168fc96c.svg";
import Tenth from "@/assets/Dashboard/11tenth.b3d92c6c.svg";
import Private from "@/assets/Dashboard/privatemarklaren.7a4dd7c0.svg";
import SubBrand from "./SubBrand";
const ImageArr: string[] = [
    Yokohama,
    ADORE,
    Zoku,
    CBFX,
    Private,
    Tenth,
];

export default function Brand() {
  return (
    <div className="px-[30px] sm:px-[100px] py-[24px] bg-[#008DF1] mt-[20px]">
      <p className="text-white text-center text-[16px] mb-[20px] mt-[8px]">
        Brands we serve 
      </p>
      <div className=" flex justify-center items-center max-w-[1350px] mx-auto gap-[35px]">
        {
        ImageArr.map((item, idx: number) => (
          <SubBrand key={idx} image={item} />
        ))
        }
      </div>
    </div>
  );
}
