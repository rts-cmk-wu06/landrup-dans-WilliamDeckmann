// Components
import MenuIcon from '../components/MenuIcon';

// Icons
import HouseIcon from '../icons/HouseIcon';
import SearchIcon from '../icons/SearchIcon';
import CalenderIcon from '../icons/CalenderIcon';

const NavigationMenu = () => {
  return (
    <div className="Navigation-menu">
      <nav className="pt-[15px] pb-[10px] px-7 bg-grey flex justify-between">
        <MenuIcon link="/home" icon={<HouseIcon />}/>
        <MenuIcon link="/search" icon={<SearchIcon />}/>
        <MenuIcon link="/calender" icon={<CalenderIcon />}/>
      </nav>
    </div>
  );
}
 
export default NavigationMenu;