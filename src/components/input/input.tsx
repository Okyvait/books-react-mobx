import * as styles from './input.module.css';

interface InputProps {
  placeholder?: string;
  disabled?: boolean;
  title?: string;
}

export const Input = ({ placeholder, disabled, title }: InputProps) => {
  return <input className={styles.input} title={title} placeholder={placeholder} disabled={disabled} />;
};
