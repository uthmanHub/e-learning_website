import data from "@/data/testimonial.json";
import Image from "next/image";

const Testimonial = () => {
  return (
    <>
      <div className='mt-10 flex flex-col w-full gap-10 md:mt-20 md:gap-[60px] lg:gap-[80px]'>
        {/* TEXT INTRO */}
        <div className='flex flex-col gap-5 md:flex-row md:items-end'>
          <div className='w-full gap-1 capitalize'>
            <h2 className='font-[600] text-[28px] leading-[42px] text-gray15 md:text-[38px] md:leading-[57px] lg:text-[48px] lg:leading-[72px]'>
              Our Testimonials
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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {data &&
            data.map(({ id, name, img, content }) => {
              return (
                <div key={id} className='bg-white rounded-lg'>
                  <div className='p-[30px] text-justify font-normal text-sm text-gray30 md:text-base md:p-[40px] lg:text-lg lg:p-[50px] '>
                    {content}{" "}
                  </div>
                  <div className='flex w-full justify-between px-4 py-5 border-t border-white95'>
                    <div className='flex items-center gap-[10px] '>
                      <Image
                        src={img}
                        alt={name + "image"}
                        priority
                        width={100}
                        height={100}
                        className='size-10 object-cover rounded-md lg:size-[50px] '
                      />
                      <span className='font-semibold text-base text-[#333333] lg:text-lg '>
                        {name}
                      </span>
                    </div>
                    <span className='bg-secondary rounded-md text-gray15 py-[14px] px-3 capitalize text-sm font-medium lg:text-lg lg:py-[18px] lg:px-6 '>
                      read full story
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Testimonial;
