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
            <input type="text" placeholder="Search.." />
          </div>
        )
        : (
          <div>
            <IoIosArrowBack />
            <p>Back</p>
          </div>
        ))}
    </NavLink>
    <FaMicrophone />
    <AiFillSetting />
  </header>
);

export default Header;
