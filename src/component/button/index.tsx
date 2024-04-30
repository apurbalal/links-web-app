import { ButtonVariant, CommonProps, mapButtonProps } from '@/utils/styleUtils'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > &
    ButtonVariant &
    CommonProps,
) => {
  const { classNames, filteredProps } = mapButtonProps(props);
  return (
    <button className={classNames.join(" ")} {...filteredProps}>
      {props.children}
    </button>
  )
}