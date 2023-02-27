import * as styles from './button.module.css';

interface ButtonProps {
  onClick();
  children?: JSX.Element | string;
  classNames?: string;
}

export const Button = ({ children, onClick, classNames = '' }: ButtonProps) => {
  const handleClick = () => onClick();
  return (
    <button className={`${styles.btn} ${classNames}`} onClick={handleClick}>
      {children}
    </button>
  );
};
