"use client";

import data from "@/data/faq.json";
import { useState } from "react";

const FAQ = () => {
  const [selected, setSelected] = useState(null);
  function showAccordion(id: any) {
    return selected === id ? setSelected(null) : setSelected(id);
  }
  return (
    <div className='mt-10 flex flex-col w-full gap-10 bg-white p-6 rounded-xl md:flex-row md:mt-20 md:p-[80px] md:gap-[50px]'>
      {/* TEXT INTRO */}
      <div className='flex flex-col gap-5 md:flexrow md:items-start'>
        <div className='w-full gap-1 capitalize'>
          <h2 className='font-[600] text-[28px] leading-[42px] text-gray15 md:text-[38px] md:leading-[57px] lg:text-[48px] lg:leading-[72px]'>
            Frequently Asked Questions
          </h2>
          <p className='font-normal text-sm text-gray35 md:text-base lg:text-[18px] lg:leading-[27px]'>
            Still you have any questions? Contact our Team via
            uthmancod@gmail.com
          </p>
        </div>
        <button className='size-fit py-[14px] px-5 font-[500] border rounded-md bg-white text-gray15 text-[14px] lg:text-[18px] lg:leading-[27px]'>
          See All FAQ's
        </button>
      </div>

      {/* <CARD MAPPING /> */}
      <div>
        <div className='grid gap-5 rounded-md'>
          {data && data.length > 0 ? (
            data.map(item => (
              <div key={item.id} className='flex flex-col border rounded-md transition-all ease-in duration-200'>
                <div
                  onClick={() => {
                    showAccordion(item.id);
                  }}
                  className='flex items-center justify-between cursor-pointer gap-[30px] p-6'
                >
                  <h2 className='font-medium text-base text-gray15 md:text-lg lg:text-[20px]'>
                    {item.question}{" "}
                  </h2>
                  <span className='p-2 bg-orange90 rounded-md text-gray15 font-medium'>
                    {selected !== item.id ? "+" : "x"}
                  </span>
                </div>
                {selected === item.id ? (
                  <div>
                    <hr className='mx-6' />
                    <p className='p-6 text-sm font-normal text-gray30 md:text-base lg:text-lg'>
                      {item.answer}
                    </p>
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <span> Sorry, No data found</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
