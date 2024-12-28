import Image from "next/image";

interface SubSiteProps {
    site : string;
}

export default function SubSite({site} : SubSiteProps){
 return(
    <div>
        <Image
          src={site}
          alt=""
          className="w-[32px] h-[32px]"
        />
    </div>
 )
}