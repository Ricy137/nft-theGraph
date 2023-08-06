import React, { type ComponentProps } from 'react';
import cx from 'clsx';
import { Link } from 'react-router-dom';

const NavLink: React.FC<ComponentProps<typeof Link> & { curPath: string }> = ({ to, children, curPath }) => (
  <li className={cx('relative flex items-center h-48px', { ['nav-link-mobile--active']: curPath?.startsWith(to as string) })}>
    <Link className="flex items-center h-full text-#F1F1F3 decoration-none select-none" to={to}>
      {children}
    </Link>
  </li>
);

const Mobile: React.FC<{ open: boolean; curPath: string }> = ({ open, curPath }) => {
  return (
    <div
      className={cx(
        'nav-mobile sm:display-none absolute w-full h-[calc(100vh-60px)] left-0 top-60px bg-#303549e0 transition-transform duration-300 z-50 translate-y-[-100vh]',
        open && 'translate-y-0px',
      )}
    >
      <ul className="pl-40px flex flex-col gap-12px mt-8px text-22px font-semibold">
        <NavLink to="/mint" curPath={curPath}>
          Minting Page
        </NavLink>
        <NavLink to="/library" curPath={curPath}>
          Library
        </NavLink>
      </ul>
    </div>
  );
};

export default Mobile;
