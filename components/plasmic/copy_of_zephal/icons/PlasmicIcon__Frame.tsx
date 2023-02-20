// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FrameIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FrameIcon(props: FrameIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M12 9v13m0 0l3-3m-3 3l-3-3m3-13a2 2 0 110-4 2 2 0 010 4z"}
        stroke={"currentColor"}
        strokeWidth={"1.174"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default FrameIcon;
/* prettier-ignore-end */
