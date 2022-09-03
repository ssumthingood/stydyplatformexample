import { useRouter } from "next/router";
import { userAgent } from "next/server";
import { useEffect, useState } from "react";

export default function useAuth(required: Boolean) {
    const [user, setUser] = useState();
    const router = useRouter();
    useEffect(() => {
        if (required) {
            {
                user === null ? router.replace("/enter") : null;
            }
        }
    }, []);
    return { user };
}
