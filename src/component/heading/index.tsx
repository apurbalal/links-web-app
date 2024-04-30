import {
  CommonProps,
  HeadingVariant,
  TextProps,
  headingVariant,
  mapHeadingProps,
} from "@/utils/styleUtils";
import React, { DetailedHTMLProps, HTMLAttributes, useMemo } from "react";

export const Heading = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > &
    CommonProps &
    HeadingVariant &
    TextProps,
) => {
  const component = useMemo(
    () =>
      Object.keys(props).filter((key) =>
        headingVariant.includes(key as keyof HeadingVariant),
      )[0] ?? "h1",
    [props],
  );
  const { classNames, filteredProps } = mapHeadingProps(props);
  return React.createElement(component, {
    ...filteredProps,
    className: classNames.join(" "),
  });
};
