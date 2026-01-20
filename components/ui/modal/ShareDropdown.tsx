import { useEffect, useRef, useState } from "react";
import ShareTooltip from "./ShareTooltip";
import "../../../styles/blocks/detail/_detail.scss";

export default function ShareDropdown() {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(true);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    if (!open) return null;

    return (
        <>
            {/* Overlay làm mờ */}
            <div
                className="share-overlay"
                onClick={() => setOpen(false)}
            />

            {/* Dropdown / Modal */}
            <div className="share--dropdown">
                <div
                    className="share--dropdown__container"
                    ref={dropdownRef}
                >
                    Chia sẻ
                    <ShareTooltip title="" flex={true} />
                </div>
            </div>
        </>
    );
}
