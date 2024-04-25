

// Icons
import {
  FaMailBulk,
  FaMapMarkerAlt,
  FaMapMarked,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

// Images
import image from '../assets/images/footer/image.jpg';

export default function Footer() {
  return (
    <footer
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`w-full h-72 px-20`}>

      <div className='flex flex-row items-start justify-start text-white '>

        {/* Contact */}
        <div className='w-full mx-auto h-full flex flex-col gap-10 container pt-10 '>
          <div>
            <h1 className='text-3xl font-bold '>Contact Us</h1>
          </div>

          <div className='w-72 h-full flex flex-col gap-5 '>
            {/* Email */}
            <div className='flex flex-row items-center gap-2 hover:text-blue-400'>
              <FaMailBulk className='text-white text-2xl' />
              <a href="mailto:CoffeeTerminalEt@gmail.com">
                CoffeeTerminalEt@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className='flex flex-row items-center gap-2 hover:text-blue-400'>
              <FaPhoneAlt className='text-white text-2xl' />
              <a href="phone:+251941569566">
                +251941569566
              </a>
            </div>

            {/* Location */}
            <div className='flex flex-row items-center gap-2 hover:text-blue-400'>
              <FaMapMarked className='text-white text-2xl' />
              <a href="">
                Addis Ababa, Ethiopia
              </a>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className='w-full mx-auto h-full flex flex-col gap-10 container pt-10'>
          <div>
            <h1 className='text-3xl font-bold '>Location</h1>
          </div>

          <div className='w-40 h-full flex flex-col gap-5'>
            {/* Lafto Branch */}
            <div className='flex flex-row items-center gap-2 hover:text-blue-400'>
              <FaMapMarked className='text-white text-2xl' />
              <a href="https://maps.app.goo.gl/va1uaqfy3WeDuwJ99">
                Lafto branch
              </a>
            </div>

            {/* Kera Branch */}
            <div className='flex flex-row items-center gap-2 hover:text-blue-400'>
              <FaMapMarked className='text-white text-2xl' />
              <a href="https://maps.app.goo.gl/va1uaqfy3WeDuwJ99">
                Kera branch
              </a>
            </div>

            {/* Lebu Branch */}
            <div className='flex flex-row items-center gap-2 hover:text-blue-400'>
              <FaMapMarked className='text-white text-2xl' />
              <a href="https://maps.app.goo.gl/va1uaqfy3WeDuwJ99">
                Lebu branch
              </a>
            </div>

          </div>
        </div>

        {/* Social */}
        <div className='w-full mx-auto h-full flex flex-col gap-10 container pt-10'>
          <div>
            <h1 className='text-3xl font-bold '>Our Social</h1>
          </div>

          <div className="flex flex-row items-center gap-5">
            <a target="_blank" href="https://www.facebook.com/CoffeeTerminalEt"><FaFacebook className='text-white text-2xl hover:text-blue-500' /></a>
            <a target="_blank" href="https://www.instagram.com/coffeeterminal_et/?hl=en" ><FaInstagram className='text-white hover:text-red-400 text-2xl' /></a>
            <a target="_blank" href="https://www.youtube.com/"><FaYoutube className='text-white hover:text-red-600 text-2xl' /></a>
            <a target="_blank" href="https://www.tiktok.com/@coffeeterminal_et"><FaTiktok className='text-white hover:text-blue-800 text-2xl' /></a>
          </div>

          <div className="flex flex-col gap-2">
            <p>Copyright © 2024 Coffee Terminal</p>
            <div className="flex flex-row gap-2">
              <p>Made by:</p>
              <a
                className="hover:text-blue-400"
                target="_blank"
                href="http://t.me/natnaelengeda">
                @natnaelengeda</a>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
