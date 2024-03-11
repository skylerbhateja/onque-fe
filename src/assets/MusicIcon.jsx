import React from 'react'

const MusicIcon = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      xmlns:svgjs="http://svgjs.com/svgjs"
      x="0"
      y="0"
      width={width}
      height={height}
      viewBox="0 0 512 512"
      xml:space="preserve"
    >
      <g>
        <path
          d="M116.116 478c-41.517 0-75.294-27.164-75.294-60.552 0-33.246 33.777-60.294 75.294-60.294 11.525 0 29.289 2.236 39.07 5.976l17.829 6.813V115.181a23.893 23.893 0 0 1 18.593-23.36L441.98 34.906a40.587 40.587 0 0 1 8.3-.906c13.866 0 20.9 8.26 20.9 24.55v311.323c0 33.246-33.775 60.294-75.289 60.294s-75.3-27.048-75.3-60.294c0-33.392 33.777-60.557 75.3-60.557 11.532 0 29.315 2.251 39.112 6.018l17.854 6.865V147.672l-261.449 66.4v203.376C191.406 450.836 157.631 478 116.116 478z"
          fill={fill}
          data-original="#000000"
        ></path>
      </g>
    </svg>
  );
};

export default MusicIcon