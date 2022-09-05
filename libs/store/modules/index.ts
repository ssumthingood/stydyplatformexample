import { AnyAction, combineReducers, EmptyObject } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const reducer = (state: EmptyObject | undefined, action: AnyAction) => {
    if (action.type === HYDRATE) {
        return {
            ...state,
            ...action.payload,
        };
    }
    return combineReducers({
        // 여기에 modules 폴더 내의 관리하려는 상태의 모듈을 추가
    })(state, action);
};

export default reducer;
