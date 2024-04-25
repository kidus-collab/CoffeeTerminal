// Images
import eyobImage from '../../../assets/images/home/EyobA.png';
import aboutImage from '../../../assets/images/home/about.jpg';

export default function Section2() {
  return (
    <div className="w-full h-full bg-white ">
      <div className="w-full mx-auto h-full container grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-20 py-10">
        {/* Left Section */}
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="text-6xl font-bold">About Us</h1>
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold">Quality Coffee with greate taste.</h1>
            <p className="space-y-1">Coffee Terminal launched its first coffee shop in Addis Ababa, Ethiopia on September 11, 2022. We currently operate three locations in the city: <b>Laphto Gate 1,</b> <b>Lebu Mebrathile Gate 2,</b> and <b>Kera Gate 3.</b>  We plan to expand to 12 locations by the end of 2024.</p>
          </div>

          <div className="flex flex-row items-center justify-start py-5 gap-4">
            {/* Image */}
            <img
              className='w-20 h-auto'
              src={eyobImage}
              alt="Eyob A" />

            {/* Description */}
            <div className='flex flex-col gap-1'>
              <h1 className='text-lg'>Eyob Abera</h1>
              <p>Founder</p>
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className='w-full h-full flex items-center justify-center'>
          <img
            src={aboutImage}
            alt="About Image" />

        </div>
      </div>
    </div>
  )
}
