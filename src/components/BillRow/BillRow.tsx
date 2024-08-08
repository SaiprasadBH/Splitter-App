import styles from "./BillRow.module.css";
export interface BillRowProps {
  /**
   * This is to pass the label
   */
  label1: string;
  label2: string;
  price: string;
}
export function BillRow(props: BillRowProps) {
  return (
    <div className={styles.priceDiv}>
      <div className={styles.tipAmount}>
        <p>
          {props.label1}/<br></br>
          {props.label2}
        </p>
      </div>
      <div className={styles.price}>$ {props.price}</div>
    </div>
  );
}
export default BillRow;
