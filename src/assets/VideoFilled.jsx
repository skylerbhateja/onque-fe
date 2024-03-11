import React from "react";

const VideoFilled = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      x="0"
      y="0"
      viewBox="0 0 467.968 467.968"
      xml:space="preserve"
      class=""
    >
      <g>
        <path
          d="M264.704 96.512H51.2c-28.16 0-51.2 23.04-51.2 51.2v172.544c0 28.16 23.04 51.2 51.2 51.2h213.504c28.16 0 51.2-23.04 51.2-51.2V147.712c0-28.672-23.04-51.2-51.2-51.2zM430.08 124.672c-3.072.512-6.144 2.048-8.704 3.584l-79.872 46.08V293.12l80.384 46.08c14.848 8.704 33.28 3.584 41.984-11.264 2.56-4.608 4.096-9.728 4.096-15.36V154.368c0-18.944-17.92-34.304-37.888-29.696z"
          fill={fill}
          opacity="1"
          data-original="#000000"
        ></path>
      </g>
    </svg>
  );
};

export default VideoFilled;
