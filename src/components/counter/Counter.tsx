import Button from "components/button/Button";
import Title from "components/tittle/Title";
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
  }, [countAuthomatic]);

  return (
    <section className={styles.container}>
      <div className={styles.countAuthomatic}>
        <Title>Authomatic counter</Title>
        <span className={styles.counterNumber}>{countAuthomatic}</span>
        <Button func={resetCounter}>Reset counter</Button>
      </div>

      <div className={styles.countManual}>
        <Title>Manual counter</Title>
        <span className={styles.counterNumber}>{countManual}</span>
        <div className={styles.buttonContainer}>
          <Button func={() => setCountManual(countManual - 1)}>
            Decrement counter
          </Button>
          <Button func={() => setCountManual(countManual + 1)}>
            Increment counter
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Counter;
