import { useEffect, useState } from "react";
import styles from "./counter.module.sass";

const Counter = () => {
  const [countAuthomatic, setCountAuthomatic] = useState<number>(0);
  const [countManual, setCountManual] = useState<number>(0);

  const resetCounter = () => {
    setCountAuthomatic(0);
  };

  useEffect(() => {
    const interval = setInterval(
      () => setCountAuthomatic((oldState) => oldState + 1),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.countAuthomatic}>
        <h2>Authomatic counter</h2>
        <span className={styles.counterNumber}>{countAuthomatic}</span>
        <button onClick={resetCounter}>Reset counter</button>
      </div>

      <div className={styles.countManual}>
        <h2>Manual counter</h2>
        <span className={styles.counterNumber}>{countManual}</span>
        <div className={styles.buttonContainer}>
          <button
            onClick={() => {
              setCountManual(countManual - 1);
            }}
          >
            Decrement counter
          </button>
          <button
            onClick={() => {
              setCountManual(countManual + 1);
            }}
          >
            Increment counter
          </button>
        </div>
      </div>
    </section>
  );
};
export default Counter;
