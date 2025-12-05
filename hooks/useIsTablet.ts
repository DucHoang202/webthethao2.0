import { useEffect, useState } from "react";

export function useIsTablet(max = 1023) {
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const check = () => setIsTablet(window.innerWidth <= max);

        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, [max]);

    return isTablet;
}
