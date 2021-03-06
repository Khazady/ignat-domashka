import styles from "./Preloader.module.css"
import preloader from "./preloader.svg";
import React from "react";

export function Preloader() {
    return <div className={styles.spinnerContainer}>
        <img src={preloader} alt={"Preloader spinner"}/>
    </div>;
}