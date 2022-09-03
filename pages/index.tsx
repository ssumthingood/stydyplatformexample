import MyLayout from "@components/Layout";
import useAuth from "@libs/auth";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    const user = useAuth(false);
    console.log(user);
    return <MyLayout>Example#1</MyLayout>;
};

export default Home;
