import styles from "./BillRow.module.css";
import "../../variables.css";
import "../../global.css";

export interface BillRowProps {
  label: string;
  value: number | string;
}

const BillRow = ({ label, value }: BillRowProps) => {
  const formattedValue = typeof value === "string" ? value : value.toFixed(2);

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <span>{label}</span>
        <br />
        <span>{"/ person"}</span>
      </div>
      <span className={styles.amount}>${formattedValue}</span>
    </div>
  );
};

export default BillRow;
