import { useState, useEffect } from 'react';

// Styles
import '../../styles/tailwind.css';
import Header from './components/Header';
import MenuList from './components/MenuList';

export default function Menu() {
  const [catagory, setCatagory] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchCatagory();
    fetchMenu();
  }, []);

  const fetchCatagory = async () => {

  }

  const fetchMenu = async () => {

  }


  return (
    <main className='w-full h-full flex flex-col gap-10'>
      <Header />
      <MenuList />
    </main>
  )
}
