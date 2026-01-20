import { useEffect, useRef, useState } from "react";
import ShareTooltip from "./ShareTooltip";
import "../../../styles/blocks/detail/_detail.scss"
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
        <div className="share--dropdown" ref={dropdownRef}>
            <div className="share--dropdown__container">
                <ShareTooltip title="" flex={true} />
            </div>
        </div>
    );
}
