import Image from "next/image";

interface BrandProps {
  image: string; // Expecting a string for the button text
}

export default function SubBrand({ image }: BrandProps) {
  return (
    <div className="flex justify-center items-center w-[170px]">
      <Image src={image} alt="" />
    </div>
  );
}
