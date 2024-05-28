"use client";

import data from "@/data/testimonial.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { GoArrowUpRight } from "react-icons/go";

const page = () => {
  const [currentId, setCurrentId] = useState(1);

  const currentTestimony = data.find(item => Number(item.id) === currentId);

  const forwardn = () => {
    setCurrentId(prev => (prev < data.length ? prev + 1 : 1));
  };

  return (
    <div className='flex flex-col gap-[50px] w-full min-w-fit mt-10  md:flex-row-reverse items-center'>
      {/* sign up */}
      <div className='w-full py-[30px] px-3 md:px-10 bg-white rounded-md grid gap-10'>
        <div className='text-center'>
          <h2 className='font-semibold text-[28px] text-gray15 '>Sign Up</h2>
          <p className='font-normal text-gray30'>
            Create an account to unlock exclusive features.
          </p>
        </div>

        <div className='space-y-6 w-full min-w-fit '>
          <form action='' className='flex flex-col gap-5 text-sm w-full'>
            <div className='grid gap-[10px]'>
              <label htmlFor='fname' className='font-medium '>
                Full Name
              </label>
              <input
                required
                type='text'
                name='fname'
                id='fname'
                placeholder='Enter your Name'
                className='bg-secondary border rounded-lg p-5 font-normal '
              />
            </div>

            <div className='grid gap-[10px]'>
              <label htmlFor='email' className='font-medium '>
                Email
              </label>
              <input
                required
                type='email'
                name='email'
                id='email'
                placeholder='Enter your Email'
                className='bg-secondary border rounded-lg p-5 font-normal '
              />
            </div>

            <div className='grid gap-[10px]'>
              <label htmlFor='password' className='font-medium '>
                Password
              </label>
              <input
                required
                type='password'
                name='password'
                id='password'
                placeholder='Enter your Password'
                className=' bg-secondary border rounded-lg p-5 font-normal '
              />
            </div>

            <div className='flex gap-2 items-center text-gray35'>
              <input
                required
                type='checkbox'
                name='agree'
                id='agree'
                className='size-5 checked:bg-primary'
              />
              <label htmlFor='agree'>
                I agree with Terms of Use and Privacy Policy
              </label>
            </div>
            <button
              type='submit'
              className='bg-primary font-medium rounded-md w-full p-4 text-white'
            >
              Sign Up
            </button>
          </form>

          <div className='space-y-6 grid w-full'>
            <hr></hr>
            <button className='flex justify-center w-full items-center gap-2 bg-secondary border rounded-lg p-2 font-normal'>
              <FcGoogle size={24} />
              Sign up with Google
            </button>

            <div className='flex items-center gap-1 justify-center'>
              <span>
                Already have an account?{" "}
                <Link href={"/login"} className='underline'>
                  Login
                </Link>
              </span>
              <GoArrowUpRight size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* testimonial */}
      <div className='grid gap-10 w-full'>
        <div className='flex flex-col gap5 '>
          <h2 className='font-[600] text-[28px] leading-[42px] text-gray15 md:text-[30px]  lg:text-[48px]  '>
            Students Testimonials
          </h2>
          <p className='font-normal text-sm text-gray35 md:text-base lg:text-[18px] lg:leading-[27px] '>
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>

        <div className='space-y-5 flex flex-col items-center md:items-end '>
          <div className='bg-white rounded-lg'>
            <div className='p-[30px] text-justify font-normal text-sm text-gray30 md:text-base md:p-[30px] lg:text-lg lg:p-[30px] '>
              {currentTestimony?.content}{" "}
            </div>
            <div className='flex w-full justify-between p-4 border-t border-white95'>
              <div className='flex items-center gap-[10px] '>
                {currentTestimony?.img && (
                  <Image
                    src={currentTestimony.img}
                    alt={currentTestimony?.name + "image"}
                    width={100}
                    height={100}
                    priority
                    className='size-10 object-cover rounded-md lg:size-[50px] '
                  />
                )}
                <span className='font-semibold text-base text-[#333333] lg:text-lg '>
                  {currentTestimony?.name}
                </span>
              </div>
              <span className='bg-secondary min-w-fit rounded-md text-gray15 py-[14px] px-3 capitalize text-sm font-medium lg:text-lg lg:py-[18px] lg:px-6 '>
                read full story
              </span>
            </div>
          </div>

          <div className='space-x-[10px]'>
            {[<FaArrowLeft />, <FaArrowRight />].map((item, i) => {
              return (
                <button
                  key={i}
                  className='bg-white p-3 rounded-md hover:bg-primary hover:text-white'
                  onClick={() => forwardn()}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
