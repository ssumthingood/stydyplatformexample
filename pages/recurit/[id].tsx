import MyLayout from "@components/MyLayout";
import useAuth from "@libs/auth";
import { NextPage } from "next";

const RecuritDetail: NextPage = () => {
    const user = useAuth(true);
    return <MyLayout>RecuritDetail</MyLayout>;
};

export default RecuritDetail;
