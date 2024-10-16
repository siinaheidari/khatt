import { FC } from 'react';
import { TIconsProps, TIconsSvgProps } from '@/templates/icons/types/icons';
import { clsx } from 'clsx';

const svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false'
};

const SvgIcon: FC<Omit<TIconsProps, 'component'> & { component?: any }> = (props) => {
  const {
    className,
    component,
    viewBox,
    spin,
    rotate,
    tabIndex,
    onClick,
    children,
    ...restProps
  } = props;
  
  const svgClassString = clsx({
    [ `anticon-spin` ]: !!spin
  });
  
  const svgStyle = rotate
    ? {
      msTransform: `rotate(${ rotate }deg)`,
      transform: `rotate(${ rotate }deg)`
    }
    : undefined;
  
  const innerSvgProps: TIconsSvgProps = {
    ...svgBaseProps,
    className: svgClassString,
    style: svgStyle,
    viewBox
  };
  
  if (!viewBox) {
    delete innerSvgProps.viewBox;
  }
  
  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }
  
  return (
    <span
      role="img"
      { ...restProps }
      tabIndex={ iconTabIndex }
      onClick={ onClick }
      className={ clsx(className, 'anticon') }
    >
      { component(innerSvgProps) }
    </span>
  );
};

export default SvgIcon;
