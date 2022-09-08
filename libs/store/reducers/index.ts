import { combineReducers } from "redux";
import counter from "./count";

const rootReducer = combineReducers({
    counter,
    //reducers폴더에서 생성한 모든 reducer를 rootReducer에 포함
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
