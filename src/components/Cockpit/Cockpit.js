import React from 'react'
import logo from "../../logo.svg";
import styles from "./Cockpit.module.css";
// import Aux from  "../../hoc/Auxiliary"

const cockpit = (props) => {
    const classes = [];
    let buttonClass = styles.button;
    if (props.persons.length <= 2) {
        classes.push(styles.red);
    }
    if (props.persons.length <= 1) {
        classes.push(styles.bold);
    }
    if (props.showPersons) {
        buttonClass = [styles.button, styles.Red].join(' ');
    }
    return (
        <>
            <h1>{props.appTitle}</h1>
            <img src={logo} className={styles["Cockpit-logo"]} alt="logo"/>
            <p className={classes.join(' ')}>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className={styles["Cockpit-link"]}
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <button className={buttonClass} onClick={props.clicked}>Toggle Persons</button>
            {/*<button onClick={props.login}>Login</button>*/}
        </>
        //<div className={styles.Cockpit}>

        // </div>
    )
};

export default React.memo(cockpit);