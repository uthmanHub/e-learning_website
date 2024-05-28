import React from "react";
import { AiFillFacebook, AiFillLinkedin, AiFillMail, AiFillPhone, AiOutlineTwitter } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

const page = () => {
  return (
    <div className='mt-10 flex flex-col w-full gap-10 md:mt-20  md:gap-[60px] lg:gap-[80px]'>
      <div className='flex flex-col items-center gap-5 md:flexrow md:itemsend md:justifybetween md:gap-[70px] '>
        <div className='flex flex-col w-full gap-5 md:flex-row md:justify-between md:gap-10 items-center lg:gap-[70px]'>
          <h2 className='font-semibold text-[28px] min-w-fit w-full leading-[42px] text-gray15 md:text-[38px] md:leading-[57px] lg:text-[48px] lg:leading-[72px] '>
            Contact Us
          </h2>

          <p className='font-normal md:w2/3 w-full text-sm text-gray35 md:text-base lg:text-lg lg:leading-[27px] '>
            Welcome to SkillBridge's Pricing Plan page, where we offer two
            comprehensive options to cater to your needs: Free and Pro. We
            believe in providing flexible and affordable pricing options for our
            services. Whether you're an individual looking to enhance your
            skills or a business seeking professional development solutions, we
            have a plan that suits you. Explore our pricing options below and
            choose the one that best fits your requirements.
          </p>
        </div>
      </div>

      {/* CARDS */}
      <div className='flex flex-col w-full bg-white gap-[30px] rounded-xl md:gap-0 md:flex-row-reverse md:p[60px] md:justify-between'>
        
        {/* SOCIALS CARD */}
        <div className="w-full grid gap-5 md:w-1/3 p-5 md:p-[30px] mr-5">
          <div className="flex flex-col font-normal text-sm  md:text-base lg:text-lg items-center gap-3 p-[30px] bg-[#fcfcfc] border rounded-lg ">
            <AiFillMail size={48} className='p-[14px] hover:bg-primary hover:text-white bg-secondary rounded-md'/>
            <p>uthmancod@gmail.com</p>
          </div>
          <div className="flex flex-col font-normal text-sm  md:text-base lg:text-lg items-center gap-3 p-[30px] bg-[#fcfcfc] border rounded-lg ">
            <AiFillPhone size={48} className='p-[14px] hover:bg-primary hover:text-white bg-secondary rounded-md'/>
            <p>08155342562</p>
          </div>
          <div className="flex flex-col font-normal text-sm  md:text-base lg:text-lg items-center gap-3 p-[30px] bg-[#fcfcfc] border rounded-lg ">
            <HiLocationMarker size={48} className='p-[14px] hover:bg-primary hover:text-white bg-secondary rounded-md'/>
            <p>Lugbe, Abuja, Nigeria</p>
          </div>
         
          <div className="flex flex-col items-center gap-3 p-[30px] bg-[#fcfcfc] border rounded-lg ">
            <div className='flex gap-3'>
              {[
                {
                  link: "facebook.com",
                  icon: <AiFillFacebook size={24} />,
                },
                {
                  link: "twitter.com",
                  icon: <AiOutlineTwitter size={24} />,
                },
                {
                  link: "linkedin.com",
                  icon: <AiFillLinkedin size={24} />,
                },
              ].map(({ link, icon }) => {
                return (
                  <div
                    key={link}
                    className='p-[14px] hover:bg-primary hover:text-white bg-secondary rounded-md'
                  >
                    <a
                      href={`http://www.${link}`}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {icon}
                    </a>
                  </div>
                );
              })}
            </div>
            <span className=' font-normal text-sm md:text-base lg:text-lg'>Social Profiles</span>
          </div>
        
        </div>

        {/* contact */}
        <div className="w-full md:w-2/3 md:border-r p-5 md:p-[30px] ">
          <form action="" className="w-full space-y-6">
            <div className="flex flex-col gap-3 w-full md:flex-row md:justify-between md:gap3">
              <div className="space-y-6">
                <div className="w-full space-y-3 text-sm md:text-base lg:text-lg">
                  <label htmlFor="fName" className="text-gray15  font-medium">First Name</label>
                  <input required type="text" name="fName" id="fName" placeholder="Enter your First Name" className="p-5 text-gray30 border rounded-md  bg-[#fcfcfc] w-full" />
                </div>
                <div className="w-full space-y-3 text-sm md:text-base lg:text-lg">
                  <label htmlFor="lName" className="text-gray15  font-medium">Last Name</label>
                  <input required type="text" name="lName" id="lName" placeholder="Enter your Last Name" className="p-5 text-gray30 border rounded-md  bg-[#fcfcfc] w-full" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="w-full space-y-3 text-sm md:text-base lg:text-lg">
                  <label htmlFor="email" className="text-gray15  font-medium">Email</label>
                  <input required type="email" name="email" id="email" placeholder="Enter your Email" className="p-5 text-gray30 border rounded-md  bg-[#fcfcfc] w-full" />
                </div>
                <div className="w-full space-y-3 text-sm md:text-base lg:text-lg">
                  <label htmlFor="phone" className="text-gray15  font-medium">Phone</label>
                  <input required type="text" name="phone" id="phone" placeholder="Enter your Phone Number" className="p-5 text-gray30 border rounded-md  bg-[#fcfcfc] w-full" />
                </div>
              </div>

            </div>
            <div className="w-full space-y-3 text-sm md:text-base lg:text-lg">
              <label htmlFor="subject" className="text-gray15  font-medium">Subject</label>
              <input required type="text" name="subject" id="subject" placeholder="Enter your Subject" className="p-5 text-gray30 border rounded-md  bg-[#fcfcfc] w-full" />
            </div>
            <div className="w-full space-y-3 text-sm md:text-base lg:text-lg">
              <label htmlFor="message" className="text-gray15  font-medium">Message</label>
              <textarea name="message" id="message" rows={10} placeholder="Enter your Message here..." className="p-5 text-gray30 border rounded-md  bg-[#fcfcfc] w-full"></textarea>
            </div>

              <div className="text-center">
            <button type="submit" className="bg-primary text-white py-[14px] font-medium text-sm px-5 capitalize rounded-md w-fit md:text-base lg:text-lg">send your message</button>
              </div>
                
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
