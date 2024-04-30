import {
  CommonProps,
  TextProps,
  TextVariant,
  mapTextProps,
} from "@/utils/styleUtils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export const Text = (
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > &
    CommonProps &
    TextVariant &
    TextProps,
) => {
  const { classNames, filteredProps } = mapTextProps(props);
  return (
    <p {...filteredProps} className={classNames.join(" ")}>
      {props.children}
    </p>
  );
};
