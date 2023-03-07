import React from 'react';

type Props = {
  size?: number;
  color?: string;
};

const Spinner: React.FC<Props> = ({ size = 40, color = 'currentColor' }) => (
  <div className="loader-container">
    <svg
      className="spinner"
      width={size}
      height={size}
      stroke={color}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="circle"
        fill="none"
        cx="20"
        cy="20"
        r="18"
        strokeWidth="4"
      />
    </svg>

    <style jsx>{`
      .loader-container {
        display: inline-block;
      }

      .spinner {
        display: inline-block;
        vertical-align: top;
        animation: rotator 1.4s linear infinite;
      }

      .circle {
        animation: dash 1.4s ease-in-out infinite;
        stroke-dasharray: 113;
        stroke-dashoffset: 0;
        transform-origin: center;
      }

      @keyframes rotator {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(270deg);
        }
      }

      @keyframes dash {
        0% {
          stroke-dashoffset: 113;
        }
        50% {
          stroke-dashoffset: 10;
          transform: rotate(135deg);
        }
        100% {
          stroke-dashoffset: 113;
          transform: rotate(450deg);
        }
      }
    `}</style>
  </div>
);

export default Spinner;
