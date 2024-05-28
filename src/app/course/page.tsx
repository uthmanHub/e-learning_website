"use client";

import data from "@/data/courses.json";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className='mt-10 flex flex-col w-full gap-10  md:mt-20  md:gap-[60px] lg:gap-[80px]'>
        {/* COURSE INTRO */}
        <div className='flex flex-col w-full gap-5 md:flex-row md:justify-between md:itemscenter md:gap-[60px]'>
          <h2 className='font-semibold text-[28px] leading-[42px] text-gray15 md:text-[38px] md:leading-[57px] lg:text-[48px] lg:leading-[72px] '>
            Online Courses on Design and Development
          </h2>

          <p className='font-normal md:w-3/5 w-full text-sm text-gray35 md:text-base lg:text-lg lg:leading-[27px] '>
            Welcome to our online course page, where you can enhance your skills
            in design and development. Choose from our carefully curated
            selection of 10 courses designed to provide you with comprehensive
            knowledge and practical experience. Explore the courses below and
            find the perfect fit for your learning journey.
          </p>
        </div>

        {/* COURSE MAPPING */}
        <div className='space-y-5 '>
          {data &&
            data.map(
              ({
                id,
                title,
                content,
                courseBanner,
                images,
                author,
                level,
                duration,
                curriculum,
              }) => {
                return (
                  <div key={id} className='bg-white rounded-lg'>
                    <div className='flex flex-col gap-5 p-6 md:flex-row md:items-center md:p-10 '>
                      <div className='w-full gap-1 capitalize'>
                        <h2 className='font-[600] text-[28px] leading-[42px] text-gray15 md:text-[38px] md:leading-[57px] lg:text-[48px] lg:leading-[72px] '>
                          {title}
                        </h2>
                        <p className='font-normal text-sm text-gray35 md:text-base lg:text-[18px] lg:leading-[27px] '>
                          {content}
                        </p>
                      </div>
                      <Link
                        href={`/course/${title}`}
                        className='size-fit py-[14px] px-5 font-[500] min-w-fit rounded-md border  bg-secondary text-gray15 text-[14px] lg:text-[18px] lg:leading-[27px] '
                      >
                        View Course
                      </Link>
                    </div>

                    {/* COURSE CONTENT */}
                    <div className='flex flex-col gap-6  p-6 rounded-lg max-w-full'>
                      {/* COURSE IMAGE */}
                      <div className='grid grid-cols-3 gap-2 w-full max-w-full md:gap-4'>
                        {images.map(imgSrc => {
                          return (
                            <Image
                              key={imgSrc}
                              src={imgSrc}
                              alt={title}
                              width={100}
                              height={100}
                              priority
                              className='w-full h-full object-cover'
                            />
                          );
                        })}
                      </div>

                      <div className='flex flex-col gap-10  '>
                        {/* COURSE DURATION AND AUTHOR*/}
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

                        {/* COURSE CURRICULUM */}
                        <div className=' flex flex-col border rounded-md'>
                          <span className='border-b py-[14px] px-5 font-semibold text-base '>
                            Curriculum
                          </span>
                          <div className='flex flex-col p-6 w-full    md:flex-row'>
                            {curriculum.map(({ id, title }, index) => {
                              return (
                                <div
                                  key={index}
                                  className='flex flex-col py-5 border-b  md:border-b-0 md:border-r md:px-5 md:py-0 first:pt-0 last:border-none last:pb-0   md:first:pl-0  md:last:pr-0'
                                >
                                  <span className='font-extrabold text-[30px] '>
                                    {id}
                                  </span>
                                  <span className='font-normal text-sm'>
                                    {title}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </>
  );
};

export default page;
