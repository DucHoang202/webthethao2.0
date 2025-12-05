import { useEffect, useState } from "react";

export function useIsCustomView(max: number) {
    const [isCustomView, setIsCustomView] = useState(false);

    useEffect(() => {
        const check = () => setIsCustomView(window.innerWidth <= max);

        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, [max]);

    return isCustomView;
}
