'use client'
import { use, useRef } from "react";
import "../../styles/main.scss"
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Header from "../../pages/Header";
import HeaderDesktop from "../../pages/HeaderDesktop";
import Search from "../../components/Home/Search";
import SmallInfoHorizontal from "../../components/Home/SmallInfo-horizontal"
import BlogTitle from "../../components/Blog/BlogTitle"
import BlogSapo from "../../components/Blog/BlogSapo"
import BlogHeading from "../../components/Blog/BlogHeading"
import BlogContent from "../../components/Blog/BlogContent"
import BlogQuote from "../../components/Blog/BlogQuote"
import BlogButton from "../../components/Blog/BlogButton";
import CommentInput from "../../components/Blog/CommentInput";
import Comments from "../../components/Blog/Comments";
import Card from "../../components/ui/card/NewsCard";
import Nav from "../../components/Home/Nav";
import Explore from "../../components/Schedule/SwiperDetail";
import CardTitle from "../../components/ui/card/CardHeader";
import SmallCard from "../../components/ui/card/ArticleCard";
import Advertisement from "../../components/Home/Advertisement";
import HotTopic from "../../components/ui/card/HotTopicCard";
import "../../styles/blocks/detail/_detail.scss";
import { extractArticlePath, changeThumbSize } from "../../utils/extractArticlePath";
import { formatDate } from "../../utils/extractArticlePath";
import { translateSlug } from "../../utils/extractArticlePath";
import { CategoryResponse } from "../../types/Types";
import CategoryCard from "../../components/ui/card/CategoryCard";
import { Data } from "../../types/Types";
import { List } from "../../types/Types";
interface PageProps {
    params: Promise<{ slug: string }>
}
export default function Category({ params, allCategory,
    titleImage,
    hotTopic,
    card2,
    filteredData,
    filteredData1,
    filteredData2,
    filteredData3,
    filteredData4,
    filteredData5,
    homeFeed,
    list
}: {
    params: { slug: string };
    allCategory: CategoryResponse[];
    titleImage: string;
    hotTopic: { link: string; title: string }[];
    card2: { img: string; name: string }[];
    filteredData: CategoryResponse;
    filteredData1: CategoryResponse;
    filteredData2: CategoryResponse;
    filteredData3: CategoryResponse;
    filteredData4: CategoryResponse;
    filteredData5: CategoryResponse;
    homeFeed: List[];
    list: CategoryResponse | null;
}) {

    async function copyUrl() {
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert("Đã copy link!");
        } catch (err) {
            alert("Copy thất bại");
        }
    };

    function ShareFb() {
        window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${url}`,
            "_blank",
            "width=600,height=400"
        );
    };

    const [url, setUrl] = useState("");
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        const fetchAllData = async () => {
            setMounted(true);

            const adjustHeights = (container: HTMLElement | null) => {
                if (!container) return;
                const titles = container.querySelectorAll<HTMLElement>(".title");
                if (!titles || titles.length === 0) return;

                let maxHeight = 0;
                // Reset height to auto to recalculate correctly on updates
                titles.forEach((item) => {
                    item.style.height = 'auto';
                });

                titles.forEach((item) => {
                    const h = item.offsetHeight;
                    if (h > maxHeight) maxHeight = h;
                });

                titles.forEach((item) => {
                    item.style.height = `${maxHeight}px`;
                });
            };

            const handleResize = () => {
                adjustHeights(relatedRef.current);
                adjustHeights(featuredRef.current);
            }

            if (document.fonts) {
                document.fonts.ready.then(handleResize);
            } else {
                setTimeout(handleResize, 200);
            }
        };

        fetchAllData();
    }, []); // Empty dependency array


    const changeHeader = useMediaQuery({ query: "(max-width: 1024px)" })
    const changeNav = useMediaQuery({ query: "(max-width: 768px)" })
    const swiperRef = useRef<any>(null);
    const [isSticky, setIsSticky] = useState(false);

    const [active, setActive] = useState(0)
    const sidebarRef = useRef<HTMLDivElement>(null);
    const relatedRef = useRef<HTMLDivElement>(null);
    const featuredRef = useRef<HTMLDivElement>(null);

    const [opinionTitle, setOpinionTitle] = useState<string>("")
    // const [hotTopic, setHotTopic] = useState<List[]>([]);
    const [comment, setComment] = useState<CategoryResponse>();
    const slug0 = "sea-games"
    const slug1 = "nhan-dinh-bong-da"
    const slug2 = "pickle-ball" //Đọc nhiều
    const slug3 = "bong-da-viet-nam"
    const slug4 = "mma-boxing"
    const slug5 = "goc-tu-van"
    //Get individual data
    const [mounted, setMounted] = useState(false);




    return (
        <div className='App'>
            {changeNav ? <Nav /> : ""}
            {changeNav ? <Header /> : <HeaderDesktop />}
            <Search />
            <div className="category-section">
                <div className="detail--desktop  ">
                    <div className="category-layout">
                        <div className="home--desktop__radius">
                            <div className="home--desktop__share">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#F3F2F2" />
                                    <path d="M16.0003 16C17.8413 16 19.3337 14.5076 19.3337 12.6667C19.3337 10.8257 17.8413 9.33334 16.0003 9.33334C14.1594 9.33334 12.667 10.8257 12.667 12.6667C12.667 14.5076 14.1594 16 16.0003 16Z" fill="white" />
                                    <path d="M16.0004 17.6667C12.6604 17.6667 9.94043 19.9067 9.94043 22.6667C9.94043 22.8533 10.0871 23 10.2738 23H21.7271C21.9138 23 22.0604 22.8533 22.0604 22.6667C22.0604 19.9067 19.3404 17.6667 16.0004 17.6667Z" fill="white" />
                                </svg>

                                <input className="text" placeholder="Chia sẻ chủ đề mới với chúng tôi..." />
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#F3F2F2" />
                                    <path d="M11.6933 21.0133C11.2867 21.0133 10.9067 20.8733 10.6333 20.6133C10.2867 20.2867 10.12 19.7933 10.18 19.26L10.4267 17.1C10.4733 16.6933 10.72 16.1533 11.0067 15.86L16.48 10.0667C17.8467 8.61999 19.2733 8.57999 20.72 9.94666C22.1667 11.3133 22.2067 12.74 20.84 14.1867L15.3667 19.98C15.0867 20.28 14.5667 20.56 14.16 20.6267L12.0133 20.9933C11.9 21 11.8 21.0133 11.6933 21.0133ZM18.62 9.93999C18.1067 9.93999 17.66 10.26 17.2067 10.74L11.7333 16.54C11.6 16.68 11.4467 17.0133 11.42 17.2067L11.1733 19.3667C11.1467 19.5867 11.2 19.7667 11.32 19.88C11.44 19.9933 11.62 20.0333 11.84 20L13.9867 19.6333C14.18 19.6 14.5 19.4267 14.6333 19.2867L20.1067 13.4933C20.9333 12.6133 21.2333 11.8 20.0267 10.6667C19.4933 10.1533 19.0333 9.93999 18.62 9.93999Z" fill="#52524F" />
                                    <path d="M19.56 15.3C19.5466 15.3 19.5266 15.3 19.5133 15.3C17.4333 15.0933 15.76 13.5133 15.44 11.4467C15.4 11.1733 15.5866 10.92 15.86 10.8733C16.1333 10.8333 16.3866 11.02 16.4333 11.2933C16.6866 12.9067 17.9933 14.1467 19.62 14.3067C19.8933 14.3333 20.0933 14.58 20.0666 14.8533C20.0333 15.1067 19.8133 15.3 19.56 15.3Z" fill="#52524F" />
                                    <path d="M22 23.1667H10C9.72667 23.1667 9.5 22.94 9.5 22.6667C9.5 22.3933 9.72667 22.1667 10 22.1667H22C22.2733 22.1667 22.5 22.3933 22.5 22.6667C22.5 22.94 22.2733 23.1667 22 23.1667Z" fill="#52524F" />
                                </svg>

                            </div>
                        </div>
                        <div className="card-container">
                            <CardTitle title={translateSlug(params.slug)} deco={true} />
                            <div className="detail-section__content">
                                {list?.data?.map((item, index) => {
                                    const Component = changeNav ? Card : CategoryCard;

                                    return (
                                        <Component
                                            key={index}
                                            avatar={item.avatar}
                                            name={item.author}
                                            time={formatDate(item.updated_at)}
                                            image={item.thumbnail}
                                            title={item.title}
                                            content={item.description}
                                            category={translateSlug(list?.slug)}
                                            official={item.official}
                                            link={`/blog/${list?.slug}/${item.slug}-${item.id}`}
                                            style={{ padding: "10px 0", borderTop: "none" }}
                                        />
                                    );
                                })}

                            </div>
                        </div>



                    </div>

                    {/* Container bên phải */}
                    <div className="home--desktop__right category-right">
                        {/* Bài sea game */}
                        <div className="card-container">
                            <a href={`/category/${filteredData?.slug}`}>
                                <CardTitle logo={titleImage} title="" deco={false} style={{ background: "#0056FF", color: "#fff", paddingLeft: "-14px" }} />
                            </a>
                            <div className="card--header__content">
                                {filteredData?.data?.slice(0, 3).map((item, index) => (
                                    <SmallCard key={index} avatar={item.avatar} name={item.author} time={formatDate(item.updated_at)} image={item.thumbnail} title={item.title} content={item.description} category={item.category?.name} official={item.official} link={`/blog/${filteredData?.slug}/${item.slug}-${item.id}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                                ))}
                                <a className="view-more--btn" href={`/category/${filteredData?.slug}`}>Xem thêm</a>
                            </div>
                        </div>
                        {/* Chủ đề nóng */}
                        <div className="card-container">
                            <a href={`/category/${filteredData1?.slug}`}>
                                <CardTitle title={translateSlug(slug1)} deco={true} />
                            </a>
                            <div className="card--header__content">
                                {filteredData1?.data?.slice(0, 3).map((item, index) => (
                                    <SmallCard key={index} avatar={item.avatar} name={item.author} time={formatDate(item.updated_at)} image={item.thumbnail} title={item.title} content={item.description} category={item.category?.name} official={item.official} link={`/blog/${filteredData1?.slug}/${item.slug}-${item.id}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                                ))}
                                <a className="view-more--btn" href={`/category/${filteredData1?.slug}`}>Xem thêm</a>
                            </div>
                        </div>
                        <Advertisement image="/assets/adv.webp" />
                        {/* Nhận định */}
                        <div className="card-container">
                            <a href={`/category/${filteredData2?.slug}`}>
                                <CardTitle title={"Đọc nhiều nhất"} deco={true} />
                            </a>
                            <div className="card--header__content">

                                {filteredData2?.data?.slice(0, 3).map((item, index) => (
                                    <SmallCard key={index} avatar={item.avatar} name={item.author} time={formatDate(item.updated_at)} image={item.thumbnail} title={item.title} content={item.description} category={item.category?.name} official={item.official} link={`/blog/${filteredData2?.slug}/${item.slug}-${item.id}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                                ))}
                                <a className="view-more--btn" href={`/category/${filteredData2?.slug}`}>Xem thêm</a>
                            </div>
                        </div>
                        <div className="empty-container">
                            <CardTitle title="Lịch thi đấu bóng đá" style={{ borderBottom: 'none' }} deco={true} />
                            <div className="card--header__content">
                                {card2.map((item, index) => (
                                    <div className="home--desktop__schedule" key={index}>
                                        <div className={`item ${index === 0 ? 'active' : ''}`} onClick={() => setActive(index)}>
                                            <img src={item.img} alt="" className="logo" />
                                            <span className="text ">{item.name}</span>
                                        </div>
                                    </div>
                                ))}


                            </div>
                        </div>
                        <Advertisement image="/assets/adv.webp" />
                        <div className="card-container">
                            <CardTitle title="Chủ đề nóng" style={{ borderBottom: 'none' }} deco={true} />
                            <div className="card--header__content">
                                <HotTopic isTitled={false} hotTopic={filteredData2} />

                            </div>
                        </div>
                        <Advertisement image="/assets/image 22.webp" isCollapsed={false} />


                    </div>

                </div>
                <div className="detail__footer">
                    <div className="adv">
                        <div className="w-full">
                            <img src="/assets/Advertisement.webp" alt="" />
                        </div>
                    </div>
                </div>
            </div >

        </div>
    )
}
