'use client'
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

interface SwiperRowProps {
    items: any[];
    active?: number;
    gap?: number;
    style?: React.CSSProperties;
    className?: string
}

interface CatProps {
    onCatChange: (cat: string) => void;
    items: any[]
}

const Cat = ({ items, active = 0, gap = 12, style = {}, onCatChange, className }: SwiperRowProps & CatProps) => {
    const [activeIndex, setActiveIndex] = useState(active);

    const handleSelect = (item: string, index: number) => {
        setActiveIndex(index);
        onCatChange(item);
    };

    // Sync khi prop active thay đổi
    useEffect(() => {
        setActiveIndex(active);
        onCatChange(items[active]);
    }, [active]);

    return (
        <section>
            <div className={`search overflow`} style={style}>
                <Swiper
                    freeMode={true}
                    modules={[FreeMode]}
                    slidesPerView="auto"
                    spaceBetween={gap}
                    className="search-container h-auto"
                >
                    {items.map((item, index) => (
                        <SwiperSlide
                            key={index}
                            style={{ width: "auto" }} // quan trọng để nút co theo text
                        >
                            <div
                                className={`cat-btn ${activeIndex === index ? "active" : ""}`}
                                onClick={() => handleSelect(item, index)}
                            >
                                <a className="name">{item}</a>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Cat;
