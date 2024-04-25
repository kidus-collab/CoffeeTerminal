// Images
import img1 from '../../../assets/images/future/Future1.jpg';
import img2 from '../../../assets/images/future/Future2.jpg';
import img3 from '../../../assets/images/future/Future3.jpg';
import img4 from '../../../assets/images/future/Future4.jpg';
import img5 from '../../../assets/images/future/Future5.jpg';
import img6 from '../../../assets/images/future/Future6.jpg';

export default function Section5() {
  const futureImage = [
    { id: 1, image: img1 },
    { id: 2, image: img2 },
    { id: 3, image: img3 },
    { id: 4, image: img4 },
    { id: 5, image: img5 },
    { id: 6, image: img6 },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-10 items-center justify-center px-5 md:px-10">
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <h1 className='text-5xl font-bold'>Future of Coffee Terminal</h1>
        <p className='text-lg'>We hope to expand our coffee shop with different designs</p>
      </div>

      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-10">
        {
          futureImage.map((items) => (
            <div className='w-full h-full flex flex-col gap-8'>
              <div>
                <img src={items.image} alt='Future' className='w-full h-96 object-cover' />
              </div>
            </div>
          ))
        }
      </div>

    </div>
  )
}
