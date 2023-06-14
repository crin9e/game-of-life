import React from "react";
import styles from "./NotFound.module.css";

export const NotFound: React.FunctionComponent = () => {
  return (
    <div className={styles.formWrapper}>
      <div className={styles.form}>
        <p>Page not found</p>
      </div>
    </div>
  );
};
