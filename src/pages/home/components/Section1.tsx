import { useState, useEffect } from 'react';

// Images
import coffeeBagImage from '../../../assets/images/home/coffeebag.png';
import coffeeCupImage from '../../../assets/images/home/coffeecup.png';

export default function Section1() {
  const [img, setImg] = useState(coffeeBagImage);

  // Create a loop where it changes image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setImg(coffeeBagImage);
      setTimeout(() => {
        setImg(coffeeCupImage);
      }, 5000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-auto  bg-headerColor px-5 md:px-20'>
      <div className="w-full mx-auto h-auto container grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Side */}
        <div className='w-full h-full flex flex-col gap-8 text-headerTextColor py-20 '>
          <div>
            <h1 className="text-2xl font-bold">Take a break its coffee time</h1>
          </div>
          <div className="w-full h-full flex flex-col gap-2 text-6xl font-bold">
            <h1>Cup of Coffee</h1>
            <h1>saves your</h1>
            <h1>day</h1>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full h-full p-10 flex items-center justify-center">
          <img
            className='w-auto h-80 transition'
            src={img}
            alt="Coffee Bag" />

        </div>
      </div>

    </div>
  )
}
