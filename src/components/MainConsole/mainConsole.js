import React from 'react';
import classes from './mainConsole.module.css';
import { TimeDisplay } from "../TimeDisplay/timeDisplay";
import { ButtonLine } from "../ButtonLine/ButtonLine";
import { TEST_SWITCH, TIMERS_DEF_LIST, ONE_SECOND_TICK } from "../TimesConstants";

const TIMERS_LIST = TEST_SWITCH ? TIMERS_DEF_LIST.map(timer => ({
    duration: timer.duration / 60,
    type: timer.type
})) : TIMERS_DEF_LIST;

class MainConsole extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentInterval: undefined,
            milliseconds: TIMERS_LIST[0].duration,
            timesList: TIMERS_LIST,
            lastTimerIndex: 0
        }
        this.baseState = this.state;
    }

    startCountdown = () => {
        this.setState({
            currentInterval: setInterval(() => { this.clockTick(ONE_SECOND_TICK) }, ONE_SECOND_TICK),
        });
    }

    stopCountdown = () => {
        clearInterval(this.state.currentInterval);
        this.setState({
            currentInterval: null
        })
    }

    resetTimer = () => {
        clearInterval(this.state.currentInterval);
        this.setState(this.baseState);
    }

    clockTick = (tickDuration) => {
        const updatedMilliseconds = this.state.milliseconds - tickDuration;
        if (updatedMilliseconds >= 0){
            this.setState({
                milliseconds: updatedMilliseconds
            });
        }
        else {
            this.nextTimer();
        }
    }

    nextTimer = () => {
        const { timesList, lastTimerIndex, currentInterval } = this.state;
        clearInterval(currentInterval);
        let nextTimerIndex = (lastTimerIndex < timesList.length - 1) ? lastTimerIndex + 1 : 0;
        alert(`Time's up!!! Now go ${ timesList[nextTimerIndex].type }!`);
        this.setState({
            milliseconds: timesList[nextTimerIndex].duration,
            lastTimerIndex: nextTimerIndex,
            currentInterval: null
        })
    }

    render(){
        const {currentInterval, milliseconds } = this.state;
        return(
            <div className={classes.mainStyle}>
                <TimeDisplay milliseconds={milliseconds}/>
                <ButtonLine startText={currentInterval ? "stop" : "start"}
                            startClicked={currentInterval ? this.stopCountdown : this.startCountdown}
                            resetText={"reset"}
                            resetClicked={this.resetTimer}/>
            </div>
        )
    }
}

export default MainConsole;