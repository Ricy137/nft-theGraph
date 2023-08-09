import React, { useState, useEffect, type ComponentProps } from 'react';
import cx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import FDIcon from '/FD.svg';
import Mobile from './Mobile';
import './index.css';

const NavLink: React.FC<ComponentProps<typeof Link> & { curPath: boolean }> = ({ to, children, curPath }) => (
  <li className={cx('navbar-link relative flex items-center px-14px h-full overflow-hidden', curPath && 'border-b-1px border-b-solid border-#FFB6E3')}>
    <Link className="flex items-center h-full text-#FFB6E3 decoration-none select-none" to={to}>
      {children}
    </Link>
  </li>
);

const Navbar: React.FC = () => {
  const { pathname: curPath } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [curPath]);

  return (
    <header className="px-20px flex justify-center h-61px bg-#ECF6FA border-b-1px border-#FEFEFE border-opacity-15 ">
      <Mobile open={isMobileMenuOpen} curPath={curPath === '/' ? '/mint' : curPath} />
      <nav className={cx('max-w-1920px mx-auto flex justify-between sm:justify-start items-center w-full h-60px px-32px bg-#ECF6FA z-100')}>
        <Link to="/">
          <img src="/FD.svg" alt="Fake Doodles icon" draggable={false} className="w-34px h-34px mr-auto sm:mr-40px" />
        </Link>
        <ul className="navbar-linkArea display-none sm:flex h-full items-center text-14px font-semibold">
          <NavLink to="/mint" curPath={curPath === '/' || curPath === '/mint'}>
            Minting
          </NavLink>
          <NavLink to="/library" curPath={curPath === '/library'}>
            Library
          </NavLink>
        </ul>

        <label className="burger-container ml-20px sm:display-none" htmlFor="burger-check">
          <input
            className="burger-check"
            id="burger-check"
            type="checkbox"
            checked={isMobileMenuOpen}
            onChange={(e) => setIsMobileMenuOpen(e.target.checked)}
          />
          <span className="burger" />
        </label>
      </nav>
    </header>
  );
};

export default Navbar;
