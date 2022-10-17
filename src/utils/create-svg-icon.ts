import React from "react";

type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface SVGIconProps extends React.SVGProps<SVGSVGElement> {
  size?: IconSize;
}

const iconSize: Record<IconSize, string> = {
  xs: "1rem",
  sm: "1.5rem",
  md: "2rem",
  lg: "2.5rem",
  xl: "3.5rem",
};

export const createSvgIcon =
  (
    svg: (p: SVGIconProps) => React.ReactElement<React.SVGProps<SVGSVGElement>>
  ) =>
  ({ size = "sm", ...props }: SVGIconProps) =>
    React.cloneElement(svg(props), {
      width: iconSize[size],
      height: iconSize[size],
      ...props,
    });
