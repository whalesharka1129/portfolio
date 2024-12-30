'use client'
import { useState, useEffect } from "react";
import LeftLanding from "./Landing-left";
import AlignRight from "@/assets/Dashboard/LandingRight.jpg";
import Image from "next/image";

export default function Landing() {

  return (
    <div className="flex w-full mx-auto max-w-[1350px] trans">
      <LeftLanding />
        <Image
          src={AlignRight}
          alt=""
          width={540}
          height={540}
          className="slide-in-bottom-landing rounded-full mt-[30px] mr-[64px]"
        />
    </div>
  );
}
