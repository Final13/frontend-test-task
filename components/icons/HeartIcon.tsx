import React, { SVGProps } from "react";

type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  className?: string;
  onAnimationEnd?: React.AnimationEventHandler<SVGSVGElement>;
  x?: number;
};

export const HeartIcon: React.FC<IconSvgProps> = ({
  size = '128',
  className,
  color = '#000000',
  onAnimationEnd,
  x
}) => (
  <svg
    style={{ marginLeft: x, position: 'absolute', bottom: 0 }} 
    onAnimationEnd={onAnimationEnd} 
    stroke={color}
    fill={color}
    strokeWidth="0"
    viewBox="0 0 512 512"
    height={size}
    width={size}
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56z"></path>
  </svg>
);