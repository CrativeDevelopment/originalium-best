// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse24IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse24Icon(props: Ellipse24IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 419 419"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#6vE4kirQPMa)"}>
        <circle
          cx={"209.5"}
          cy={"209.5"}
          r={"59.5"}
          fill={"currentColor"}
        ></circle>
      </g>

      <defs>
        <filter
          id={"6vE4kirQPMa"}
          x={"0"}
          y={"0"}
          width={"419"}
          height={"419"}
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
            result={"effect1_foregroundBlur_302_48"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse24Icon;
/* prettier-ignore-end */