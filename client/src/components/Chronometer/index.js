import * as React from 'react';
import decreasedRemainingTime from './decreasedRemainingTime';

export default class Chronometer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.runTimer();
    }

    componentWillUnmount() {
        this.timer.unref();
    }

    componentWillReceiveProps(nextProps) {
        const {
            ramainingType = {}
        } = nextProps;

        const {
            minutes = 25,
            seconds = 0,
        } = remainingTime;

        this.setState({
            ...this.state,
            remainingTime,
        });
    }

    runTimer = () => {
        this.timer = setTimeout(() => {
            this.setState({
                ...this.state,
                remainingTime: decreasedRemainingTime(this.state.remainingTime),
            });
            this.runTimer();
        }, 1000);
    };

    render() {
        return (
            <div>
            </div>
        );
    }

}