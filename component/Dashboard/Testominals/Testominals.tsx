import userone from "@/assets/Dashboard/user2.769167df.png"
import usertwo from "@/assets/Dashboard/user3.4d15dbae.png"

const PersonalArr : Array<{ image : StaticImageData, description : string, Name: string, role: string }>=[
    {
       description:"VividVista.Tech took the time to understand our needs, worked closely with us on a strategy, and delivered beyond our expectations. The end product was seamless, user-friendly, and absolutely stunning. You'd be hard-pressed to find a better team to entrust your tech needs to.",
       Name:"Samantha Lee",
       role:"Founder, Articulate Galleries",
       image: userone
    },
    {
       description : "Working with VividVista.Tech has been a game-changer for us. Within months, they revolutionized our tech solutions, greatly improving our efficiency and productivity. Their team is composed of genuine problem solvers and innovative thinkers. They're not just a vendor; they're truly a partner in our success",
       Name : "Juan Martinez",
       role : "Director of Operations, NexTech Solutions",
       image : usertwo
    }
]


export default function Testimonials (){
    return(
        <div className="py-[100px]">
           <div className="flex flex-col justify-center items-center mr-[800px]">
           <p className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px] mr-[350px]">Testimonials</p>
           <h1 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] max-w-[475px] mb-[20px] md:mb-[30px] md:lg-[40px]">We help to achieve customers business goals</h1>
           </div>
        </div>
    )
}