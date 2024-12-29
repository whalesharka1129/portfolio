import Link from "next/link";

interface SubFooterProps {
    heading : string,
    content : string, 
    contentent : string,
    url : string,
    urlone : string,
}

export default function SubFooter ({heading, content, contentent, url, urlone} : SubFooterProps ){
    return(
        <div className="flex flex-col items-center">
            <h1 className="text-black font-semibold text-[20px] md:text-[22px] mb-[20px]">{heading}</h1>
            <Link className="hover:text-[#008DF1] text-[16px]" href={url}>{content}</Link>   
            <Link className="hover:text-[#008DF1] text-[16px]" href={urlone}>{contentent}</Link>
        </div>
    )
}