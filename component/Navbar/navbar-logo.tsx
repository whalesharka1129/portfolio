import Image from "next/image";
import AlignRight from '@/assets/Dashboard/logo.03d73689.svg'

export default function Logo() {
  return (
    <div>
      <Image src={AlignRight} alt="" width={170} height={100}/>
    </div>
  );
}
