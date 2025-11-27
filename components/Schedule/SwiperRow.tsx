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

const SwiperRow = ({ items, active = 0, gap = 12, style = {} }: SwiperRowProps) => {
    const [activeIndex, setActiveIndex] = useState(active);

    useEffect(() => {
        setActiveIndex(active);
    }, [active]);

    return (
        <section>
            <div className="search" style={style}>
                <div
                    className="search-container"
                    style={{ display: "flex", gap: gap, overflowX: "auto", whiteSpace: "nowrap", padding: "10px 14px 10px 14px" }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`item ${activeIndex === index ? "active" : ""}`}
                            onClick={() => setActiveIndex(index)}

                        >
                            {item.icon && <span>{item.icon}</span>}
                            <a className="name">{item.name}</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SwiperRow;
