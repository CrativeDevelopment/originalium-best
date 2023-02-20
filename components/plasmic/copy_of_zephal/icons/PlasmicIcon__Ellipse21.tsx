// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse21IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse21Icon(props: Ellipse21IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 620 620"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g filter={"url(#RM3BNl-2x5a)"}>
        <circle cx={"310"} cy={"310"} r={"60"} fill={"currentColor"}></circle>
      </g>

      <defs>
        <filter
          id={"RM3BNl-2x5a"}
          x={"0"}
          y={"0"}
          width={"620"}
          height={"620"}
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
            stdDeviation={"125"}
            result={"effect1_foregroundBlur_302_14"}
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
}

export default Ellipse21Icon;
/* prettier-ignore-end */
