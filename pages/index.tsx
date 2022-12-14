import { useCallback } from "react";
import MyLayout from "@components/MyLayout";
import useAuth from "@libs/auth";
import type { NextPage } from "next";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@libs/store/reducers";
import { countDown, countUp } from "@libs/store/actions/count";

const Home: NextPage = () => {
    const user = useAuth(false);

    const dispatch = useDispatch();
    const { value } = useSelector((state: RootState) => state.counter);

    const upEvent = useCallback(() => {
        dispatch(countUp(2));
    }, []);

    const downEvent = useCallback(() => {
        dispatch(countDown(2));
    }, []);

    return (
        <MyLayout>
            Example#1
            <div>
                <button onClick={upEvent}>Up</button>
                <div>{value}</div>
                <button onClick={downEvent}>Down</button>
            </div>
        </MyLayout>
    );
};

export default Home;
