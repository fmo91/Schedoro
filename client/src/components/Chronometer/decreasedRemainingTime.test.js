import decreasedRemainingTime from './decreasedRemainingTime';

describe("The decreasing time function", () => {
    it("Decreases one second and left minutes unaltered when seconds are not 0", () => {
        const { minutes, seconds } = decreasedRemainingTime({
            minutes: 24,
            seconds: 30,
        });

        expect(minutes).toEqual(24);
        expect(seconds).toEqual(29);
    });
    
    it("Decreases one minute and set 59 seconds when seconds are 0", () => {
        const { minutes, seconds } = decreasedRemainingTime({
            minutes: 24,
            seconds: 0,
        });

        expect(minutes).toEqual(23);
        expect(seconds).toEqual(59);
    });

    it("Can not bring negative values", () => {
        const { minutes, seconds } = decreasedRemainingTime({
            minutes: 0,
            seconds: 0,
        });

        expect(minutes).toEqual(0);
        expect(seconds).toEqual(0);
    });
});