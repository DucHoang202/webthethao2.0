'use client'

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SportGroup = ({ open, onClose }: any) => {
    const sportGroups = [
        { name: "Pickleball", image: "/assets/pickleball.webp", link: "/category/pickle-ball" },
        { name: "Bóng chuyền", image: "/assets/image 14.webp", link: "/category/bong-chuyen" },
        { name: "Bóng bàn", image: "/assets/image 13.webp", link: "/category/bong-ban" },
        { name: "Billiards", image: "/assets/image 3.webp", link: "/category/billiards" },
        { name: "Cầu lông", image: "/assets/image 4.webp", link: "/category/cau-long" },
        { name: "Bóng đá", image: "/assets/image 5.webp", link: "/category/bong-da" },
        { name: "Bóng rổ", image: "/assets/image 6.webp", link: "/category/bong-ro" },
        { name: "Võ thuật", image: "/assets/image 7.webp", link: "/category/mma-boxing" },
        { name: "Điền kinh", image: "/assets/image 8.webp", link: "/category/dien-kinh" },
        { name: "Bơi lội", image: "/assets/image 9.webp", link: "/category/boi-loi" },
        { name: "e-Sports", image: "/assets/image 10.webp", link: "/category/esports" },
        { name: "Tennis", image: "/assets/image 11.webp", link: "/category/tennis" },
    ];

    const divideSportGroup = (list: any) =>
        list.reduce((acc: any[], _: any, i: number) =>
            i % 2 === 0 ? [...acc, list.slice(i, i + 2)] : acc
            , []);

    // Tắt bằng ESC
    useEffect(() => {
        const esc = (e: any) => e.key === 'Escape' && onClose();
        window.addEventListener("keydown", esc);
        return () => window.removeEventListener("keydown", esc);
    }, []);

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}
                    <motion.div
                        onClick={() => onClose()}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "rgba(0,0,0,0.45)",
                            backdropFilter: "blur(4px)",
                            zIndex: 101
                        }}
                    />

                    {/* Modal bottom sheet */}
                    <motion.div
                        initial={{ y: 200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 200, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        style={{
                            position: "fixed",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            background: "white",
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            padding: 20,
                            zIndex: 102
                        }}
                    >
                        <div className="sport-group"> <div className="sport-group__container"> <div className="sport-group__title-container"> <div className="sport-group__title"> Nhóm thể thao </div> <div className="sport-group__icon" onClick={onClose}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.7123 16.773L7.22699 8.28768C6.93708 7.99776 6.93708 7.51693 7.22699 7.22702C7.51691 6.9371 7.99774 6.9371 8.28765 7.22702L16.7729 15.7123C17.0628 16.0022 17.0628 16.483 16.7729 16.773C16.483 17.0629 16.0022 17.0629 15.7123 16.773Z" fill="#121212" />
                                <path d="M7.22706 16.773C6.93715 16.483 6.93715 16.0022 7.22706 15.7123L15.7123 7.22702C16.0023 6.9371 16.4831 6.9371 16.773 7.22702C17.0629 7.51693 17.0629 7.99776 16.773 8.28768L8.28772 16.773C7.99781 17.0629 7.51698 17.0629 7.22706 16.773Z" fill="#121212" />
                            </svg>

                        </div> </div> <div className="sport-group__body"> {divideSportGroup(sportGroups).map((item: any, index: number) => (<div className="sport-group__row" key={index} > <a className="sport-group__item" href={item[0].link}> <img src={item[0].image} alt="" className="image" /> {item[0].name} </a> <a className="sport-group__item" href={item[1].link}> <img src={item[1].image} alt="" className="image" /> {item[1].name} </a> </div>))} </div> </div> </div>
                    </motion.div>
                </>
            )
            }
        </AnimatePresence >
    );
};

export default SportGroup;
