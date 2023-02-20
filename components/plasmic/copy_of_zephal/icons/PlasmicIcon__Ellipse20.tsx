// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse20Icon(props: Ellipse20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 520 520"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#seK-GAsEAa)"}>
        <circle cx={"260"} cy={"260"} r={"60"} fill={"currentColor"}></circle>
      </g>

      <defs>
        <filter
          id={"seK-GAsEAa"}
          x={"0"}
          y={"0"}
          width={"520"}
          height={"520"}
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
            stdDeviation={"100"}
            result={"effect1_foregroundBlur_302_13"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse20Icon;
/* prettier-ignore-end */
