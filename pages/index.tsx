import { useCallback } from "react";
import MyLayout from "@components/MyLayout";
import useAuth from "@libs/auth";
import type { NextPage } from "next";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";

const Home: NextPage = () => {
    const user = useAuth(false);

    // //redux example
    // const dispatch = useDispatch();
    // const value = useSelector(({ counter }) => counter.value);

    // const plus = useCallback(
    //     ({ value }:any) => {
    //         dispatch(counterActions.increment({ value }));
    //     },
    //     [dispatch],
    // );

    // const minus = useCallback(
    //     ({ value }:any) => {
    //         dispatch(counterActions.decrement({ value }));
    //     },
    //     [dispatch],
    // );
    // //redux example

    return (
        <MyLayout>
            Example#1
            {/* <div>
                <h1>Counter</h1>
                <button onClick={() => minus({ value })}>-</button>
                <span>{value}</span>
                <button onClick={() => plus({ value })}>+</button>
            </div> */}
        </MyLayout>
    );
};

export default Home;
