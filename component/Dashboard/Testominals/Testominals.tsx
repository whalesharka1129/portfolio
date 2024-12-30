"use client";

import userone from "@/assets/Dashboard/user2.769167df.png";
import usertwo from "@/assets/Dashboard/user3.4d15dbae.png";
import userthree from "@/assets/Dashboard/user1.4b3f50f4.png";
import { useState } from "react";
import SubTestimonial from "./SubTestimonial";
import { StaticImageData } from "next/image";

const PersonalArr: Array<{
  image: StaticImageData;
  description: string;
  Name: string;
  role: string;
}> = [
  {
    description:
      "VividVista.Tech took the time to understand our needs, worked closely with us on a strategy, and delivered beyond our expectations. The end product was seamless, user-friendly, and absolutely stunning. You'd be hard-pressed to find a better team to entrust your tech needs to.",
    Name: "Samantha Lee",
    role: "Founder, Articulate Galleries",
    image: usertwo,
  },
  {
    description:
      "Working with VividVista.Tech has been a game-changer for us. Within months, they revolutionized our tech solutions, greatly improving our efficiency and productivity. Their team is composed of genuine problem solvers and innovative thinkers. They're not just a vendor; they're truly a partner in our success",
    Name: "Juan Martinez",
    role: "Director of Operations, NexTech Solutions",
    image: userone,
  },
  {
    description:
      "Choosing VividVista.Tech was the best decision we've made for our business. Their innovative solutions transformed our digital presence, opening doors to new opportunities. We appreciate their dedication, creativity and the excellent customer service provided",
    Name: "Alexandra West",
    role: "CEO, SoftCorp Inc",
    image: userthree,
  },
];

export default function Testimonials() {
  const [isState, setState] = useState(0);

  const ChangeUpward = () => {
    setState((prevState) => {
      if (prevState >= 2) {
        return 0; // Reset to 0 if it's greater than or equal to 2
      }
      return prevState + 1; // Increment state
    });
  };

  const ChangeDownward = () => {
    setState((prevState) => {
      if (prevState <= 0) {
        return 2; // Reset to 2 if it's less than or equal to 0
      }
      return prevState - 1; // Decrement state
    });
  };
  return (
    <div className="py-[100px]">
      <div className="flex flex-col justify-center items-center mr-[800px]">
        <p className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px] mr-[350px]">
          Testimonials
        </p>
        <h1 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] max-w-[475px] mb-[20px] md:mb-[30px] md:lg-[40px]">
          We help to achieve customers business goals
        </h1>
      </div>
       <SubTestimonial {...PersonalArr[isState]} />
      <div className="flex justify-center items-center ml-[1150px]">
        <button className="text-[27px] opacity-50" onClick={ChangeUpward}>
          &lt;
        </button>
        <button className="text-[27px] opacity-50" onClick={ChangeDownward}>
          &gt;
        </button>
      </div>
    </div>
  );
}
