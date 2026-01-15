'use client'
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DropdownModal = ({ open, onClose }: any) => {
    const menu = [
        {
            category: "Bóng đá",
            subCat: [
                { name: "Bóng đá quốc tế", href: "/bong-da-quoc-te/" },
                { name: "Bóng đá Việt Nam", href: "/bong-da-viet-nam/" },
                { name: "Bóng đá châu Á", href: "/bong-da-chau-a/" },
                { name: "World Cup", href: "/world-cup/" },
                { name: "EURO", href: "/euro/" },
                { name: "AFF Cup", href: "/aff-cup/" },
                { name: "SEA Games", href: "/sea-games/" },
                { name: "Nhận định bóng đá", href: "/nhan-dinh-bong-da/" },
                { name: "Chuyển nhượng", href: "/chuyen-nhuong/" },
                { name: "Kết quả bóng đá", href: "/ket-qua-bong-da/" },
                { name: "Xem bóng đá trực tuyến", href: "/xem-bong-da-truc-tuyen/" }
            ]
        },

        {
            category: "Giải đấu",
            subCat: [
                { name: "Olympic", href: "/olympic/" },
                { name: "ASIAD", href: "/asiad/" },
                { name: "SEA Games", href: "/sea-games/" },
                { name: "EURO", href: "/euro/" },
                { name: "World Cup", href: "/world-cup/" },
                { name: "Cúp Chiến Thắng", href: "/cup-chien-thang/" }
            ]
        },

        {
            category: "Các môn thể thao",
            subCat: [
                { name: "Bóng rổ", href: "/bong-ro/" },
                { name: "Bóng chuyền", href: "/bong-chuyen/" },
                { name: "Pickleball", href: "/pickle-ball/" },
                { name: "MMA & Boxing", href: "/mma-boxing/" },
                { name: "Cardio & Fitness", href: "/cardio-fitness/" },
                { name: "Xe thể thao", href: "/xe-the-thao/" },
                { name: "Các môn khác", href: "/cac-mon-the-thao-khac/" }
            ]
        },

        {
            category: "Bảng biểu & Lịch",
            subCat: [
                { name: "Lịch thi đấu", href: "/lich-thi-dau-the-thao/" },
                { name: "Bảng xếp hạng", href: "/bang-xep-hang/" },
                { name: "Kết quả", href: "/ket-qua-bong-da/" }
            ]
        },

        {
            category: "Video",
            subCat: [
                { name: "Videos", href: "/videos/" },
                { name: "Video AFF Cup", href: "/video-aff-cup/" },
                { name: "Highlight", href: "/videos/?type=highlight" },
                { name: "Bàn thắng đẹp", href: "/videos/?type=goals" }
            ]
        },

        {
            category: "Tin tức & Sự kiện",
            subCat: [
                { name: "Sự kiện", href: "/su-kien/" },
                { name: "Emagazine", href: "/emagazine/" },
                { name: "Góc bạn đọc", href: "/goc-ban-doc/" },
                { name: "Góc tư vấn", href: "/goc-tu-van/" }
            ]
        },

        {
            category: "Esports",
            subCat: [
                { name: "Esports", href: "/esports/" }
            ]
        },

        {
            category: "Thư viện",
            subCat: [
                { name: "Thư viện ảnh", href: "/thu-vien-anh/" }
            ]
        },

        {
            category: "Công nghệ thể thao",
            subCat: [
                { name: "Đồ chơi công nghệ", href: "/do-choi-cong-nghe-the-thao/" }
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

                        {/* <div className="modal--dropdown__content">
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
                        </div> */}
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
