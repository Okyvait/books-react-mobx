import * as styles from './label.module.css';

interface LabelProps {
  text: string;
  labelFor?: string;
  children?: JSX.Element;
}

export const Label = ({ labelFor, children, text }: LabelProps) => {
  return (
    <label htmlFor={labelFor}>
      <span className={styles.text}>{text}</span>
      <br />
      {children}
    </label>
  );
};
