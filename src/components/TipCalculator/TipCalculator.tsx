import styles from "./TipCalculator.module.css";
import BillRow from "../BillRow";
import { useEffect, useState } from "react";
import "../../global.css";
import "../../variables.css";

export interface TipCalculatorProp {
  tipAmount: string;
  totalAmount: string;
  onReset: () => void;
}

export function TipCalculator({
  onReset,
  tipAmount,
  totalAmount,
}: TipCalculatorProp) {
  const [resetButtonClass, setResetButtonClass] = useState<string>(
    styles.resetButton
  );

  useEffect(() => {
    if (Number(totalAmount) <= 0) {
      setResetButtonClass(`${styles.resetButton} ${styles.disableReset}`);
    } else {
      setResetButtonClass(styles.resetButton);
    }
  }, [totalAmount]);

  return (
    <div className={styles.parentDiv}>
      <div className={styles.BillRowDiv}>
        <BillRow label="Tip Amount" value={tipAmount} />
        <BillRow label="Total" value={totalAmount} />
      </div>
      <div className="buttonDiv">
        <button
          onClick={onReset}
          className={resetButtonClass}
          disabled={Number(totalAmount) <= 0}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default TipCalculator;
