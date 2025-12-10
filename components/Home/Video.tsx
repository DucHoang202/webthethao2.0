import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Video: React.FC = () => {
    const blogPosts = [
        {
            title: "Blog Post 1",
            excerpt: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
            thumb: "/assets/hi.png",
            link: "/reel"
        },
        {
            title: "Blog Post 2",
            excerpt: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
            thumb: "/assets/hi.png",
            link: "/reel"
        },
        {
            title: "Blog Post 3",
            excerpt: "Excerpt for Blog Post 3",
            thumb: "/assets/hi.png",
            link: "/reel"
        },
        {
            title: "Blog Post 4",
            excerpt: "Excerpt for Blog Post 4",
            thumb: "/assets/hi.png",
            link: "/reel"
        },
    ];

    return (
        <div className="video">
            <div className="title">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <path d="M14.73 2H9.27V6.36H14.73V2Z" fill="white" />
                    <path d="M16.23 2V6.36H21.87C21.36 3.61 19.33 2.01 16.23 2Z" fill="white" />
                    <path d="M2 7.86V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.86H2Z" fill="white" />
                    <path d="M7.77 2C4.67 2.01 2.64 3.61 2.13 6.36H7.77V2Z" fill="white" />
                </svg>
                <h2>Video</h2>
            </div>

            <div className="body">
                <Swiper
                    modules={[Navigation, Pagination, FreeMode]}
                    freeMode={true}
                    slidesPerView={"auto"}
                    spaceBetween={12}
                    // pagination={{ clickable: true }}
                    // navigation
                    className="swiper"
                >
                    {blogPosts.map((post, index) => (
                        <SwiperSlide
                            key={index}
                            style={{
                                width: "184px"

                            }}
                            className={`video-slide ${index === blogPosts.length - 1 ? 'last' : ''}`}
                            onClick={() => window.location.href = post.link}
                        >
                            <div className="video-thumb">
                                <img src={post.thumb} alt="" className="video__image" />

                                <div
                                    className="play-button"
                                    onClick={(e) => {
                                        e.stopPropagation(); // tránh redirect khi click nút play
                                        alert("Video is playing");
                                    }}
                                >
                                    <div className="play-button--inner">
                                        <div className="play">
                                            <svg width="24" height="24" fill="none">
                                                <path d="M4 12V8.44C4 4.02 7.13 2.21 10.96 4.42L17.14 7.98C20.97 10.19 20.97 13.81 17.14 16.02L10.96 19.58C7.13 21.79 4 19.98 4 15.56V12Z"
                                                    fill="white" stroke="white" strokeWidth="1.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="content">
                                {post.excerpt}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="view-more--btn black">
                <a href="#">Xem thêm</a>
            </div>
        </div>
    );
};

export default Video;
