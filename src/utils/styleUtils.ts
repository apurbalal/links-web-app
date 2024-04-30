export const mapPropsToClassName = (
  props: Record<string, any>,
  keys: string[],
) => {
  const classNames = Object.keys(props)
    .filter((key) => keys.includes(key) && props[key])
    .map((key) => camelToKebabCase(key));

  // handle className passed in props
  if (props.className) {
    classNames.push(props.className);
  }

  return classNames;
};

export const filterOutProps = (props: Record<string, any>, keys: string[]) => {
  const filteredProps = { ...props };
  keys.forEach((key) => {
    delete filteredProps[key];
  });

  return filteredProps;
};

const camelToKebabCase = (str: string) =>
  str.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);

const buttonVariant = ["primary", "outline", "link", "danger"] as const;
const commonProps = [
  "fullWidth",
  "auto",
  "p-1",
  "p-2",
  "p-3",
  "p-4",
  "p-5",
  "pt-1",
  "pt-2",
  "pt-3",
  "pt-4",
  "pt-5",
  "pb-1",
  "pb-2",
  "pb-3",
  "pb-4",
  "pb-5",
  "m-1",
  "m-2",
  "m-3",
  "m-4",
  "m-5",
  "mt-1",
  "mt-2",
  "mt-3",
  "mt-4",
  "mt-5",
  "mb-1",
  "mb-2",
  "mb-3",
  "mb-4",
  "mb-5",
  "mw-default",
  "relative",
] as const;

type InferProps<K extends readonly string[]> = {
  [P in K[number]]?: boolean;
};

export type ButtonVariant = InferProps<typeof buttonVariant>;
export type CommonProps = InferProps<typeof commonProps>;

export const mapButtonProps = (props?: Record<string, any>) =>
  props
    ? {
        classNames: mapPropsToClassName(props, [
          ...buttonVariant,
          ...commonProps,
        ]),
        filteredProps: filterOutProps(props, [
          ...buttonVariant,
          ...commonProps,
        ]),
      }
    : { classNames: [], filteredProps: {} };

const containerProps = [
  "row",
  "col",
  "center",
  "gap-1",
  "gap-2",
  "gap-3",
  "gap-4",
  "gap-5",
  "fullHeight",
  "spaceBetween",
  "flexWrap",
  "overflow-scroll",
  "scrollBarHidden",
] as const;
export type ContainerProps = InferProps<typeof containerProps>;

const containerVariant = ["card"] as const;
export type ContainerVariant = InferProps<typeof containerVariant>;
export const mapContainerProps = (props?: Record<string, any>) =>
  props
    ? {
        classNames: mapPropsToClassName(props, [
          ...containerProps,
          ...commonProps,
          ...containerVariant,
        ]),
        filteredProps: filterOutProps(props, [
          ...containerProps,
          ...commonProps,
          ...containerVariant,
        ]),
      }
    : { classNames: [], filteredProps: [] };

const textVariant = ["level-sm", "level-md", "level-lg"] as const;
const textProps = ["textCenter"] as const;
export type TextVariant = InferProps<typeof textVariant>;
export type TextProps = InferProps<typeof textProps>;
export const mapTextProps = (props?: Record<string, any>) =>
  props
    ? {
        classNames: mapPropsToClassName(props, [
          ...textProps,
          ...textVariant,
          ...commonProps,
        ]),
        filteredProps: filterOutProps(props, [
          ...textProps,
          ...textVariant,
          ...commonProps,
        ]),
      }
    : { classNames: [], filteredProps: [] };

export const headingVariant = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;
export type HeadingVariant = InferProps<typeof headingVariant>;
export const mapHeadingProps = (props?: Record<string, any>) =>
  props
    ? {
        classNames: mapPropsToClassName(props, [...textProps, ...commonProps]),
        filteredProps: filterOutProps(props, [
          ...textProps,
          ...commonProps,
          ...headingVariant,
        ]),
      }
    : { classNames: [], filteredProps: {} };
