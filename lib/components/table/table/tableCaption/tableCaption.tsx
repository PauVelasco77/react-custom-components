import React from "react";
import cx from "classnames";
import styles from "../index.module.css";

type TableCaptionProps = React.ComponentPropsWithoutRef<"caption"> & {
  children: React.ReactNode;
  className?: string;
  captionSide?: "top" | "bottom";
};

export default function TableCaption({
  children,
  className,
  captionSide,
  ...rest
}: TableCaptionProps): JSX.Element {
  const captionClassNames = cx(
    styles.caption,
    className,
    styles[captionSide ?? "top"],
  );

  return (
    <caption className={captionClassNames} {...rest}>
      {children}
    </caption>
  );
}
