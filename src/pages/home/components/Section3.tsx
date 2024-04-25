
// Images
import bgImage from '../../../assets/images/home/background.jpg';
import packedCoffeeImage from '../../../assets/images/home/packedcoffee.jpg';
import caterImage from '../../../assets/images/home/cateringImage.jpg';
import mohitoImage from '../../../assets/images/home/mohito.jpg';
import machiattoImage from '../../../assets/images/home/machiatto.jpg';
import cofeeWaterImage from '../../../assets/images/home/coffee+water.jpg';

export default function Section3() {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'repeat'
      }}
      className='w-full h-full flex flex-col gap-10 items-center justify-start py-20'>
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <h1 className='text-5xl font-bold'>What we serve customers</h1>
        <p className='text-lg'>Roasted & grounded coffee from all around ethiopia</p>
      </div>

      {/* Services */}

      <div className='w-full h-full flex flex-row items-center justify-center gap-10'>
        {/* Packed COffee */}
        <div className='w-80 h-auto flex flex-col gap-4 bg-white shadow-xl rounded-xl'>
          {/* Image */}
          <div className='w-full h-full p-2'>
            <img
              className='w-full h-full rounded-xl'
              src={packedCoffeeImage}
              alt="Packed Coffee" />
          </div>

          {/* Description */}
          <div className='w-full h-full px-3 flex flex-col gap-2 pb-10'>
            <h1 className='text-2xl font-bold'>Packed Coffee</h1>
            <p className='text-sm'>Packed & Roasted quality coffee ready to go for our customers</p>
          </div>
        </div>

        {/* Coffe Catering */}
        <div className='w-80 h-auto flex flex-col gap-4 bg-white shadow-xl rounded-xl'>
          {/* Image */}
          <div className='w-full h-full p-2'>
            <img
              className='w-full h-full rounded-xl'
              src={caterImage}
              alt="Cattered Coffee" />
          </div>

          {/* Description */}
          <div className='w-full h-full px-3 flex flex-col gap-2 pb-10'>
            <h1 className='text-2xl font-bold'>Coffee catering</h1>
            <p className='text-sm'>we cater coffee at events & different social gatherings</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className='w-full h-full flex flex-col items-center justify-center gap-10'>
        {/* Menu Bar */}
        <div className='w-full h-full flex flex-col items-center gap-3'>
          <h1 className='text-5xl font-bold'>Menu</h1>
          <p>Few of our finest beverages</p>
        </div>
        <div className='w-full h-full flex flex-row items-start justify-center gap-10'>
          {/* Coffee With water*/}
          <div className='w-80 h-auto flex flex-col gap-4 bg-white shadow-xl rounded-xl'>
            {/* Image */}
            <div className='w-full h-full p-2'>
              <img
                className='w-full h-full rounded-xl'
                src={cofeeWaterImage}
                alt="Coffee and Water" />
            </div>

            {/* Description */}
            <div className='w-full h-full px-5 flex flex-col gap-2 pb-10'>
              <h1 className='text-2xl font-bold'>Coffee With water</h1>
              <p className='text-sm'>We offer a 200ml bottle of water for free to customers who purchase a coffee drink. Coffee Terminal cares about the health and comfort of our customers</p>
            </div>
          </div>

          {/* Mohito */}
          <div className='w-80 h-auto flex flex-col gap-4 bg-white shadow-xl rounded-xl'>
            {/* Image */}
            <div className='w-full h-full p-2'>
              <img
                className='w-full h-full rounded-xl'
                src={mohitoImage}
                alt="Mohito" />
            </div>

            {/* Description */}
            <div className='w-full h-full px-5 flex flex-col gap-2 pb-10'>
              <h1 className='text-2xl font-bold'>Mohito</h1>
              <p className='text-sm'>Recently added beverage & customers faviorite. One of our houses special</p>
            </div>
          </div>

          {/* Machiatto */}
          <div className='w-80 h-auto flex flex-col gap-4 bg-white shadow-xl rounded-xl'>
            {/* Image */}
            <div className='w-full h-full p-2'>
              <img
                className='w-full h-full rounded-xl'
                src={machiattoImage}
                alt="Machiato" />
            </div>

            {/* Description */}
            <div className='w-full h-full px-5 flex flex-col gap-2 pb-10'>
              <h1 className='text-2xl font-bold'>Machiatto</h1>
              <p className='text-sm'>Breathtaking machiato with takeaway cup , Write customers names on take away cup</p>
            </div>
          </div>

        </div>
      </div>

    </div >
  )
}
