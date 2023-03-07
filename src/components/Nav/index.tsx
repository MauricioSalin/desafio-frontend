import React from 'react';

/**
 * Components
 */
import Logo from '../Logo';
import Avatar from '../Avatar';
import InputSearch from '../Search';

const Nav: React.FC = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-wrapper">
          <a href="/">
            <Logo />
          </a>
          <InputSearch />
          <Avatar size={34} isLogin />
        </div>
      </nav>

      <style jsx>{`
        .nav-container {
          position: fixed;
          z-index: 9;
          top: 0;
          left: 0;
          width: 100%;
          min-height: 64px;
        }

        .nav-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          padding-bottom: 12px;
          padding: 10px 20px 10px 76px;
          background-color: #fff;
        }
      `}</style>
    </>
  );
};

export default Nav;
