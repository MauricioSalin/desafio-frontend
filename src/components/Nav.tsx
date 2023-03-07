import React from "react";
import Link from "next/link";

/**
 * Components
 */
import Logo from "./Logo";
import InputSearch from "./InputSearch";

/**
 * Styles
 */
import theme from "@/styles/theme";
import Avatar from "./Avatar";

const Nav: React.FC = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-wrapper">
          <Link href="/">
            <Logo />
          </Link>
          <InputSearch />
          <Avatar size={32} isLogin />
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
          color: ${theme.colors.base};
        }

        .nav-wrapper {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          padding-bottom: 12px;
          padding: 10px 20px 10px 76px;
          background-color: ${theme.colors.white};
        }
      `}</style>
    </>
  );
};

export default Nav;
