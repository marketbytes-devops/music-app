import flowImgFirst from '../../../assets/Images/Home/banner-flow-1.png';
import flowImgSecond from '../../../assets/Images/Home/banner-flow-1.png';

const SectionOne = () => {
  return (
    <div className='relative container h-screen flex flex-col items-center justify-center'>
      <div className='text-center space-y-2 relative -top-20'>
        <p className='bg-[#F5F5F5] rounded-full px-8 py-4 max-w-full sm:max-w-xl mx-auto'>“Book Effortlessly, Create Unforgettable Moments!”</p>
        <h1 className="block font-semibold"><span className="text-[#1B1B1A]">Discover Top </span><span>Musicians,</span></h1>
        <h2 className='text-center mt-4 font-semibold'>Make Your Event Unforgettable!</h2>

        <div className='mt-16'>
          <button className='px-8 py-4 rounded-full border'>
            Get Booking
          </button>
        </div>

      </div>
      <div className='flex justify-between'>
        <div className='absolute bottom-28 left-10 transform rotate-12'>
          <img src={flowImgFirst} className='w-[243px] h-[284px] object-cover rounded-3xl' alt="" />
        </div>
        <div className='absolute bottom-28 right-10 transform -rotate-12'>
          <img src={flowImgSecond} className='w-[243px] h-[284px] object-cover rounded-3xl' alt="" />
        </div>
      </div>
    </div>
  )
}

export default SectionOne