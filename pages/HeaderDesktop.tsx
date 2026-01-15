'use client'
import ModalDropdown from "@/components/ui/modal/DropdownModal";
import { useState } from "react";
const HeaderDesktop = () => {
    const menu = [
        { title: "Pickleball", href: "/category/pickle-ball" },
        { title: "Võ thuật", href: "/category/mma-boxing" },
        { title: "Bóng rổ", href: "/category/bong-ro" },
        { title: "Bóng chuyền", href: "/category/bong-chuyen" },
        { title: "Video thể thao", href: "/reel" }


    ]
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="header-desktop">
            <a className="header-desktop__logo" href="/">
                <img src="/assets/image-1.webp" alt="" />
            </a>
            <div className="header-desktop__menu">
                {menu.map((item, index) => (
                    <a className={"text "} key={index} href={item.href}>
                        <div className="text hashtag">#</div>
                        {item.title}</a>
                ))}
                <div
                    className="h-full"
                    onMouseEnter={() => setOpenModal(true)}
                    onMouseLeave={() => setOpenModal(false)}
                    onClick={() => setOpenModal(!openModal)}
                >
                    <div className="text cursor-pointer flex items-center gap-1 header-desktop__openModal">
                        Khác

                        {/* ICON TRANSITION */}

                        <div
                            className={`menu__dots ${openModal ? "active" : ""}`}

                        >
                            <div className="menu__dots--left"></div>

                            <div className="menu__dots--middle">

                            </div>
                            <div className="menu__dots--right">

                            </div>

                        </div>
                    </div>

                    <ModalDropdown open={openModal} onClose={() => setOpenModal(false)} />
                </div>

            </div>
            <div className="header-desktop__right">
                <a className="item bg-white" href="https://shop.webthethao.vn" target="_blank"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.9064 5.51334L14.7131 3.66668C14.4331 1.65334 13.5198 0.833344 11.5664 0.833344H9.9931H9.00643H6.97977H5.9931H4.3931C2.4331 0.833344 1.52643 1.65334 1.23977 3.68668L1.05977 5.52001C0.9931 6.23334 1.18643 6.92668 1.60643 7.46668C2.1131 8.12668 2.8931 8.50001 3.75977 8.50001C4.59977 8.50001 5.40643 8.08001 5.9131 7.40668C6.36643 8.08001 7.13977 8.50001 7.99977 8.50001C8.85977 8.50001 9.6131 8.10001 10.0731 7.43334C10.5864 8.09334 11.3798 8.50001 12.2064 8.50001C13.0931 8.50001 13.8931 8.10668 14.3931 7.41334C14.7931 6.88001 14.9731 6.20668 14.9064 5.51334Z" fill="#B5191D" />
                    <path d="M7.56675 11.1067C6.72008 11.1933 6.08008 11.9133 6.08008 12.7667V14.5933C6.08008 14.7733 6.22674 14.92 6.40674 14.92H9.58675C9.76675 14.92 9.91341 14.7733 9.91341 14.5933V13C9.92008 11.6067 9.10008 10.9467 7.56675 11.1067Z" fill="#B5191D" />
                    <path d="M14.2463 9.59999V11.5867C14.2463 13.4267 12.7529 14.92 10.9129 14.92C10.7329 14.92 10.5863 14.7733 10.5863 14.5933V13C10.5863 12.1467 10.3263 11.48 9.8196 11.0267C9.37293 10.62 8.76626 10.42 8.01293 10.42C7.84626 10.42 7.6796 10.4267 7.4996 10.4467C6.31293 10.5667 5.41293 11.5667 5.41293 12.7667V14.5933C5.41293 14.7733 5.26626 14.92 5.08626 14.92C3.24626 14.92 1.75293 13.4267 1.75293 11.5867V9.61332C1.75293 9.14666 2.21293 8.83332 2.64626 8.98666C2.82626 9.04666 3.00626 9.09332 3.19293 9.11999C3.27293 9.13332 3.3596 9.14666 3.4396 9.14666C3.54626 9.15999 3.65293 9.16666 3.7596 9.16666C4.53293 9.16666 5.29293 8.87999 5.89293 8.38666C6.46626 8.87999 7.21293 9.16666 7.9996 9.16666C8.79293 9.16666 9.52626 8.89332 10.0996 8.39999C10.6996 8.88666 11.4463 9.16666 12.2063 9.16666C12.3263 9.16666 12.4463 9.15999 12.5596 9.14666C12.6396 9.13999 12.7129 9.13332 12.7863 9.11999C12.9929 9.09332 13.1796 9.03332 13.3663 8.97332C13.7996 8.82666 14.2463 9.14666 14.2463 9.59999Z" fill="#B5191D" />
                </svg>
                    Shop</a>
                <div className="item"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00033 8.00001C9.84127 8.00001 11.3337 6.50763 11.3337 4.66668C11.3337 2.82573 9.84127 1.33334 8.00033 1.33334C6.15938 1.33334 4.66699 2.82573 4.66699 4.66668C4.66699 6.50763 6.15938 8.00001 8.00033 8.00001Z" fill="white" />
                    <path d="M8.00043 9.66666C4.66043 9.66666 1.94043 11.9067 1.94043 14.6667C1.94043 14.8533 2.0871 15 2.27376 15H13.7271C13.9138 15 14.0604 14.8533 14.0604 14.6667C14.0604 11.9067 11.3404 9.66666 8.00043 9.66666Z" fill="white" />
                </svg>
                    Đăng nhập</div>
            </div>

        </div>
    )
}

export default HeaderDesktop