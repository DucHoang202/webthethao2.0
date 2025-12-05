import { useEffect, useState } from "react";

export function useIsMobile(max = 767) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= max);

        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, [max]);

    return isMobile;
}
