// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type _IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function _Icon(props: _IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 57 41"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M25.028 15.634C25.028 6.062 19.538 0 11.95 0 4.844 0 0 4.946 0 11.965c0 7.02 4.683 11.008 10.496 11.008a12.7 12.7 0 004.521-.798c0 5.584-5.006 9.891-11.949 11.167V41c12.918-1.595 21.96-11.965 21.96-25.366zm31.972 0C57 6.062 51.51 0 43.92 0c-7.104 0-11.948 4.946-11.948 11.965 0 7.02 4.52 11.008 10.334 11.008a12.7 12.7 0 004.521-.798c0 5.584-4.844 9.891-11.787 11.167V41C47.958 39.405 57 29.035 57 15.634z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default _Icon;
/* prettier-ignore-end */
