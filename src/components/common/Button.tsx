import React from 'react';
import styles from '@/styles/components/SignForm.module.scss';

const Button = ({ label }: { label: string }) => {
  return (
    <button className={styles['form-button']} type="submit">
      {label}
    </button>
  );
};

export default Button;
