import {
  Input,
  InputGroup,
  InputLeftElement,
  Select
} from '@chakra-ui/react';

import { BiSearchAlt2 } from 'react-icons/bi';
// Images
import logo from '../../../utils/images/Nav/logo.png';

export default function Header() {
  return (
    <header className='w-full mx-auto h-auto md:h-20 flex md:flex-row flex-col gap-2 items-center justify-between px-5 md:px-20 border border-gray-200'>
      <div
        onClick={() => {
          window.location.href = "/"
        }}
        className='p-2 cursor-pointer'>
        <img
          src={logo}
          alt='logo'
          className='w-16 h-auto' />
      </div>
      <div className='w-full hidden  md:w-auto  flex-col md:flex-row gap-3 md:gap-10 items-center py-2'>
        <div className='w-full'>
          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <BiSearchAlt2 color='gray.300' />
            </InputLeftElement>
            <Input type='text' placeholder='Search' />
          </InputGroup>
        </div>
        <div className='w-full '>
          <Select
            width={'100%'}
            placeholder='Category'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </div>
      </div>
    </header>
  )
}
