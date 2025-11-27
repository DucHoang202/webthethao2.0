
'use client'
import { useEffect, useState } from "react";

interface SwiperRowProps {
    items: any[];
    active?: number;
    gap?: number;
    style?: React.CSSProperties;
}

const Cat = ({ items, active = 0, gap = 12, style = {} }: SwiperRowProps) => {
    const [activeIndex, setActiveIndex] = useState(active);

    useEffect(() => {
        setActiveIndex(active);
    }, [active]);

    return (
        <section>
            <div className="search" style={style}>
                <div
                    className="search-container" style={{ marginLeft: "30px" }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={` ${activeIndex === index ? "cat-btn active" : "cat-btn"}`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <a className="name">{item}</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Cat
