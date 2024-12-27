import Agency from "@/component/Dashboard/Agency/agency";
import Brand from "@/component/Dashboard/Brands/Brands";
import Capability from "@/component/Dashboard/Capabilities/Capabilities";
import Landing from "@/component/Dashboard/Landing/Landing";
import Members from "@/component/Dashboard/members/members";
import Process from "@/component/Dashboard/Process/process";
import Projects from "@/component/Dashboard/Projects/project";

export default function Dashboard(){
    return(
        <div>
            <Landing />
            <Brand />
            <Agency />
            <Members />
            <Capability />
            <Process />
            <Projects />
        </div>
    )
}