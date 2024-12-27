import CommonButton from "./button";
import Content from "./navbar-content";
import Logo from "./navbar-logo";


export default function Navbar (){
    return(
        <div className="flex justify-between items-center px-[15px] py-[198px] mx-auto ">
            <Logo />
            <div className="mx-[198px]">
            <Content />
            </div>
            <CommonButton content="ASK US ANYTHING"/>
        </div>
    )
}