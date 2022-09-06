import MyLayout from "@components/MyLayout";
import useAuth from "@libs/auth";
import { NextPage } from "next";

const Recurit: NextPage = () => {
    const user = useAuth(false);
    return <MyLayout>Recurit</MyLayout>;
};

export default Recurit;
