import { memo } from "react";
import * as Icons from "./index";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | "auto";
  iconName: keyof typeof Icons;
};

const Icon = memo(function Icon({
  size = "auto",
  iconName,
  ...props
}: IconProps): JSX.Element {
  return (
    <svg
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

export default Icon;
