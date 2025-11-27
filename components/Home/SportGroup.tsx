'use client'

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SportGroup = ({ open, onClose }: any) => {
    const sportGroups = [
        { name: "Pickleball", image: "/assets/pickleball.webp" },
        { name: "Bóng chuyền", image: "/assets/image 14.webp" },
        { name: "Bóng bàn", image: "/assets/image 13.webp" },
        { name: "Billiards", image: "/assets/image 3.webp" },
        { name: "Cầu lông", image: "/assets/image 4.webp" },
        { name: "Bóng đá", image: "/assets/image 5.webp" },
        { name: "Bóng rổ", image: "/assets/image 6.webp" },
        { name: "Võ thuật", image: "/assets/image 7.webp" },
        { name: "Điền kinh", image: "/assets/image 8.webp" },
        { name: "Bơi lội", image: "/assets/image 9.webp" },
        { name: "e-Sports", image: "/assets/image 10.webp" },
        { name: "Tennis", image: "/assets/image 11.webp" },
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
                        onClick={onClose}
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
                        <div className="sport-group"> <div className="sport-group__container"> <div className="sport-group__title-container"> <div className="sport-group__title"> Nhóm thể thao </div> <div className="sport-group__icon"> <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="32" height="32" rx="16" fill="#F6F6F6" /> <path d="M19.7123 20.773L11.227 12.2877C10.9371 11.9978 10.9371 11.5169 11.227 11.227C11.5169 10.9371 11.9977 10.9371 12.2877 11.227L20.7729 19.7123C21.0628 20.0022 21.0628 20.483 20.7729 20.773C20.483 21.0629 20.0022 21.0629 19.7123 20.773Z" fill="#121212" /> <path d="M11.2271 20.773C10.9372 20.483 10.9372 20.0022 11.2271 19.7123L19.7123 11.227C20.0023 10.9371 20.4831 10.9371 20.773 11.227C21.0629 11.5169 21.0629 11.9978 20.773 12.2877L12.2877 20.773C11.9978 21.0629 11.517 21.0629 11.2271 20.773Z" fill="#121212" /> </svg> </div> </div> <div className="sport-group__body"> {divideSportGroup(sportGroups).map((item: any, index: number) => (<div className="sport-group__row"> <div className="sport-group__item"> <img src={item[0].image} alt="" className="image" /> {item[0].name} </div> <div className="sport-group__item"> <img src={item[1].image} alt="" className="image" /> {item[1].name} </div> </div>))} </div> </div> </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default SportGroup;
