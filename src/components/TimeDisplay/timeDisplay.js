import React from 'react';
import classes from './timeDisplay.module.css';

export const TimeDisplay = (props) => {
  let calculationsTime = props.milliseconds;

  const hours = Math.floor(calculationsTime / 3600000);
  if (hours > 0){
    calculationsTime = calculationsTime - hours * 3600000;
  }
  let outputHours = hours.toString();
  if (hours < 10){
    outputHours = '0' + outputHours;
  }

  const minutes = Math.floor(calculationsTime / 60000);
  if (minutes > 0){
    calculationsTime = calculationsTime - minutes * 60000;
  }
  let outputMinutes = minutes.toString();
  if (minutes < 10){
    outputMinutes = '0' + outputMinutes;
  }

  const seconds = Math.floor(calculationsTime / 1000);
  let outputSeconds = seconds.toString();
  if (seconds < 10){
    outputSeconds = '0' + outputSeconds;
  }

  return(
    <div className={classes.mainDisplay}>
      {outputHours} : {outputMinutes} : {outputSeconds}
    </div>
  );
}

export default TimeDisplay;
