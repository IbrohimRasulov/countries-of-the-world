import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiFillSetting, AiFillHome } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';

const Header = () => (
  <header>
    <NavLink to="/">
      {({ isActive }) => (isActive
        ? (
          <div>
            <AiFillHome />
          </div>
        )
        : (
          <div>
            <IoIosArrowBack />
            <p>Back</p>
          </div>
        ))}
    </NavLink>
    <div>
      <FaMicrophone />
      <AiFillSetting />
    </div>
  </header>
);

export default Header;
