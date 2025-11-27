
'use client'
import { useEffect, useState, JSX } from "react";
// interface ItemType {
//     name: string;
//     nav?: string;
//     icon?: JSX.Element | null;
// }

interface SwiperRowProps {
    items: any[];
    active?: number;
    gap?: number;
    style?: React.CSSProperties;
}

const Sched = ({ items, active = 0, gap = 12, style = {} }: SwiperRowProps) => {
    const [activeIndex, setActiveIndex] = useState(active);
    const [dateRange, setDateRange] = useState(getDateRange());
    useEffect(() => {
        setActiveIndex(active);
    }, [active]);
    useEffect(() => {
        setDateRange(getDateRange());
    }, []);
    function getDateRange() {
        const days = [];
        const today = new Date();

        // Map thứ: 0=CN → "CN", 1=T2 → "T2", ...
        const weekdayMap = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];

        // tạo helper để format từng ngày
        const createItem = (date: any, isToday = false) => {
            const day = String(date.getDate()).padStart(2, "0");
            const weekday = weekdayMap[date.getDay()];
            return {
                date: day,
                day: isToday ? "Hôm nay" : weekday
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
        console.log(days)
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
                            onClick={() => setActiveIndex(index)}
                        >
                            <div className="date">27</div>
                            <div className="line" style={{ background: "var(--Neutral-Light-Gray, #DCDFE7)", height: "1px", width: "100%" }}></div>
                            <div className="day">T2</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Sched
