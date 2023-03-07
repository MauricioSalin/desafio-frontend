import React from "react";
import Image from "next/image";

import { MdPerson } from "react-icons/md";

/**
 * Components
 */

/**
 * Styles
 */
import theme from "@/styles/theme";

/**
 * Types
 */
type Props = {
  imageUrl?: string;
  size?: number;
  isLogin?: boolean;
};

const Avatar: React.FC<Props> = ({ size = 40, imageUrl, isLogin = false }) => {
  return (
    <div className="avatar-container">
      {isLogin && (
        <span className="avatar-login">
          <a className="avatar-link" href="/">
            Create Account
          </a>
          <label> or </label>
          <a className="avatar-link" href="/">
            Sign-in
          </a>
        </span>
      )}

      <span className="avatar-wrapper">
        <span
          className="avatar-content"
          style={{ width: size, height: size }}
          role="button"
          aria-hidden="true"
        >
          {imageUrl ? (
            <Image src={imageUrl} alt="user" unoptimized />
          ) : (
            <MdPerson size={size} />
          )}
        </span>
      </span>
      <style jsx>{`
        .avatar-container {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        .avatar-wrapper {
          display: block;
          position: relative;
        }

        .avatar-login {
          color: #000;
          margin-right: 20px;
          font-size: 14px;
        }

        .avatar-link {
          color: #0969da;
        }

        .avatar-content {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #c1c1c1;
          border-radius: 50%;
          position: relative;
          outline: 1px solid transparent;
        }

        .avatar-content:after {
          content: "";
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          border-radius: 50%;
          box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.3);
        }

        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .avatar.border {
          border: 2px solid #ccc;
        }
      `}</style>
    </div>
  );
};

export default Avatar;
