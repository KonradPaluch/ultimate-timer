import React from 'react';
import {ResetButton} from "./resetButton";
import {StartButton} from "./startButton";
export const ButtonLine = (props) => {
    return(
        <div>
            <StartButton text={props.startText}
                         clicked={props.startClicked}/>
            <ResetButton text={props.resetText}
                         clicked={props.resetClicked}/>
        </div>
    );
}