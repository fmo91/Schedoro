export default ({ minutes = 0, seconds = 0 }) => {
    if (minutes === 0 && seconds === 0) {
        return {
            minutes: 0,
            seconds: 0,
        };
    }

    return {
        minutes: seconds === 0 ? minutes - 1 : minutes,
        seconds: seconds === 0 ? 59 : seconds - 1,
    };
};