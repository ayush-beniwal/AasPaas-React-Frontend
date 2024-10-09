import React, { useEffect } from 'react';
import styles from "./Toast.module.css"; // CSS for toast styling

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 2000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (!message) return null;

  return (
    <div className={styles.toast}>
      {message}
    </div>
  );
}

export default Toast;
