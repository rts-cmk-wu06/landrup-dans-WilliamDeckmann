// Imports
import { Link } from 'react-router-dom';

const MenuIcon = (props) => {
  return (
    <div className="Menu-icon">
      <Link to={props.link}>
        {props.icon}
      </Link>
    </div>
  );
}
 
export default MenuIcon;