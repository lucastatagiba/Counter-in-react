import styles from "./title.module.sass";

export interface ITitleProps {
  children: string;
}

const Title = ({ children }: ITitleProps) => {
  return <h2 className={styles.title}>{children}</h2>;
};
export default Title;
