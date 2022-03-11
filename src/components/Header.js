import { NavLink } from 'react-router-dom';
import { FaMicrophone } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';

const Header = () => (
  <header className="">
    <NavLink to="/homepage">
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
    <input type="text" placeholder="Search.." />
    <FaMicrophone />
    <AiFillSetting />
  </header>
);

export default Header;
