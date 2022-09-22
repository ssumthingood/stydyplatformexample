import { INCREASE, DECREASE } from "./actionTypes";

export const countUp = (plus: number) => {
    return {
        type: INCREASE,
        plus,
    };
};

export const countDown = (minus: number) => {
    return {
        type: DECREASE,
        minus,
    };
};
