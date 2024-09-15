import Icon from "../icon";
import * as icons from "../index";
import styles from "./index.module.css";

export default function Example(): JSX.Element {
  return (
    <div className={styles.container}>
      {Object.keys(icons).map((icon, i) => {
        return (
          <div key={i} className={styles.iconContainer}>
            <div className={styles.icon}>
              <Icon iconName={icon as keyof typeof icons} />
            </div>
            <span className={styles.label}>
              {icon.replace(/([A-Z])/g, " $1").trim()}
            </span>
          </div>
        );
      })}
    </div>
  );
}
