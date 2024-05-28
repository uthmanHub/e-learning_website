"use client";

import data from "@/data/pricing.json";
import { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { IoMdCheckmark } from "react-icons/io";
import Link from "next/link";

const Pricing = () => {
  const [mothlyPaymentMode, setMothlyPaymentMode] = useState(true);
  return (
    <>
      <div className='mt-10 flex flex-col w-full gap-10 md:mt-20  md:gap-[60px] lg:gap-[80px]'>
        <div className='flex flex-col items-center gap-5 md:flex-row md:items-end md:justify-between'>
          <div className='w-full gap-1 capitalize'>
            <h2 className='font-[600] text-[28px] leading-[42px] text-gray15 md:text-[38px] md:leading-[57px] lg:text-[48px] lg:leading-[72px] '>
              our pricing
            </h2>
            <p className='font-normal text-sm text-gray35 md:text-base lg:text-[18px] lg:leading-[27px] '>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>

          <div className='min-w-fit py[14px] p-3 font-[500] rounded-md bg-white text-[14px] lg:text-[18px] lg:leading-[27px] '>
            <button
              onClick={() => setMothlyPaymentMode(true)}
              className={`p-3 ${
                mothlyPaymentMode ? "bg-primary text-white" : "text-gray15"
              }  transition-all ease-in duration-300 rounded-md`}
            >
              Monthly
            </button>
            <button
              onClick={() => setMothlyPaymentMode(false)}
              className={`p-3 ${
                mothlyPaymentMode ? "text-gray15" : "bg-primary text-white"
              } transition-all ease-in duration-300  rounded-md`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* //* card */}
        <div className='flex flex-col itemscenter w-full bg-white gap-[30px] p-5 rounded-xl     md:flex-row md:justify-between'>
          {data &&
            data.map(({ id, type, amount, feature }) => {
              return (
                <div
                  key={id}
                  className='py-[30px] px-5 bg-secondary space-y-[30px] text-center w-full rounded-xl '
                >
                  <h3 className='bg-[#FFF9F0] rounded-md font-medium capitalize text-base text-gray15 py-2 px-[22px] border-2 border-orange90 md:text-lg lg:text-[22px] '>
                    {type}
                  </h3>

                  <span className='font-semibold text-gray15 text-[50px] md:text-[60px] lg:text-[80px] '>
                    ${amount}
                    <span className='text-sm text-gray30 md:text-base lg:text-[20px] '>
                      {mothlyPaymentMode ? "/month" : "/year"}
                    </span>{" "}
                  </span>

                  {/*  Feature mapping */}
                  <div className='bg-white rounded-md w-full pt-5 '>
                    <div className='gri d space-y-5 px-5'>
                      <h3 className='font-medium text-lg text-gray15 capitalize lg:text-[20px]'>
                        available features
                      </h3>

                      <div className='flex flex-col text-center w-full gap-5'>
                        {feature &&
                          feature.map(({ id, content }) => {
                            return (
                              <div
                                key={id}
                                className='flex items-start gap-2 w-full border p-3'
                              >
                                {type === "free plan" && id > 5 ? (
                                  <HiMiniXMark
                                    size={24}
                                    className='bg-orange90 p-1 rounded-md'
                                  />
                                ) : (
                                  <IoMdCheckmark
                                    size={24}
                                    className='bg-orange90 p-1 rounded-md'
                                  />
                                )}
                                <span className='font-normal text-sm text-gray30 w-full text-left lg:text-lg'>
                                  {content}
                                </span>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                    <Link href={"/pricing"}>
                      <button className='bg-primary w-full font-semibold text-sm text-white capitalize rounded-b-lg p-3 mt-5 lg:text-lg'>
                        get started
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Pricing;
