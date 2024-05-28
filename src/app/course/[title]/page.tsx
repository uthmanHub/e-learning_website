"use client";
import data from "@/data/courses.json";
import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";
import { HiOutlineClock } from "react-icons/hi2";



const page = (title: { params: { title: string } }) => {
  const courseTitle = title.params.title.replaceAll('%20', ' ')
  const course = data.find(item => item.title === courseTitle);
  const router = useRouter()

  return (
    <>
    <div onClick={() => router.back()} className="flex w-fit gap-2 items-center font-bold bg-[#fcfcfc] mt-10 rounded-lg hover:bg-primary hover:text-white p-2">
    <FaArrowLeftLong size={12}/>
    back
    </div>
    <div className='mt-5 flex flex-col w-full gap-10  md:mt-10  md:gap-[60px] lg:gap-[80px]'>
      {/* COURSE INTRO */}
      <div className='flex flex-col w-full gap-5 md:flex-row md:justify-between md:itemscenter md:gap-[60px]'>
        <h2 className='font-semibold text-[28px] leading-[42px] text-gray15 md:text-[38px] md:leading-[57px] lg:text-[48px] lg:leading-[72px] '>
          {course?.title}
        </h2>

        <p className='font-normal md:w-3/5 w-full text-sm text-gray35 md:text-base lg:text-lg lg:leading-[27px] '>
          {course?.content}
        </p>
      </div>

      <div className="grid grid-cols-1 w-full gap-5   md:grid-cols-2 ">
        {
          course?.curriculum.map(({id, title, content},index) => {
            return (
              <div key={index} className="p-[30px] flex flex-col gap-[30px] rounded-lg bg-white md:gap-[40px] md:p-[40px] lg:p-[50px]">
                <span className="self-end font-bold text-[50px] md:text-[60px] lg:text-[80px] ">{id}</span>
                
                <h5 className="font-semibold text-lg text-gray15 md:text-[20px] lg:text-2xl ">{title}</h5>

                <div className="space-y-4">
                  {content.map(({id, topic, length, lessonNo }) => {
                    return (
                      <div key={id} className="flex flex-col gap-5 p-6 md:p-5 md:flex-row md:justify-between bg-[#fcfcfc] border rounded-md ">
                        <div className="space-y-2 ">
                          <p className="font-medium text-base text-gray30 lg:text-[20px]">{topic}</p>
                          <span className="font-normal text-sm lg:text-lg">{lessonNo}</span>
                        </div>

                        <span className="flex items-center font-normal text-sm lg:text-lg min-w-fit gap-2 bg-[#fcfcfc] p-[10px] rounded-md ">
                        <HiOutlineClock />
                        {length}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })
        }
      </div>
      
    </div>
    </>
  );
};

export default page;
