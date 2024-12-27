
interface SubMembersProps {
    numbers : string;
    description : string;
}

export default function SubMembers({numbers, description} : SubMembersProps){
    return(
        <div className="text-white flex flex-col justify-center items-center">
            <h1 className="text-[26px]">{numbers}</h1>
            <p className="text-[16px]">{description}</p>
        </div>
    )
}