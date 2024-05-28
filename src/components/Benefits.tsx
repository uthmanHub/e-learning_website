import data from "@/data/Benefit.json";
import { MdArrowOutward } from "react-icons/md";

const Benefits = () => {
  return (
    <>
      <div className='mt-10 flex flex-col w-full gap-10 md:mt-20 md:gap-[60px] lg:gap-[80px]'>
        {/* TEXT INTRO */}
        <div className='flex flex-col gap-5 md:flex-row md:items-end'>
          <div className='w-full gap-1 capitalize'>
            <h2 className='font-[600] text-[28px] leading-[42px] text-gray15 md:text-[38px] md:leading-[57px] lg:text-[48px] lg:leading-[72px]'>
              our benefit
            </h2>
            <p className='font-normal text-sm text-gray35 md:text-base lg:text-[18px] lg:leading-[27px]'>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>

          <button className='size-fit py-[14px] px-5 font-[500] rounded-md bg-white text-gray15 text-[14px] lg:text-[18px] lg:leading-[27px]'>
            View
          </button>
        </div>

        {/* CARD MAPPING */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          {data &&
            data.map(({ id, title, content }, index) => {
              return (
                <div
                  key={index}
                  className='grid gap-10 p-[30px] bg-white rounded-[10px]'
                >
                  <span className='font-bold text-[50px] mt-4 leading-6 text-right md:text-[60px] md:leading-[24px] lg:text-[80px] lg:leading-[24px]'>
                    {id}
                  </span>
                  <div className='grid gap-[10px] '>
                    <span className='font-semibold text-[20px] tracking-tighter text-[#333333] md:text-[20px] md:leading-[30px] lg:text-2xl'>
                      {title}
                    </span>
                    <p className='font-normal text-sm text-gray30 md:text-base lg:text-[18px] lg:leading-[27px]'>
                      {content}
                    </p>
                  </div>

                  <div className='flex justify-end'>
                    <MdArrowOutward
                      size={48}
                      className='p-[14px] rounded-md bg-white95 text-primary lg:p- 5 lg:size-[57px]'
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Benefits;
