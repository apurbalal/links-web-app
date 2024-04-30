import {
  CommonProps,
  ContainerProps,
  ContainerVariant,
  mapContainerProps,
} from "@/utils/styleUtils";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export const Container = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> &
    ContainerProps &
    CommonProps &
    ContainerVariant,
) => {
  const { classNames, filteredProps } = mapContainerProps(props);
  return (
    <div {...filteredProps} className={classNames.join(" ")}>
      {props.children}
    </div>
  );
};
