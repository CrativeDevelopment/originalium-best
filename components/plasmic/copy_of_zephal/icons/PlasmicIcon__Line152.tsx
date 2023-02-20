// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line152IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line152Icon(props: Line152IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 105 4"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        d={"M2 2h101"}
      ></path>
    </svg>
  );
}

export default Line152Icon;
/* prettier-ignore-end */
