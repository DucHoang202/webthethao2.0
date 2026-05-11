import { useState, useRef, useEffect } from "react";

const tabs = [
    {
        label: "1",
        title: "Nút số 1",
        desc: "Đây là nội dung của tab đầu tiên. Nhấn vào nút khác để xem hiệu ứng chuyển động.",
        color: "#AFA9EC",
    },
    {
        label: "Hai",
        title: "Nút thứ hai",
        desc: "Nội dung tab thứ hai hiện ra với animation trượt nhẹ từ dưới lên.",
        color: "#5DCAA5",
    },
    {
        label: "3",
        title: "Nút số 3",
        desc: "Tab cuối cùng! Thanh trượt di chuyển mượt mà giữa các nút nhờ cubic-bezier.",
        color: "#F0997B",
    },
];

function TabSwitcher() {
    const [active, setActive] = useState(0);
    const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({}); const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
    useEffect(() => {
        const btn = btnRefs.current[active];
        if (btn) {
            setIndicatorStyle({
                width: btn.offsetWidth,
                transform: `translateX(${btn.offsetLeft}px)`,
            });
        }
    }, [active]);

    return (
        <div style={{
            padding: "2rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2rem",
            fontFamily: "var(--font-sans, system-ui, sans-serif)",
        }}>
            {/* Tab bar */}
            <div style={{
                position: "relative",
                display: "flex",
                background: "var(--color-background-secondary, #f4f4f2)",
                border: "0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.12))",
                borderRadius: 12,
                padding: 5,
                gap: 4,
            }}>
                {/* Sliding indicator */}
                <div style={{
                    position: "absolute",
                    top: 5,
                    left: 5,
                    height: "calc(100% - 10px)",
                    background: "var(--color-background-primary, #fff)",
                    border: "0.5px solid var(--color-border-secondary, rgba(0,0,0,0.2))",
                    borderRadius: 9,
                    zIndex: 1,
                    transition: "transform 0.32s cubic-bezier(0.34, 1.28, 0.64, 1), width 0.28s ease",
                    ...indicatorStyle,
                }} />

                {tabs.map((tab, i) => (
                    <button
                        key={i}
                        ref={(el) => {
                            btnRefs.current[i] = el;
                        }} onClick={() => setActive(i)}
                        style={{
                            position: "relative",
                            zIndex: 2,
                            border: "none",
                            background: "transparent",
                            padding: "10px 32px",
                            fontSize: 15,
                            fontWeight: 500,
                            fontFamily: "inherit",
                            color: active === i
                                ? "var(--color-text-primary, #111)"
                                : "var(--color-text-secondary, #666)",
                            borderRadius: 9,
                            cursor: "pointer",
                            transition: "color 0.28s ease",
                            whiteSpace: "nowrap",
                            letterSpacing: "0.01em",
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content panels */}
            <div style={{
                width: "100%",
                maxWidth: 420,
                minHeight: 140,
                position: "relative",
                borderRadius: 12,
                border: "0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.12))",
                background: "var(--color-background-primary, #fff)",
                overflow: "hidden",
            }}>
                {tabs.map((tab, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            inset: 0,
                            padding: "1.5rem",
                            opacity: active === i ? 1 : 0,
                            transform: active === i ? "translateY(0)" : "translateY(10px)",
                            transition: "opacity 0.3s ease, transform 0.3s ease",
                            pointerEvents: active === i ? "auto" : "none",
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                        }}
                    >
                        <div style={{
                            width: 32,
                            height: 32,
                            borderRadius: "50%",
                            background: tab.color,
                            marginBottom: 4,
                        }} />
                        <p style={{
                            fontSize: 16,
                            fontWeight: 500,
                            color: "var(--color-text-primary, #111)",
                            margin: 0,
                        }}>
                            {tab.title}
                        </p>
                        <p style={{
                            fontSize: 14,
                            color: "var(--color-text-secondary, #666)",
                            margin: 0,
                            lineHeight: 1.6,
                        }}>
                            {tab.desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}