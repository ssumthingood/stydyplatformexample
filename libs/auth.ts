import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useAuth(required: Boolean) {
    const [user, setUser] = useState(undefined);
    const router = useRouter();

    const goLogin = () => {
        router.replace("/enter");
    };

    useEffect(() => {
        if (required) {
            {
                user === undefined ? userCallback(goLogin) : null;
            }
        }
    }, []);

    return { user };
}

const userCallback = (callback: () => void) => {
    window.alert("권한 없음!");
    callback();
};
