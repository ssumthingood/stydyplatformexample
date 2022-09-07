import { AnyAction, CombinedState, combineReducers, EmptyObject } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import counter from "./counter";

const reducer = (state: CombinedState<{ counter: { value: number } }> | undefined, action: AnyAction) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        };
    }
    return combineReducers({
        counter,
        // 여기에 modules 폴더 내의 관리하려는 상태의 모듈을 추가
    })(state, action);
};

export default reducer;
