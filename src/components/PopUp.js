import React from "react";

import classes from "./PopUp.module.css";
import Box from "./Box";

const PopUp = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Box className={classes.popup}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onConfirm}>OK</button>
        </footer>
      </Box>
    </div>
  );
};

export default PopUp;
