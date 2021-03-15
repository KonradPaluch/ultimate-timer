const TEST_SWITCH = true;   // true -> short times for testing, false -> long normal times
const WORK_TIME = {
    duration: 1500000,
    type: "work"
}
const SHORT_REST = {
    duration: 300000,
    type: "rest"
}
const LONG_REST = {
    duration: 900000,
    type: "long rest"
}
const TIMERS_DEF_LIST = [WORK_TIME, SHORT_REST, WORK_TIME, SHORT_REST, WORK_TIME, LONG_REST];
const ONE_SECOND_TICK = 1000;


export { TEST_SWITCH, TIMERS_DEF_LIST, ONE_SECOND_TICK };