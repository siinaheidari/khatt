import {
  AriaAttributes,
  ComponentType,
  CSSProperties,
  ForwardRefExoticComponent,
  HTMLProps,
  RefAttributes,
  SVGProps
} from 'react';

interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill?: string;
  viewBox?: string;
  className?: string;
  style?: CSSProperties;
}

interface IconBaseProps extends HTMLProps<HTMLSpanElement> {
  spin?: boolean;
  rotate?: number;
}

interface IconComponentProps extends IconBaseProps {
  viewBox?: string;
  component?: ComponentType<CustomIconComponentProps | SVGProps<SVGSVGElement>> | ForwardRefExoticComponent<CustomIconComponentProps>;
  ariaLabel?: AriaAttributes['aria-label'];
}

declare const Icon: ForwardRefExoticComponent<Omit<IconComponentProps, 'ref'> & RefAttributes<HTMLSpanElement>>;

type GetProps<T extends ComponentType<any> | object> = T extends ComponentType<infer P> ? P : T extends object ? T : never;

type TCustomIconProps = GetProps<typeof Icon>;

interface TCustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
  viewBox?: string;
  className?: string;
  style?: CSSProperties;
}

export type TIconsProps = Partial<TCustomIconProps>

export type TIconsSvgProps = Partial<TCustomIconComponentProps>