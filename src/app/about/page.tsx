import data from "@/data/about.json";
import Image from "next/image";
import "./about.css";
import Link from "next/link";

const page = () => {
  return (
    <div className='mt-10 flex flex-col w-full gap-10  md:mt-20  md:gap-[60px] lg:gap-[80px]'>
      {/* ABOUT INTRODUCTION */}
      <div className='flex flex-col w-full gap-5 md:flex-row md:justify-between md:itemscenter md:gap-[60px]'>
        <h2 className='font-semibold text-[28px] min-w-fit leading-[42px] text-gray15 md:text-[38px] md:leading-[57px] lg:text-[48px] lg:leading-[72px] '>
          About Skillbridge
        </h2>

        <p className='font-normal md:w-3/5 w-full text-sm text-gray35 md:text-base lg:text-lg lg:leading-[27px] '>
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </p>
      </div>

      {/* ACHIEVEMENTS AND GOALS MAPPING */}
      <div className='space-y-[50px] '>
        {data &&
          data.map(({ id, name, intro, achievements }) => {
            return (
              <div key={id} className='space-y-[50px] '>
                {/* text */}
                <div className='w-full'>
                  <h3 className='font-medium text-2xl text-gray15 md:text-[30px] lg:text-[48px]'>
                    {name}
                  </h3>
                  <p className='font-normal mt-2 text-sm text-gray35 md:text-base lg:text-lg'>
                    {intro}
                  </p>
                </div>

                {/* card from achievements*/}
                <div className='grid  gap-5 md:grid-cols-2'>
                  {achievements &&
                    achievements.map(({ id, icon, title, content }) => {
                      return (
                        <div
                          key={id}
                          className='p-[30px] md:p-10 space-y-6 bg-white rounded-md'
                        >
                          <Image
                            src={icon}
                            alt={title}
                            width={100}
                            height={100}
                            className='w-fit h-fit'
                          />
                          <div className='space-y-6'>
                            <h4 className='font-medium text-lg text-gray15 md:text-[20px] lg:text-2xl'>
                              {title}
                            </h4>
                            <p className='font-normal text-sm text-gray30 md:text-base lg:text-lg '>
                              {content}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
      </div>

      {/* FOOT CARD */}
      <div className='flex flex-col p-[30px] gap-10 bg-white w-full md:p-[60px] md:flex-row '>
        <div className='space-y-[10px]'>
          <h5 className='font-semibold text-[28px] text-gray15'>
            <span className='text-primary'>Together</span>, let's shape the
            future of digital innovation
          </h5>
          <p className='font-normal text-sm text-gray30'>
            Join us on this exciting learning journey and unlock your potential
            in design and development.
          </p>
        </div>

        <div className='flex justify-between'>
          <Link href={"/sign-up"}>
            <button className='bg-primary text-white py-[14px] px-5 rounded-md min-w-fit '>
              Join Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
