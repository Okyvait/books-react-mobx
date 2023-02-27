import * as styles from './input.module.css';

interface InputProps {
  placeholder?: string;
}

export const Input = ({ placeholder }: InputProps) => {
  return <input className={styles.input} placeholder={placeholder} />;
};
