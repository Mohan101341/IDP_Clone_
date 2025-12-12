import React, { useState } from "react";
import App from "./App";
import styles from "./IdpWrapper.module.css";

const IdpWrapper = () => {
  const [showApp, setShowApp] = useState(false);

  return (
    <div className={styles.idpContainer}>
      <nav className={styles.navbar}>
        <h2 className={styles.title}>Jramsys</h2>


        {/* Toggle Button */}
        <button
          onClick={() => setShowApp(prev => !prev)}
          className={styles.loadButton}
        >
          {showApp ? "Hide Study Abroad Section" : "Show Study Abroad Section"}
        </button>
      </nav>

      <main>
        {showApp ? (
          <App />
        ) : (
          <p>Click the button to load the full application...</p>
        )}
      </main>
    </div>
  );
};

export default IdpWrapper;
