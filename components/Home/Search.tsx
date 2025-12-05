'use client'
import React, { useEffect, useRef } from "react";
import SwiperRow from "../Schedule/SwiperRow";
import { CSSProperties } from "react";

const Search: React.FC<{ style?: CSSProperties }> = ({ style }) => {

    const lastScrollTop = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById("search-bar-hidden") as HTMLElement;

            if (!header) return;

            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop.current) {
                // Kéo xuống → ẩn
                header.classList.add("hide");
            } else {
                // Kéo lên → hiện
                header.classList.remove("hide");
            }

            lastScrollTop.current = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const search = [
        {
            name: "TRENDING NOW", nav: "", icon: null


        },
        { name: "Hanoi Open Pool", nav: "", icon: null },
        { name: "PPA MB Vietnam Cup", nav: "", icon: null },
        { name: "PPA MB Vietnam Cup", nav: "", icon: null },
        { name: "PPA MB Vietnam Cup", nav: "", icon: null },
        { name: "PPA MB Vietnam Cup", nav: "", icon: null }
    ];

    return (
        <div
            id="search-bar-hidden"
            className="search-bar-hidden"
            style={{ ...style, background: "#1A1A1A" }}

        >
            <SwiperRow
                items={search}
                active={0}
                gap={14}
                style={{ ...style, background: "#1A1A1A" }}
            />
        </div>
    );
};

export default Search;
