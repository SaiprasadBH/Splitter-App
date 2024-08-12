import React, { useState } from "react";
import styles from "./TipSelector.module.css";
import "../../global.css";
import "../../variables.css";

export interface TipSelectorProps {
  onSelectTip: (tip: number) => void;
}

export const TipSelector: React.FC<TipSelectorProps> = ({ onSelectTip }) => {
  const tips = [5, 10, 15, 25, 50] as const;
  const [customTip, setCustomTip] = useState<number | null>(null);

  const handleTipButtonClick = (tip: number) => {
    setCustomTip(null); // Clear custom tip input when a button is clicked
    onSelectTip(tip);
  };

  const handleCustomInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setCustomTip(value);
    onSelectTip(value);
  };

  return (
    <div className={styles.tipSelector}>
      <label className={styles.label}>Select Tip %</label>
      <div className={styles.buttons}>
        {tips.map((tip) => (
          <button
            key={tip}
            className={`${styles.button}`}
            onClick={() => handleTipButtonClick(tip)}
          >
            {tip}%
          </button>
        ))}
        <input
          value={customTip !== null ? customTip : ""}
          onChange={handleCustomInput}
          className={styles.customInput}
          type="number"
          placeholder="Custom"
        />
      </div>
    </div>
  );
};

export default TipSelector;
