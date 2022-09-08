import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useAuth(required: Boolean) {
    const [user, setUser] = useState(null);
    const router = useRouter();

    const goLogin = () => {
        router.replace("/enter");
    };

    useEffect(() => {
        if (required) {
            {
                user === null ? goLogin() : null;
                //왜 두번씩 실행될까...
            }
        }
    }, []);

    return { user };
}
