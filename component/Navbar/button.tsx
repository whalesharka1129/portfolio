import Link from "next/link";

interface CommonButtonProps {
    content: string; // Expecting a string for the button text
}
export default function CommonButton({content}: CommonButtonProps) {
  return (
    <div>
      <Link href="/contact-us" passHref>
        <button className="bg-[#008DF1] text-white text-[14px] py-[15px] px-[30px] rounded-[100px]">
          {content}
        </button>
      </Link>
    </div>
  );
}
