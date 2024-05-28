import Benefits from "@/components/Benefits";
import Courses from "@/components/Courses";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import Video from "next-video";
import Image from "next/image";
import { IoIosFlash } from "react-icons/io";
import pic1 from "/public/images/brand/adobe.svg";
import pic2 from "/public/images/brand/amazon.svg";
import pic3 from "/public/images/brand/netflix.svg";
import pic4 from "/public/images/brand/notion.svg";
import pic5 from "/public/images/brand/spotify.svg";
import pic6 from "/public/images/brand/zapier.svg";
import pic7 from "/public/images/brand/zoom.svg";
import spark from "/public/images/sparkLine.svg";
import poster from "/public/images/videoCover.svg";
import introVideo from "/videos/introVideo.mp4";

const page = () => {
  const brand = [
    {
      id: "1",
      link: pic1,
    },
    {
      id: "2",
      link: pic2,
    },
    {
      id: "3",
      link: pic3,
    },
    {
      id: "4",
      link: pic4,
    },
    {
      id: "5",
      link: pic5,
    },
    {
      id: "6",
      link: pic6,
    },
    {
      id: "7",
      link: pic7,
    },
  ];
  return (
    <>
      {/* HERO SECTION */}
      <section className='container space-y-12 mt-10 w-fit mx-auto text-center'>
        <div>
          <div className='relative'>
            <div className=' flex items-center space-x-2 p-[14px] md:py-3 md:px-6 bg-white rounded-md'>
              <IoIosFlash size={48} className='bg-[#FFF4E5] p-3 rounded-md ' />

              <span className='capitalize font-[600] text-base text-center text-gray10 md:text-4xl md:leading-[54px] lg:text-5xl lg:leading-[72px] '>
                <span className='text-primary'>unlock </span>
                your creative potential
              </span>
            </div>
            <Image
              src={spark}
              priority
              alt='spark line'
              className='absolute -top-6 -left-6'
            />
          </div>

          <div className='text-center text-gray15'>
            <h2 className='capitalize font-[500] text-2xl lg:text-[38px] lg:leading-[57px] '>
              with online design and development courses.
            </h2>
            <span className='font-normal text-sm md:text-base lg:text-lg'>
              Learn from industry experts and enhance your skills.
            </span>
          </div>
        </div>

        <div className='capitalize flex gap-3 w-full justify-center'>
          <a
            href='/course'
            className='capitalize p-3 min-w-fit md:py-3 md:px-5 rounded-md bg-primary w-fit text-white'
          >
            explore courses
          </a>
          <a
            href='/pricing'
            className='capitalize bg-white text-gray16 p-3 min-w-fit md:py-3 md:px-5 rounded-md w-fit'
          >
            view pricing
          </a>
        </div>
      </section>

      {/* BRAND SECTION */}
      <section>
        <div className='contianer flex w-full bg-white my-6 rounded-md     lg:my-14       overflow-x-scroll scrollbar-hide'>
          {brand.map(({ id, link }) => {
            return (
              <Image
                key={id}
                src={link}
                priority
                alt='branding image'
                className='w-[112px] lg:w-[250px] border-r-[1px] border-white95 last:border-none '
              />
            );
          })}
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section>
        <div className='bg-white w-4/5 aspect-video mx-auto'>
          <Video
            src={introVideo}
            poster={poster}
            className='w-full aspect-video'
            accentColor='#FF9500'
          ></Video>
        </div>
      </section>

      {/* BENEFIT SECTION */}
      <section id='benefit'>
        <Benefits />
      </section>

      {/* COURSES SECTION */}
      <section id='course'>
        <Courses />
      </section>

      {/* TESTIMONIAL SECTION */}
      <section id='testimonial'>
        <Testimonial />
      </section>

      {/* PRICING SECTION */}
      <section>
        <Pricing />
      </section>

      {/* FAQ SECTION */}
      <section id='faq'>
        <FAQ />
      </section>
    </>
  );
};

export default page;
