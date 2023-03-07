import React, { InputHTMLAttributes } from 'react';

/**
 * Types
 */
export type Ref = HTMLInputElement;

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...inputProps
}) => {
  return (
    <div className="input-container">
      <input {...inputProps} />

      <style jsx>{`
        .input-container {
          position: relative;
          width: 100%;
        }

        input {
          color: #444;
          font-size: 16px;
          background: #fff;
          border: 1px solid #ccc;
          border-radius: 40px 0 0 40px;
          padding: 0px 0px 0px 15px;
          width: 100%;
          height: 40px;
          margin: 0;
          appearance: none;
          transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        input:focus,
        input:active {
          outline: none;
        }

        input:focus {
          border-color: #ccc;
        }
      `}</style>
    </div>
  );
};

Input.displayName = 'Input';

export default Input;
