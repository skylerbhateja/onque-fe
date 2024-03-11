import React from "react";

const Spinner = () => {
  return (
    <div className="spinner">
      <style jsx>{`
        .spinner {
          position: relative;
          width: 60px;
          height: 60px;
        }

        .spinner::before,
        .spinner::after {
          content: "";
          width: 100%;
          height: 100%;
          animation: spinner-rfi6tk 1s infinite linear;
          box-sizing: border-box;
          border: 11.2px solid rgba(71, 75, 255, 0.1);
          border-radius: 50%;
          position: absolute;
        }

        .spinner::before {
          animation-direction: reverse;
          border-right-color: #474bff;
          right: calc(50% - 5.6px);
        }

        .spinner::after {
          border-left-color: #474bff;
          left: calc(50% - 5.6px);
        }

        @keyframes spinner-rfi6tk {
          0% {
            transform: rotate(0deg);
          }

          50%,
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Spinner;
