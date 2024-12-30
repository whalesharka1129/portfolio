'use client'
import { useState, useEffect } from "react";
import CommonButton from "./button";
import Content from "./navbar-content";
import Logo from "./navbar-logo";

export default function Navbar() {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get the current scroll position
      setSticky(scrollPosition > 0); // Set sticky if scrolled down
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll); // Add scroll event listener
      return () => {
          window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
      };
  }, []);

  return (
      <div className={`navbar flex justify-center items-center px-[15px] py-[32px] ${isSticky ? 'navbar-fixed-to' : ''}`}>
          <Logo />
          <div className="mx-[198px]">
              <Content />
          </div>
          <CommonButton content="ASK US ANYTHING" />
      </div>
  );
}