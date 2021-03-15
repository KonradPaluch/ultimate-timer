import React from 'react';
import styles from './buttonStyles.module.css';
export const ResetButton = (props) => <button className={styles.buttons} onClick={props.clicked}>{props.text}</button>;
