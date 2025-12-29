'use client'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import "../../styles/blocks/detail/_swiperdetail.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Explore: React.FC = () => {
    const swiperRef = useRef<any>(null);

    const sportsCategories = [
        {
            name: 'Crafting a Lifestyle That Aligns with Your Core Values',
            actor: 'admin_krypto',
            number: 3,
            image: '../assets/Container.png'
        },
        {
            name: 'Exploring Effective Ways to Reduce and Manage Stress',
            actor: 'admin_krypto',
            number: 3,
            image: '../assets/Container.png'
        },
        {
            name: 'Tips for Building a Wardrobe That Transcends Seasons',
            actor: 'admin_krypto',
            number: 3,
            image: '../assets/Container.png'
        },
        {
            name: 'Reimagining Your Lifestyle with Eco-Friendly Innovations',
            actor: 'admin_krypto',
            number: 3,
            image: '../assets/Container.png'
        },
        {
            name: 'Crafting a Lifestyle That Aligns with Your Core Values',
            actor: 'admin_krypto',
            number: 3,

            image: '../assets/Container.png'
        },
        {
            name: 'Exploring Effective Ways to Reduce and Manage Stress',
            actor: 'admin_krypto',
            number: 3,
            image: '../assets/Container.png'
        },
        {
            name: 'Tips for Building a Wardrobe That Transcends Seasons',
            actor: 'admin_krypto',
            number: 3,

            image: '../assets/Container.png'
        },
        {
            name: 'Reimagining Your Lifestyle with Eco-Friendly Innovations',
            actor: 'admin_krypto',
            number: 3,
            image: '../assets/Container.png'
        },
    ];
    const [hovered, setHovered] = useState(
        new Array(sportsCategories.length).fill(false)
    );

    return (
        <div className="explore-section">
            <div className="explore-section__page">
                <div className="explore-section__container">
                    <div className="explore-section__head">
                        <h2 className="explore-section__title"> Recommended for You</h2>
                        <div className="explore-section__line">


                            <div className="explore-section__controller">
                                <button
                                    className="explore-section__control-btn"
                                    onClick={() => swiperRef.current?.swiper?.slidePrev()}
                                    aria-label="Previous"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M10.4062 12.9922L15.7031 7.69531C15.9062 7.49219 16.0078 7.25781 16.0078 6.99219C16.0078 6.72656 15.9062 6.49219 15.7031 6.28906C15.5 6.10156 15.2656 6.00781 15 6.00781C14.7344 6.00781 14.5 6.10156 14.2969 6.28906L8.29688 12.2891C8.09375 12.4922 7.99219 12.7266 7.99219 12.9922C7.99219 13.2578 8.09375 13.4922 8.29688 13.6953L14.2969 19.6953C14.4062 19.8047 14.5273 19.8828 14.6602 19.9297C14.793 19.9766 14.9062 20 15 20C15.0938 20 15.207 19.9766 15.3398 19.9297C15.4727 19.8828 15.5938 19.8047 15.7031 19.6953C15.9062 19.4922 16.0078 19.2578 16.0078 18.9922C16.0078 18.7266 15.9062 18.4922 15.7031 18.2891L10.4062 12.9922Z" fill="black" />
                                    </svg>
                                </button>
                                <button
                                    className="explore-section__control-btn"
                                    onClick={() => swiperRef.current?.swiper?.slideNext()}
                                    aria-label="Next"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M15.7031 12.2891L9.70312 6.28906C9.5 6.10156 9.26562 6.00781 9 6.00781C8.73438 6.00781 8.5 6.10156 8.29688 6.28906C8.09375 6.49219 7.99219 6.72656 7.99219 6.99219C7.99219 7.25781 8.09375 7.49219 8.29688 7.69531L13.5938 12.9922L8.29688 18.2891C8.09375 18.4922 7.99219 18.7266 7.99219 18.9922C7.99219 19.2578 8.09375 19.4922 8.29688 19.6953C8.40625 19.8047 8.51172 19.8828 8.61328 19.9297C8.71484 19.9766 8.84375 20 9 20C9.15625 20 9.28516 19.9766 9.38672 19.9297C9.48828 19.8828 9.59375 19.8047 9.70312 19.6953L15.7031 13.6953C15.9062 13.4922 16.0078 13.2578 16.0078 12.9922C16.0078 12.7266 15.9062 12.4922 15.7031 12.2891Z" fill="black" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="explore-section__body">
                    <div className="sports__container">
                        {/* Cards Grid */}
                        <div className="coach-section__content">

                            <Swiper
                                modules={[FreeMode, Pagination]}
                                slidesPerView={4}

                                ref={swiperRef}
                                spaceBetween={24}
                                freeMode={{
                                    enabled: true,
                                    momentum: true,
                                    momentumRatio: 0.5,
                                    momentumVelocityRatio: 0.5
                                }}
                                grabCursor={true}
                                className="line"
                                pagination={{
                                    clickable: true,
                                    el: '.swiper--pagination'
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 2,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                    },
                                }}
                            >
                                {sportsCategories.map((coach, index) => (
                                    <SwiperSlide
                                        className={`card ${index === sportsCategories.length - 1 ? "last" : ""}`}
                                        onMouseEnter={() =>
                                            setHovered(prev => {
                                                const copy = [...prev];
                                                copy[index] = true;
                                                return copy;
                                            })
                                        }
                                        onMouseLeave={() =>
                                            setHovered(prev => {
                                                const copy = [...prev];
                                                copy[index] = false;
                                                return copy;
                                            })
                                        }
                                        key={index}
                                        style={{
                                            backgroundImage: `url(${coach.image})`,
                                            backgroundPosition: "center",
                                            width: "326.25px",
                                            height: "360px",
                                            backgroundSize: hovered[index]
                                                ? "105%"
                                                : "cover",
                                        }}
                                    >
                                        <div className="overlay">
                                            <div className="title-container">
                                                <div className="title">{coach.name}</div>

                                            </div>
                                            <div className="role">

                                                <div className="title">Trends</div>
                                                <div className="left">
                                                    <div className="info">by <span>{coach.actor}</span></div>
                                                    <a href="#" className="comment">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path d="M4.78908 13.7908L1.30859 14.5762L2.09401 11.0957C1.83734 10.6337 1.64227 10.1409 1.5088 9.61725C1.37533 9.09363 1.30859 8.55462 1.30859 8.00021C1.30859 7.09672 1.48313 6.24456 1.83221 5.44374C2.17102 4.64292 2.63816 3.94477 3.23364 3.34929C3.82912 2.75381 4.52728 2.28666 5.3281 1.94785C6.12892 1.59878 6.98107 1.42424 7.88456 1.42424C8.78805 1.42424 9.64021 1.59878 10.441 1.94785C11.2418 2.28666 11.94 2.75381 12.5355 3.34929C13.131 3.94477 13.5981 4.64292 13.9369 5.44374C14.286 6.24456 14.4605 7.09672 14.4605 8.00021C14.4605 8.90369 14.286 9.75585 13.9369 10.5567C13.5981 11.3575 13.131 12.0556 12.5355 12.6511C11.94 13.2466 11.2418 13.7138 10.441 14.0526C9.64021 14.4016 8.78805 14.5762 7.88456 14.5762C7.33015 14.5762 6.79113 14.5094 6.26752 14.376C5.74391 14.2425 5.25109 14.0474 4.78908 13.7908ZM4.97389 12.4047L5.4051 12.6357C5.78497 12.8411 6.18282 12.9951 6.59863 13.0977C7.01444 13.2004 7.44308 13.2517 7.88456 13.2517C8.61351 13.2517 9.29626 13.1183 9.93281 12.8513C10.5694 12.5741 11.1263 12.1968 11.6038 11.7194C12.0812 11.242 12.4585 10.685 12.7357 10.0485C13.0026 9.41191 13.1361 8.72916 13.1361 8.00021C13.1361 7.27125 13.0026 6.5885 12.7357 5.95195C12.4585 5.3154 12.0812 4.75842 11.6038 4.28101C11.1263 3.8036 10.5694 3.42629 9.93281 3.14908C9.29626 2.88214 8.61351 2.74867 7.88456 2.74867C7.15561 2.74867 6.47286 2.88214 5.83631 3.14908C5.19976 3.42629 4.64278 3.8036 4.16537 4.28101C3.68795 4.75842 3.31064 5.3154 3.03344 5.95195C2.7665 6.5885 2.63303 7.27125 2.63303 8.00021C2.63303 8.44168 2.68436 8.87033 2.78703 9.28614C2.8897 9.70195 3.0437 10.0998 3.24904 10.4797L3.48005 10.9109L3.04884 12.8359L4.97389 12.4047Z" fill="white" />
                                                        </svg>
                                                        <div className="number">{coach.number}</div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            {/* <div className="swiper--pagination">

                            </div> */}


                        </div>
                    </div>
                </div>

                {/* Bottom Button */}
                {/* <button
                    className="show-all--btn"
                    onClick={() => { window.location.href = '/404'; }}
                >
                    Xem tất cả
                    <div className="sports__button-icon-container">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 6H14.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M10 11L15 6L10 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="10 10" />
                        </svg>


                    </div>
                </button> */}
            </div>
        </div >
    );
};

export default Explore;