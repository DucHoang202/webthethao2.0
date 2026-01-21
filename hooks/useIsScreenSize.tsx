'use client'
import useMediaQuery from "react-responsive";
const useIsScreenSize = (screen: number) => {
    const isMobile = useMediaQuery({ maxWidth: screen });
    return { isMobile };
}
export default useIsScreenSize