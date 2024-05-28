import { FaArrowRight } from "react-icons/fa6";

const FlashSales = () => {
  return (
    <div className='container  mt-3 py-[10px] px-4 bg-primary rounded-md text-white '>
      <div className='flex justify-between gap-2 w-fit mx-auto md:gap-6'>
        <span className='text-sm font-normal w-fit capitalize lg:text-lg'>
          free courses 🌟 sale ends soon, get it now
        </span>
        <FaArrowRight size={24} />
      </div>
    </div>
  );
};

export default FlashSales;
