import React, { useState, useEffect } from "react";
import styles from "./toggleSwitch.module.css";

interface ToggleSwitchProps {
  options: string[];
  onChange: (selectedOption: string) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ options, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  useEffect(() => {
    onChange(selectedOption);
  }, [selectedOption, onChange]);

  const handleToggle = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className={styles.toggleSwitch}>
      <div
        className={`${styles.slider} ${selectedOption === options[1] ? styles.right : ""}`}
      />
      {options.map((option, index) => (
        <button
          key={index}
          className={`${styles.toggleOption} ${selectedOption === option ? styles.active : ""}`}
          onClick={() => handleToggle(option)}
          aria-pressed={selectedOption === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default ToggleSwitch;
