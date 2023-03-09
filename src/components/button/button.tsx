import * as styles from './button.module.css';

interface ButtonProps {
  title?: string;
  disabled?: boolean;
  classNames?: string;
  children?: JSX.Element | string;
  onClick();
}

export const Button = ({ children, onClick, classNames = '', disabled, title }: ButtonProps) => {
  const handleClick = () => onClick();
  return (
    <button disabled={disabled} className={`${styles.btn} ${classNames}`} title={title} onClick={handleClick}>
      {children}
    </button>
  );
};
