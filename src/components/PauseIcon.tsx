import * as React from 'react';

const PauseIcon: React.FC = () => {
  return (
    <svg
      style={{ transform: 'scale(.7)', fill: 'white' }}
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      width="48"
    >
      <path d="M28.25 38V10H36v28ZM12 38V10h7.75v28Z" />
    </svg>
  );
};

export default PauseIcon;
