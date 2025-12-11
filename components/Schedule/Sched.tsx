'use client'
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

interface SwiperRowProps {
    items?: any[];
    active?: number;
    gap?: number;
    style?: React.CSSProperties;
    className?: string
}

interface SchedProps {
    items?: any[];
    onChangeDate?: (date: string) => void;
}

const Sched = ({ items, active = 1, gap = 12, style = {}, className, onChangeDate }: SwiperRowProps & SchedProps) => {
    const [activeIndex, setActiveIndex] = useState(active);
    const [dateRange, setDateRange] = useState(getDateRange());

    useEffect(() => {
        setActiveIndex(active);
    }, [active]);

    useEffect(() => {
        const list = getDateRange();
        setDateRange(list);
        onChangeDate?.(list[active].fullDate);
    }, []);

    const handleSelect = (date: string, index: number) => {
        setActiveIndex(index);
        onChangeDate?.(date);
    };

    function getDateRange() {
        const days = [];
        const today = new Date();
        const weekdayMap = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

        const createItem = (date: Date, isToday = false) => {
            const d = String(date.getDate()).padStart(2, "0");
            const m = String(date.getMonth() + 1).padStart(2, "0");
            const y = date.getFullYear();
            return {
                date: d,
                month: m,
                year: y,
                dayName: isToday ? "Hôm nay" : weekdayMap[date.getDay()],
                fullDate: `${y}-${m}-${d}`
            };
        };

        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        days.push(createItem(yesterday));

        days.push(createItem(today, true));

        for (let i = 1; i <= 7; i++) {
            const next = new Date(today);
            next.setDate(today.getDate() + i);
            days.push(createItem(next));
        }

        return days;
    }

    return (
        <section>
            <div className={`search overflow`} style={style}>
                <Swiper
                    freeMode
                    modules={[FreeMode]}
                    slidesPerView="auto"
                    spaceBetween={gap}
                    className="search-container h-auto"
                >
                    {dateRange.map((item, index) => (
                        <SwiperSlide key={index} style={{ width: "auto" }}>
                            <div
                                className={activeIndex === index ? "sched active" : "sched"}
                                onClick={() => handleSelect(item.fullDate, index)}
                            >
                                <div className="date">{item.date}</div>
                                <div className="line"></div>
                                <div className="day">{item.dayName}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Sched;
