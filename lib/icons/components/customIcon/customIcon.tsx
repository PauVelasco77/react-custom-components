import { memo } from "react";
import cx from "classnames";
import * as Icons from "../../index";

export type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | "auto";
  iconName: keyof typeof Icons;
  className?: string;
};

const CustomIcon = memo(function Icon({
  size = "auto",
  iconName,
  className,
  ...props
}: IconProps): JSX.Element {
  const classNames = cx(className);
  return (
    <svg
      className={classNames}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      width={size}
      height={size}
      {...props}
    >
      {Icons[iconName]()}
    </svg>
  );
});

export default CustomIcon;
