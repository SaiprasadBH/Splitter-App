import styles from "./TipCalculator.module.css";
import BillRow from "../BillRow";
import { useEffect, useState } from "react";

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
        <BillRow label1="Tip Amount" label2="person" price={tipAmount} />
        <BillRow label1="Total" label2="person" price={totalAmount} />
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
