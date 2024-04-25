import { Menu, MenuItem } from '@szhsin/react-menu';

// Styles
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

// Images
import logo from '../assets/images/header/logo.png';

// Icons
import { CiMenuFries } from "react-icons/ci";

export default function Header() {
  return (
    <header className="w-full h-20 flex flex-row items-center justify-between gap-10 px-5 md:px-10 py-2 bg-headerColor">
      {/* Logo */}
      <div className='bg-white rounded-xl md:py-2 px-2'>
        <img
          className='h-16 md:h-18 w-auto '
          src={logo}
          alt="Coffee Terminal" />
      </div>

      {/* Menu Items Destop */}
      <div className='hidden md:flex w-full h-full  flex-row items-center justify-end gap-10 px-10 '>
        <a href="#home" className='text-headerTextColor text-lg font-semibold'>Home</a>
        <a href="#about" className='text-headerTextColor text-lg font-semibold'>About</a>
        <a href="#branches" className='text-headerTextColor text-lg font-semibold'>Branches</a>
        <a href="#mission" className='text-headerTextColor text-lg font-semibold'>Mission</a>
        <a href="#future" className='text-headerTextColor text-lg font-semibold'>Future</a>
      </div>

      {/* Menu Items Mobile */}
      <div className='md:hidden'>
        <Menu
          menuButton={
            <div className='bg-white rounded p-2'>
              <CiMenuFries className='w-8 h-full' />
            </div>
          } transition>
          <MenuItem>Cut</MenuItem>
          <MenuItem>Copy</MenuItem>
          <MenuItem>Paste</MenuItem>
        </Menu>
      </div>

    </header>
  )
}
