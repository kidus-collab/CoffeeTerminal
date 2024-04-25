// Images
import LaftoImage from '../../../assets/images/branches/Lafto branch 1.png';
import LebuImage from '../../../assets/images/branches/Lebu.png';
import KeraImage from '../../../assets/images/branches/kera.png'

export default function Section6() {

  const branches = [
    { id: 1, name: "Lafto Branch", gate: "Gate 1", location: "We are found at lafto taxi tera infront of mosque", image: LaftoImage },
    { id: 2, name: "Lebu Branch", gate: "Gate 2", location: "We are found at lebu around varnero roundabout", image: LebuImage },
    { id: 3, name: "Kera Branch", gate: "Gate 3", location: "We are found at kera Cherkos road infront of cherkos taxi", image: KeraImage }
  ]

  return (
    <div className="w-full h-full flex flex-col gap-10 items-center justify-center px-5 md:px-10 py-20">
      <div className="w-full h-full flex flex-col justify-center items-center gap-2">
        <h1 className='text-5xl font-bold'>Location of our shops</h1>
      </div>

      <div className='w-full flex flex-col gap-10 justify-center items-start '>
        {
          branches.map((item) => (
            <div className='w-full h-full flex flex-row items-star justify-between'>
              {/* Image */}
              <div className={`w-full h-full ${item.id == 2 ? "order-2" : ""}`}>
                <img
                  src={item.image}
                  alt={item.name} />
              </div>

              {/* Description */}
              <div className='w-full h-full flex flex-col items-start gap-5 px-5 md:px-20 py-5 '>
                <h1 className='text-3xl font-bold'>{item.name}</h1>
                <h1 className='text-xl font-semibold'>{item.gate}</h1>
                <p>{item.location}</p>

              </div>

            </div>
          ))
        }

      </div>
    </div>
  )
}
