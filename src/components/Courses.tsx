import data from "@/data/courses.json";
import Image from "next/image";

const Courses = () => {
  return (
    <>
      <div className='mt-10 flex flex-col w-full gap-10 md:mt-20  md:gap-[60px] lg:gap-[80px]'>
        {/* TEXT INTRO */}
        <div className='flex flex-col gap-5 md:flex-row md:items-end'>
          <div className='w-full gap-1 capitalize'>
            <h2 className='font-[600] text-[28px] leading-[42px] text-gray15 md:text-[38px] md:leading-[57px] lg:text-[48px] lg:leading-[72px] '>
              our courses
            </h2>
            <p className='font-normal text-sm text-gray35 md:text-base lg:text-[18px] lg:leading-[27px] '>
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>
          </div>
          <button className='size-fit py-[14px] px-5 font-[500] rounded-md bg-white text-gray15 text-[14px] lg:text-[18px] lg:leading-[27px] '>
            View
          </button>
        </div>

        {/* <CARD MAPPING /> */}
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-[30px] '>
          {data &&
            data.map(
              ({
                id,
                duration,
                level,
                author,
                title,
                content,
                courseBanner,
              }) => {
                return (
                  <div
                    key={id}
                    className='flex flex-col gap-6 bg-white p-6 rounded-lg'
                  >
                    <Image
                      src={courseBanner}
                      priority
                      alt={title}
                      width={100}
                      height={100}
                      className='w-full h-full'
                    />
                    {/**/}

                    <div className='flex flex-col gap-6'>
                      <div className='flex flex-col  gap-[14px]  md:flex-row md:justify-between md:items-center'>
                        <div className='flex gap-[10px] justify-start font-normal text-sm text-gray30 lg:text-lg '>
                          <span className='py-2 px-[14px] border rounded-md '>
                            {duration}
                          </span>
                          <span className='py-2 px-[14px] border rounded-md '>
                            {level}
                          </span>
                        </div>
                        <h4 className='text-gray15 font-medium text-base lg:text-[20px] '>
                          {author}
                        </h4>
                      </div>
                      {/* text */}
                      <div className='space-y-[10px]'>
                        <h2 className='font-semibold text-gray15 text-[20px] lg:text-2xl'>
                          {title}
                        </h2>
                        <p className='font-normal text-sm text-gray30 md:text-base lg:text-lg'>
                          {content}
                        </p>
                      </div>
                    </div>

                    <button className='mt-auto capitalize w-full rounded-md px-6 py-[14px] bg-white95 text-gray15 font-medium text-sm lg:text-lg '>
                      get it now
                    </button>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </>
  );
};

export default Courses;
