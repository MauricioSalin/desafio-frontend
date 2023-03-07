import React from "react";

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

interface Props {
  children: React.ReactNode;
}

const Nav: React.FC<Props> = ({ children }) => {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="container">
          <div className="logo-wrapper">
            <a>
              <Logo />
            </a>
          </div>

          <InputSearch />
          <Avatar size={32} isLogin />
        </div>
      </nav>

      {children}

      <style jsx>{`
        .logo-color {
          color: #ab816e;
        }

        .nav-wrapper {
          position: fixed;
          z-index: 9;
          top: 0;
          left: 0;
          width: 100%;
          min-height: 64px;
          color: ${theme.colors.base};
        }

        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          padding-bottom: 12px;
          padding: 10px 20px 10px 76px;
          background-color: ${theme.colors.white};
        }

        .logo-wrapper a {
          display: block;
          color: ${theme.colors.primary};
          transition: opacity 0.2s;
        }

        .logo-wrapper a:hover {
          opacity: 0.5;
        }

        .nav {
          display: flex;
          align-items: center;
        }

        .menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .menu li {
          padding-left: 0;
        }

        .menu .link {
          display: flex;
          align-items: center;
          color: inherit;
          padding: 8px 16px;
          font-weight: bold;
          font-size: 13px;
          line-height: 24px;
          text-decoration: none;
          transition: opacity 0.2s;
          cursor: pointer;
        }

        .menu .link:focus,
        .menu .link:active {
          outline: none;
        }

        .menu .link:hover {
          opacity: 0.5;
        }

        .menu button.link {
          background: none;
          border: none;
        }

        .overlay-panel,
        .menu-header {
          display: none;
        }

        .nav-bg {
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #fff;
          box-shadow: ${theme.shadows.defaultLighter};
        }

        .menu-label {
          font-weight: bold;
        }

        @media (min-width: 993px) {
          .nav-wrapper.animate-bg {
            color: ${theme.colors.primary};
          }

          .nav-wrapper.animate-bg .nav-bg {
            opacity: 0;
          }

          .menu .link {
            border-radius: 2em;
          }

          .menu .link :global(svg) {
            display: none;
          }

          .menu .nav-round-wrapper {
            color: ${theme.colors.primaryAlt};
            background-color: inherit;
            border: 1px solid;
            padding: 7px 24px;
            margin-left: 16px;
            transition: 0.2s;
          }

          .menu .nav-round-wrapper:hover {
            background-color: ${theme.colors.primaryAlt};
            border-color: ${theme.colors.primaryAlt};
            color: #fff;
            opacity: 1;
          }

          .btn-menu-wrapper {
            display: none;
          }
        }

        @media (max-width: 992px) {
          .nav {
            position: fixed;
            z-index: 999;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            width: 240px;
            height: 100vh;
            background: #fff;
            transform: translate3d(-100%, 0, 0);
          }

          .overlay-panel {
            display: block;
            position: fixed;
            z-index: 998;
            top: 0;
            left: 0;
            width: 100vw;
            min-height: 100vh;
            min-height: -webkit-fill-available;
            background: rgba(0, 0, 0, 0.54);
            visibility: hidden;
            opacity: 0;
            padding: 0;
            border: none;
          }

          .nav,
          .overlay-panel {
            transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          }

          .container {
            padding-top: 0;
            padding-bottom: 0;
          }

          .logo-wrapper {
            display: block;
            text-align: center;
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            right: 0;
            padding: 20px;
            transition: 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          }

          .logo-wrapper a {
            display: inline-block;
          }

          .logo-wrapper a :global(svg) {
            height: 24px;
          }

          .logo-wrapper.logo-hidden {
            opacity: 0;
          }

          .menu-header {
            display: flex;
            align-items: center;
            height: 64px;
            width: 100%;
            padding: 16px 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.15);
          }

          .menu-header a {
            color: inherit;
            text-decoration: none;
          }

          .menu {
            flex-direction: column;
            flex: 1;
            width: 100%;
            color: #333;
          }

          .menu li {
            padding-left: 0;
          }

          .menu li.active {
            background: rgba(0, 0, 0, 0.05);
          }

          .menu .link {
            padding: 16px 24px;
            font-size: 14px;
            font-weight: 500;
            line-height: 24px;
            color: inherit;
          }

          .menu .active .link {
            font-weight: 600;
          }

          .menu-label {
            color: ${theme.colors.primaryAlt};
          }
        }
      `}</style>
    </>
  );
};

export default Nav;
