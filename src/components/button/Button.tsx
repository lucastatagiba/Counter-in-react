import styles from "./button.module.sass";

export interface IButtonProps {
  children: string;
  func: () => void;
}

const Button = ({ children, func }: IButtonProps) => {
  return (
    <button className={styles.button} onClick={() => func()}>
      {children}
    </button>
  );
};
export default Button;
