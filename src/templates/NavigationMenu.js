// Components
import MenuIcon from '../components/MenuIcon';

// Icons
import HouseIcon from '../icons/HouseIcon';
import SearchIcon from '../icons/SearchIcon';
import CalenderIcon from '../icons/CalenderIcon';

const NavigationMenu = () => {
  return (
    <nav className="Navigation-menu w-full pt-[15px] pb-[10px] px-7 fixed bottom-0 bg-grey flex justify-between">
      <MenuIcon link="/home" icon={<HouseIcon />}/>
      <MenuIcon link="/search" icon={<SearchIcon />}/>
      <MenuIcon link="/calender" icon={<CalenderIcon />}/>
    </nav>
  );
}
 
export default NavigationMenu;