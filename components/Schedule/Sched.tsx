
'use client'
import { useEffect, useState, JSX } from "react";
// interface ItemType {
//     name: string;
//     nav?: string;
//     icon?: JSX.Element | null;
// }

interface SwiperRowProps {
    items?: any[];
    active?: number;
    gap?: number;
    style?: React.CSSProperties;
}
interface SchedProps {
    items?: any[];
    onChangeDate?: (date: string) => void;
}

const Sched = ({ items, active = 1, gap = 12, style = {}, onChangeDate }: SwiperRowProps & SchedProps) => {
    const [activeIndex, setActiveIndex] = useState(active);
    const [dateRange, setDateRange] = useState(getDateRange());
    useEffect(() => {
        setActiveIndex(active);
    }, [active]);
    useEffect(() => {
        setDateRange(getDateRange());
        handleSelect(dateRange[active].fullDate);
    }, []);
    const handleSelect = (date: string) => {
        onChangeDate?.(date);
    }
    function getDateRange() {
        const days = [];
        const today = new Date();
        const weekdayMap = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

        // helper format
        const createItem = (date: Date, isToday = false) => {
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const year = date.getFullYear();
            const weekday = weekdayMap[date.getDay()];

            return {
                date: day,
                month,
                year,
                dayName: isToday ? "Hôm nay" : weekday,
                fullDate: `${year}-${month}-${day}` // format ISO
            };
        };

        // hôm qua
        const yesterday = new Date(today);
        yesterday.setDate(today.getDate() - 1);
        days.push(createItem(yesterday));

        // hôm nay
        days.push(createItem(today, true));

        // 7 ngày tới
        for (let i = 1; i <= 7; i++) {
            const next = new Date(today);
            next.setDate(today.getDate() + i);
            days.push(createItem(next));
        }

        return days;
    }




    return (
        <section>
            <div className="search" style={style}>
                <div
                    className="search-container" style={{ marginLeft: "30px", gap: "8px" }}
                >
                    {dateRange.map((item, index) => (
                        <div
                            key={index}
                            className={` ${activeIndex === index ? "sched active" : "sched"}`}
                            onClick={() => { setActiveIndex(index); handleSelect(item.fullDate) }}
                        >
                            <div className="date">{item.date}</div>
                            <div className="line" style={{ background: "var(--Neutral-Light-Gray, #DCDFE7)", height: "1px", width: "100%" }}></div>
                            <div className="day">{item.dayName}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Sched
