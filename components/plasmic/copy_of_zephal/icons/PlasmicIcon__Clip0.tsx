// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Clip0IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Clip0Icon(props: Clip0IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 966 437"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M966 0H0v437h966V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Clip0Icon;
/* prettier-ignore-end */
