import { useState } from "react";
import styles from "./Counter.module.css";

export interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  label: string;
}

export const Counter = ({
  count,
  onIncrement,
  onDecrement,
  label,
}: CounterProps) => {
  return (
    <div className={styles.counter}>
      <h2>
        {label}: {count}
      </h2>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
};

export const CounterPage = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementCounter1 = () => setCounter1(counter1 + 1);
  const decrementCounter1 = () => setCounter1(counter1 - 1);

  const incrementCounter2 = () => setCounter2(counter2 + 1);
  const decrementCounter2 = () => setCounter2(counter2 - 1);

  const total = counter1 + counter2;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h1 className={styles.total}>Total: {total}</h1>

        <Counter
          label="Counter 1"
          count={counter1}
          onIncrement={incrementCounter1}
          onDecrement={decrementCounter1}
        />
        <Counter
          label="Counter 2"
          count={counter2}
          onIncrement={incrementCounter2}
          onDecrement={decrementCounter2}
        />
      </div>
    </div>
  );
};
