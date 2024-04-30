import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
} from "react";

export const Input = forwardRef(function Input(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > & { error?: string },
  ref?: LegacyRef<HTMLInputElement>,
) {
  return (
    <span>
      <input
        ref={ref}
        className={props.error ? "error full-width" : "full-width"}
        {...props}
      />
      {props.error && <p className="error-message mt-2">{props.error}</p>}
    </span>
  );
});
