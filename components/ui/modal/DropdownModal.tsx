'use client'
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DropdownModal = ({ open, onClose }: any) => {
    const menu = [
        {
            category: "Sport",
            subCat: [
                { name: "Pickleball", href: "#" },
                { name: "Badminton", href: "#" },
                { name: "Basketball", href: "#" },
                { name: "Volleyball", href: "#" },
                { name: "Video thể thao", href: "/reel" }
            ]
        },
        {
            category: "Sport",
            subCat: [
                { name: "Pickleball", href: "#" },
                { name: "Badminton", href: "#" },
                { name: "Basketball", href: "#" },
                { name: "Volleyball", href: "#" }
            ]
        },
        {
            category: "Sport",
            subCat: [
                { name: "Pickleball", href: "#" },
                { name: "Badminton", href: "#" },
                { name: "Basketball", href: "#" },
                { name: "Volleyball", href: "#" }
            ]
        }
    ];
    // Tắt bằng ESC
    useEffect(() => {
        const esc = (e: any) => e.key === 'Escape' && onClose();
        window.addEventListener("keydown", esc);
        return () => window.removeEventListener("keydown", esc);
    }, []);
    return (
        <AnimatePresence>
            {open && (

                <motion.div
                    className="modal--dropdown"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                >
                    <div className="modal--dropdown__container">
                        <div className="modal--dropdown__content">
                            {menu.map((item, idx) => (
                                <div className="modal--dropdown__content__item" key={idx}>
                                    <div className="modal--dropdown__content__item__title">
                                        <div className="deco"></div>
                                        {item.category}
                                    </div>
                                    <div className="modal--dropdown__content__item__sub">
                                        {item.subCat.map((sub, subIdx) => (
                                            <a
                                                className="modal--dropdown__content__item__sub__item"
                                                key={subIdx}
                                                href={sub.href}
                                            >
                                                {sub.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="modal--dropdown__content">
                            {menu.map((item, idx) => (
                                <div className="modal--dropdown__content__item" key={idx}>
                                    <div className="modal--dropdown__content__item__title">
                                        <div className="deco"></div>
                                        {item.category}
                                    </div>
                                    <div className="modal--dropdown__content__item__sub">
                                        {item.subCat.map((sub, subIdx) => (
                                            <a
                                                className="modal--dropdown__content__item__sub__item"
                                                key={subIdx}
                                                href={sub.href}
                                            >
                                                {sub.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="modal--dropdown__container">
                        <div className="modal--dropdown__event">
                            <div className="modal--dropdown__event--header">
                                <div className="modal--dropdown__title bold">
                                    Tuyến chuyên đề
                                </div>
                                <button className="show-all--btn">Xem tất cả</button>
                            </div>
                        </div>
                    </div>

                    <div className="modal--dropdown__container no-border">
                        <div className="modal--dropdown__contact">
                            <div className="group">
                                <div className="modal--dropdown__title bold">Liên hệ</div>
                                <div className="modal--dropdown__title">iOS</div>
                                <div className="modal--dropdown__title">Android</div>
                            </div>

                            <div className="modal--dropdown__title bold">Fanpage</div>

                            <div className="modal--dropdown__contact">
                                <div className="group">
                                    <div className="modal--dropdown__title bold">Liên hệ</div>
                                    <div className="modal--dropdown__title">Quảng cáo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DropdownModal;
