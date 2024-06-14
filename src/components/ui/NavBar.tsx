"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "/public/images/Logo.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (!event.target.matches(".dropbtn")) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Courses",
      link: "/course",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <>
      <header>
        <nav className='flex justify-between items-center mt-5 w-full'>
          <div className='flex gap-[50px] justify-between items-center'>
            <Link href={"/"}>
              <Image
                src={logo}
                alt='company logo'
                priority
                width={100}
                height={100}
                className='size-10 '
              />
            </Link>

            <div className='hidden space-x-3 font-normal text-sm text-gray15 wfull md:block lg:text-lg'>
              {navItems.map(({ name, link }, i) => {
                return (
                  <a
                    key={i}
                    href={link}
                    className={`${
                      pathname === link ? "bg-white rounded-lg text-gray15" : ""
                    } hover:bg-primary hover:text-white transition-colors ease-out duration-200  py-[14px] px-3 rounded-lg`}
                  >
                    {name}
                  </a>
                );
              })}
            </div>
          </div>

          {/* ////////////? */}

          <div className='flex gap-5 justify-end items-center font-normal text-sm text-gray15  md:gap-[30px] lg:text-lg '>
            <Link href={"/sign-up"}>Sign Up</Link>
            <Link
              href={"/login"}
              className='bg-primary py-3 px-6 text-white rounded-lg  hover:bg-primary hover:text-white '
            >
              Login
            </Link>

            {/* mobile */}
            <div className='md:hidden'>
              <div className='inline-block relative'>
                <AiOutlineMenu
                  size={24}
                  className={`${showDropdown ? "hidden" : ""} dropbtn`}
                  onClick={() => setShowDropdown(!showDropdown)}
                />
                <AiOutlineClose
                  size={24}
                  className={`${showDropdown ? "" : "hidden"} dropbtn`}
                  onClick={() => setShowDropdown(!showDropdown)}
                />
                <div
                  className={`absolute -right-2 top-[51px] z-50 hfit text-center p-4 w-[170px] bg-white rounded-lg  ${
                    showDropdown ? "block" : "hidden"
                  }`}
                >
                  {/* list all the links in a single column */}
                  <ul className='flex flex-col gap-3 wfull'>
                    {navItems.map(({ name, link }) => {
                      return (
                        <Link
                          key={name}
                          href={link}
                          className='bg-orange90 rounded-md px-4 py-2 text-black ease-in duration-200'
                        >
                          <li className='w-full'>{name}</li>
                        </Link>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
