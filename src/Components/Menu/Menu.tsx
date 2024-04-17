// Styles
import '../../styles/tailwind.css';
import Header from './components/Header';
import MenuList from './components/MenuList';

export default function Menu() {

  return (
    <main className='w-full h-full flex flex-col gap-10'>
      <Header />
      <MenuList />
    </main>
  )
}
