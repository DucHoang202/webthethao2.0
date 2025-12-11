'use client'
import { useIsCustomView } from "@/hooks/useIsCustomView";
import { useEffect, useState, JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
interface SwiperRowProps {
    items: any[];
    active?: number;
    gap?: number;
    style?: React.CSSProperties;
}

const SwiperRow = ({ items, active = 0, gap = 12, style = {} }: SwiperRowProps) => {
    const [activeIndex, setActiveIndex] = useState(active);
    const isMobile = useIsCustomView(767);

    useEffect(() => {
        setActiveIndex(active);
    }, [active]);

    return (
        <div className="search header" style={style}>
            <div className="search__item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                    <path d="M2 11.7888L5.72414 7.59914L8.2069 10.3922L14 3.875" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.8623 3.875H14.0002V8.53017" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            {/* Swiper container */}
            <Swiper
                slidesPerView="auto"
                freeMode={true}
                modules={[FreeMode]}
                spaceBetween={gap}
                className="search-container"
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index} style={{ width: "auto" }}>
                        <div
                            className={`search__item ${activeIndex === index ? "active" : ""} ${index === items.length - 1 ? "last" : ""}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            {item.icon && <span>{item.icon}</span>}
                            <span className="name">{isMobile ? "" : "#"}{item.name}</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="search__item hideInMobile ">
                <div className="name bg-gray">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.9996 14L11.0996 11.1" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <input type="text" className="search" placeholder="Tìm kiếm theo chủ đề hoặc bộ môn..." />
                </div>
            </div>
        </div>
    );
};

export default SwiperRow;
