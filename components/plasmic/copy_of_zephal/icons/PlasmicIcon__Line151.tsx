// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line151IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line151Icon(props: Line151IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 405 340"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#T4fNz4F6eUa)"}>
        <path
          stroke={"currentColor"}
          strokeWidth={"40"}
          d={"M150 170h105"}
        ></path>
      </g>

      <defs>
        <filter
          id={"T4fNz4F6eUa"}
          x={"0"}
          y={"0"}
          width={"405"}
          height={"340"}
          filterUnits={"userSpaceOnUse"}
          colorInterpolationFilters={"sRGB"}
        >
          <feFlood floodOpacity={"0"} result={"BackgroundImageFix"}></feFlood>

          <feBlend
            in={"SourceGraphic"}
            in2={"BackgroundImageFix"}
            result={"shape"}
          ></feBlend>

          <feGaussianBlur
            stdDeviation={"75"}
            result={"effect1_foregroundBlur_105_33"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Line151Icon;
/* prettier-ignore-end */
