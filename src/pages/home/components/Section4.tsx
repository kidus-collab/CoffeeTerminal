
// Images
import img1 from '../../../assets/images/mission/objective.jpg';
import img2 from '../../../assets/images/mission/vision.jpg';
import img3 from '../../../assets/images/mission/mission.jpg';
import img4 from '../../../assets/images/mission/goal.jpg';

const vissionMission = [
  { id: 1, locaiton: 'Lebu', image: img1, name: 'Objective', description: 'To establish Coffee Terminal as the premier gateway for the finest coffee in Ethiopia by the end of 2024, while maintaining our uncompromising principles of quality, service, and sustainability. We will achieve this by sourcing the highest quality coffee beans from our Ethiopian farmers, roasting them to perfection, and providing excellent customer service in our one-person, one-cup, one-terminal coffee shops.' },
  { id: 2, locaiton: 'Kera', image: img2, name: 'Vision', description: 'To be the most valued coffee processing plant in Africa by 2026.' },
  { id: 3, locaiton: 'Lebu', image: img3, name: 'Mission', description: 'We are committed to sourcing our coffee ethically, from farmers who are paid fair wages and who practice sustainable farming methods. We also believe that coffee should be enjoyed in relaxed and inviting atmosphere. Our coffee shops are designed to be comfortable and welcoming, where people can gather to socialize and enjoy a cup of coffee. We are committed to giving back to our community, and we donate a portion of our profits to local charities.' },
  { id: 4, locaiton: 'Lafto', image: img4, name: 'Goal', description: 'To ethically source and serve the finest coffee, creating a unique and relaxing coffee experience for our community. We believe that coffee is more than just a beverage. It is a social ritual that brings people together, a way to start the day, and a way to relax and unwind.' },
]
export default function Section4() {
  return (
    <div className="w-full h-full flex flex-col gap-10 items-center justify-center px-5 md:px-10">
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <h1 className='text-5xl font-bold'>Vision & Missions</h1>
        <p className='text-lg'>Objectives we set out to achieve in this coffee shop</p>
      </div>

      {/* Visions */}
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-2 gap-10">
        {
          vissionMission.map((items) => (
            <div className='w-full h-full flex flex-col gap-8'>
              <div>
                <img src={items.image} alt={items.name} className='w-full h-96 object-cover' />
              </div>
              <div className='w-full h-full flex flex-col gap-3'>
                <h1 className='text-4xl font-bold'>{items.name}</h1>
                <p>{items.description}</p>
              </div>

            </div>
          ))
        }

      </div>

    </div>
  )
}
