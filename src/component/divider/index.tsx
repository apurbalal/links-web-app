import { CommonProps } from "@/utils/styleUtils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export const Divider = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> &
    CommonProps,
) => <hr {...props} />;
