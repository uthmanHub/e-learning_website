import Image from "next/image";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import logo from "/public/images/Logo.svg";

const Footer = () => {
  return (
    <div className='px-5 pt-[50px] bg-white mt-20 rounded-lg lg:px-10 '>
      <div className='flex flex-col mb-5 gap-5 justify-between items-center w-full md:flex-row md:justify-between'>
        <div className='grid gap-[30px] w-full'>
          <Image
            src={logo}
            alt='company logo'
            priority
            width={100}
            height={100}
            className='size-10 '
          />

          <div className='grid gap-3'>
            {[
              {
                name: "uthmancod@gmail.com",
                icon: <AiOutlineMail size={24} />,
              },
              {
                name: "2348155342562",
                icon: <AiFillPhone size={24} />,
              },
              {
                name: "Lugbe, Abuja, Nigeria",
                icon: <HiLocationMarker size={24} />,
              },
            ].map(({ name, icon }, index) => {
              return (
                <div key={index} className='flex items-center gap-2'>
                  <span>{icon}</span>
                  <span>{name} </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className='flex flex-col gap-6 md:flex-row md:justify-between md:gap-[40px] w-full'>
          <div className='flex justify-between w-3/5  gap-5 md:gap-[30px] '>
            <div className='grid gap-2'>
              <span className='font-semibold text-lg'>Home</span>
              <a href='/#benefit' className='hover:underline'>
                Benefit
              </a>
              <a href='/#course' className='hover:underline'>
                Our Courses
              </a>
              <a href='/#testimonial' className='hover:underline'>
                Our Testimonials
              </a>
              <a href='/#faq' className='hover:underline'>
                Our FAQ
              </a>
            </div>
            <div className='grid gap-2 '>
              <span className='font-semibold text-lg'>About Us</span>
              <a href='/about/#company' className='hover:underline'>
                Company
              </a>
              <a href='/about/#achievement' className='hover:underline'>
                Achievement
              </a>
              <a href='/about/#Goals' className='hover:underline'>
                Our Goals
              </a>
              <span>&nbsp;</span>
            </div>
          </div>

          <div className='space-y-2 w-fit'>
            <span className='font-semibold text-lg'>Social Profiles</span>
            <div className='flex gap-3'>
              {[
                {
                  link: "facebook.com",
                  icon: <AiFillFacebook size={24} />,
                },
                {
                  link: "twitter.com",
                  icon: <AiOutlineTwitter size={24} />,
                },
                {
                  link: "linkedin.com",
                  icon: <AiFillLinkedin size={24} />,
                },
              ].map(({ link, icon }) => {
                return (
                  <div
                    key={link}
                    className='p-[14px] hover:bg-primary hover:text-white bg-secondary rounded-md'
                  >
                    <a
                      href={`http://www.${link}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {icon}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <p className='pb-6 pt-5 w-full text-center lg:pt-[50px] lg:pb-[30px] '>
        &copy; {new Date().getFullYear()} uthmancod. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
