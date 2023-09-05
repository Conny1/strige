import React from "react";
import styles from "./page.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.main}>
      <div style={{ width: "90%" }}>
        <h1>Our Works</h1>
      </div>
      {children}
    </div>
  );
};

export default Layout;
