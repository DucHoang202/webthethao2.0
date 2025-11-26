import React from "react";

const Video: React.FC = () => {
    const blogPosts = [
        {
            title: "Blog Post 1",
            excerpt: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
            thumb: "/assets/hi.png",
            link: "https://example.com/blog-post-1"
        },
        {
            title: "Blog Post 2",
            excerpt: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
            thumb: "/assets/hi.png",
            link: "https://example.com/blog-post-2"
        },
        {
            title: "Blog Post 3",
            excerpt: "Excerpt for Blog Post 3",
            thumb: "/assets/hi.png",
            link: "https://example.com/blog-post-3"
        },
        {
            title: "Blog Post 4",
            excerpt: "Excerpt for Blog Post 4",
            thumb: "/assets/hi.png",
            link: "https://example.com/blog-post-4"
        },
    ];

    return (
        <div className="video">
            <div className="title">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M14.73 2H9.27002V6.36H14.73V2Z" fill="white" />
                    <path d="M16.23 2V6.36H21.87C21.36 3.61 19.33 2.01 16.23 2Z" fill="white" />
                    <path d="M2 7.85999V16.19C2 19.83 4.17 22 7.81 22H16.19C19.83 22 22 19.83 22 16.19V7.85999H2ZM14.44 16.18L12.36 17.38C11.92 17.63 11.49 17.76 11.09 17.76C10.79 17.76 10.52 17.69 10.27 17.55C9.69 17.22 9.37 16.54 9.37 15.66V13.26C9.37 12.38 9.69 11.7 10.27 11.37C10.85 11.03 11.59 11.09 12.36 11.54L14.44 12.74C15.21 13.18 15.63 13.8 15.63 14.47C15.63 15.14 15.2 15.73 14.44 16.18Z" fill="white" />
                    <path d="M7.76988 2C4.66988 2.01 2.63988 3.61 2.12988 6.36H7.76988V2Z" fill="white" />
                </svg>
                <h2>Video</h2>
            </div>

            <div className="body">
                <div className="swiper-container">
                    {blogPosts.map((post, index) => (
                        <div className="video-slide" key={index}>

                            {/* FIX: bọc ảnh + nút play lại */}
                            <div className="video-thumb">
                                <img src={post.thumb} alt="" className="video__image" />

                                <div className="play-button" onClick={() => alert("Video is playing")}>
                                    <div className="play-button--inner">
                                        <div className="play">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M4 12V8.44002C4 4.02002 7.13 2.21002 10.96 4.42002L14.05 6.20002L17.14 7.98002C20.97 10.19 20.97 13.81 17.14 16.02L14.05 17.8L10.96 19.58C7.13 21.79 4 19.98 4 15.56V12Z"
                                                    fill="white" stroke="white" strokeWidth="1.5" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="content">
                                {post.excerpt}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Video;
