import styles from "./button.module.css";
import PropTypes from "prop-types";

export default function Title({ text, ...props }) {
  return (
    <h1 className={styles.title} {...props}>
      {text}
    </h1>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
