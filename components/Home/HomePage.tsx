'use client'
import { delay, getSlugFromLink, translateSlug } from "../../utils/extractArticlePath";
import useIsScreenSize from "../../hooks/useIsScreenSize";
import NotFound from "../../pages/NotFound";
import Header from "../../pages/Header";
import Search from "../../components/Home/Search";
import Footer from "../../pages/Footer";
import "../../styles/main.scss";
import Card from "../../components/ui/card/NewsCard";
import Video from "../../components/Home/Video";
import HotTopic from "../../components/ui/card/HotTopicCard";
import Advertisement from "../../components/Home/Advertisement";
import SportGenre from "../../components/Home/SportGenre";
import Nav from "../../components/Home/Nav";
import HeaderDesktop from "@/pages/HeaderDesktop";
import CardTitle from "@/components/ui/card/CardHeader";
import SmallCard from "@/components/ui/card/ArticleCard";
import { article } from "framer-motion/client";
import { extractArticlePath, changeThumbSize } from "@/utils/extractArticlePath";
import { List } from "../../types/Types";
import { Article } from "../../types/Types";
import categoryArticle from "../../types/categories_tree.json";
import { authorPlaceholder } from "../../utils/extractArticlePath";
import { formatDate } from "../../utils/extractArticlePath";
import { CategoryResponse } from "../../types/Types";
import { useMediaQuery } from "react-responsive";
const share = (<div className="home--desktop__radius">
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
</div>)
export default function HomePage({
    allCategory,
    titleImage,
    hotTopic,
    card2,
    filteredData,
    filteredData1,
    filteredData2,
    filteredData3,
    filteredData4,
    filteredData5,
    data,
}: {
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
    data: List[];
}) {
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ maxWidth: 1024 })
    const isDesktop = useMediaQuery({ minWidth: 1024 })
    const changeNav = useMediaQuery({ maxWidth: 768 })
    const changeHeader = useMediaQuery({ maxWidth: 768 })
    const validCategories = allCategory.filter((category) => category.data?.length > 0);

    return (
        <div className='App'>
            {changeNav ? <Header /> : <HeaderDesktop />}
            {changeHeader ? <Nav /> : ""}
            <Search />
            {isMobile ? (
                <main>
                    <div className="home--mobile">
                        {data.slice(0, 3).map((item: any, index: any) => (
                            <Card key={index} avatar={item.avatar} name={item.author} time={formatDate(item.time_text)} image={item.thumbnail} title={item.title} content={item.summary} category={getSlugFromLink(item.article_url)} official={item.official} link={`/blog/${extractArticlePath(item.article_url)}`} />
                        ))}
                        <Video video={filteredData5} />
                        <HotTopic isTitled={false} hotTopic={filteredData2} />
                        {validCategories.map((item, index) => (
                            <SportGenre
                                key={item.slug ?? index}
                                sport={item}
                                delayMs={index * 400}
                            />
                        ))}

                        <div className="advertisement-section" style={{ width: "100%" }}>
                            <Advertisement image="" />
                            <Advertisement image="" />
                            <Advertisement image="" />

                            <Advertisement image="" />
                            <div className="class" style={{ height: "300px", backgroundColor: "white" }}></div>
                        </div>
                    </div>
                </main>
            )
                :
                isTablet
                    ?
                    (<main>
                        <div className="home--desktop">
                            <div className="home--desktop__middle">
                                {share}
                                <div className="home--desktop__radius">
                                    <img src="/assets/image-16.webp" alt="" />
                                </div>
                                {/* 3 bài viết của 3 chủ đề khác nhau */}
                                {data.slice(0, 3).map((item: any, index: any) => (
                                    <div className="home--desktop__radius" key={index}>
                                        < Card key={index} avatar={item.avatar} name={item.author} time={formatDate(item.time_text)} image={item.thumbnail} title={item.title} content={item.summary} category={getSlugFromLink(item.article_url)} official={item.official} link={`/blog/${extractArticlePath(item.article_url)}`} />
                                    </div>
                                ))}
                                <Video video={filteredData5} />

                                <div className="home--desktop__radius">
                                    <CardTitle title="Chủ đề nóng" style={{ borderBottom: 'none' }} deco={true} />
                                    <div className="card--header__content">
                                        <HotTopic isTitled={false} hotTopic={filteredData2} />
                                    </div>
                                </div>
                                <Advertisement image="/assets/image 19.webp" isCollapsed={true} />

                                {validCategories.map((item, index) => (
                                    <SportGenre
                                        key={item.slug ?? index}
                                        sport={item}
                                        delayMs={index * 400}
                                    />
                                ))}

                            </div>

                            {/* Container bên phải */}
                            <div className="home--desktop__right">
                                {/* Bài sea game */}
                                <div className="card-container">
                                    <a href={`/category/${filteredData?.slug}`}>
                                        <CardTitle logo={titleImage} title="" deco={false} style={{ background: "#0056FF", color: "#fff", paddingLeft: "-14px" }} />
                                    </a>
                                    <div className="card--header__content">
                                        {filteredData?.data?.slice(0, 3).map((item: any, index: any) => (
                                            <SmallCard key={index} avatar={item.avatar} name={item.author} time={item.updated_at} image={item.thumbnail} title={item.title} content={item.description} category={item.category?.name} official={item.official} link={`/blog/${filteredData?.slug}/${item.slug}-${item.id}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                                        ))}
                                        <a className="view-more--btn" href={`/category/${filteredData?.slug}`}>
                                            Xem thêm
                                        </a>
                                    </div>
                                </div>
                                {/* Chủ đề nóng */}
                                <div className="card-container">
                                    <a href={`/category/${filteredData1?.slug}`}>
                                        <CardTitle title={translateSlug(filteredData1?.slug)} deco={true} />
                                    </a>
                                    <div className="card--header__content">
                                        {filteredData1?.data?.slice(0, 3).map((item: any, index: any) => (
                                            <SmallCard key={index} avatar={item.avatar} name={item.author} time={formatDate(item.updated_at)} image={item.thumbnail} title={item.title} content={item.description} category={item.category?.name} official={item.official} link={`/blog/${filteredData1?.slug}/${item.slug}-${item.id}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                                        ))}
                                        <a className="view-more--btn" href={`/category/${filteredData1?.slug}`}>
                                            Xem thêm
                                        </a>
                                    </div>
                                </div>
                                <Advertisement image="/assets/adv.webp" />
                                {/* Nhận định */}
                                <div className="card-container">
                                    <a href={`/category/${filteredData2?.slug}`}>
                                        <CardTitle title={"Đọc nhiều nhất"} deco={true} />
                                    </a>
                                    <div className="card--header__content">
                                        {filteredData2?.data?.slice(0, 3).map((item: any, index: any) => (
                                            <SmallCard key={index} avatar={item.avatar} name={item.author} time={formatDate(item.updated_at)} image={item.thumbnail} title={item.title} content={item.description} category={item.category?.name} official={item.official} link={`/blog/${filteredData2?.slug}/${item.slug}-${item.id}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                                        ))}
                                        <a className="view-more--btn" href={`/category/${filteredData2?.slug}`}>
                                            Xem thêm
                                        </a>
                                    </div>
                                </div>
                                <div className="empty-container">
                                    <CardTitle title="Lịch thi đấu bóng đá" style={{ borderBottom: 'none' }} deco={true} />
                                    <div className="card--header__content">
                                        {card2.map((item, index) => (
                                            <div className="home--desktop__schedule" key={index}>
                                                <div className={`item ${index === 0 ? 'active' : ''}`}>
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
                    </main>)
                    :
                    <main>

                        <div className="home--desktop">
                            <div className="home--desktop__left">
                                <div className="empty-container">
                                    <CardTitle title="Lịch thi đấu bóng đá" style={{ borderBottom: 'none' }} deco={true} />
                                    <div className="card--header__content">
                                        {card2.map((item: any, index: number) => (
                                            <div className="home--desktop__schedule" key={index}>
                                                <div className={`item ${index === 0 ? 'active' : ''}`}>
                                                    <img src={item.img} alt="" className="logo" />
                                                    <span className="text ">{item.name}</span>
                                                </div>
                                            </div>
                                        ))
                                        }
                                    </div>
                                </div>
                                <Advertisement image="/assets/adv.webp" />
                                <div className="home--desktop__radius">
                                    <CardTitle title="Chủ đề nóng" style={{ borderBottom: 'none' }} deco={true} />
                                    <div className="card--header__content">
                                        <HotTopic isTitled={false} hotTopic={filteredData2} />

                                    </div>
                                </div>
                                <Advertisement image="/assets/image 22.webp" isCollapsed={false} />

                            </div>
                            <div className="home--desktop__middle">
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
                                <div className="home--desktop__radius">
                                    <img src="/assets/image-16.webp" alt="" />
                                </div>
                                {data.slice(0, 3).map((item: any, index: any) => (
                                    <div className="home--desktop__radius" key={index}>
                                        < Card key={index} avatar={item.avatar} name={item.author} time={formatDate(item.time_text)} image={item.thumbnail} title={item.title} content={item.summary} category={getSlugFromLink(item.article_url)} official={item.official} link={`/blog/${extractArticlePath(item.article_url)}`} />
                                    </div>
                                ))}
                                <Video video={filteredData5} />

                                <div className="card-container">
                                    <CardTitle title="Chủ đề nóng" style={{ borderBottom: 'none' }} deco={true} />
                                    <div className="card--header__content">
                                        <HotTopic isTitled={false} hotTopic={filteredData2} />

                                    </div>
                                </div>
                                <Advertisement image="/assets/image 19.webp" isCollapsed={true} />
                                {validCategories.map((item, index) => (
                                    <SportGenre
                                        key={item.slug ?? index}
                                        sport={item}
                                        delayMs={index * 400}
                                    />
                                ))}

                            </div>
                            <div className="home--desktop__right">
                                <div className="card-container">
                                    <a href={`/category/${filteredData?.slug}`}>
                                        <CardTitle logo="assets/logo-sea-game 1.webp" title="" deco={false} style={{ background: "#0056FF", color: "#fff", paddingLeft: "-14px" }} />
                                    </a>
                                    <div className="card--header__content">
                                        {filteredData?.data?.slice(0, 3).map((item: any, index: any) => (
                                            <SmallCard key={index} avatar={item.avatar} name={item.author} time={formatDate(item.updated_at)} image={item.thumbnail} title={item.title} content={item.description} category={item.category?.name} official={item.official} link={`/blog/${filteredData?.slug}/${item.slug}-${item.id}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                                        ))}
                                        <a className="view-more--btn" href={`/category/${filteredData?.slug}`}>
                                            Xem thêm
                                        </a>
                                    </div>
                                </div>
                                <div className="card-container">
                                    <a href={`/category/${filteredData1?.slug}`}>
                                        <CardTitle title={translateSlug(filteredData1?.slug)} deco={true} />
                                    </a>
                                    <div className="card--header__content">
                                        {filteredData1?.data?.slice(0, 3).map((item: any, index: any) => (
                                            <SmallCard key={index} avatar={item.avatar} name={item.author} time={formatDate(item.updated_at)} image={item.thumbnail} title={item.title} content={item.description} category={item.category?.name} official={item.official} link={`/blog/${filteredData1?.slug}/${item.slug}-${item.id}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                                        ))}
                                        <a className="view-more--btn" href={`/category/${filteredData1?.slug}`}>
                                            Xem thêm
                                        </a>
                                    </div>
                                </div>
                                <Advertisement image="/assets/adv.webp" />
                                <div className="card-container">
                                    <a href={`/category/${filteredData2?.slug}`}>
                                        <CardTitle title={"Đọc nhiều nhất"} deco={true} />
                                    </a>
                                    <div className="card--header__content">
                                        {filteredData2?.data?.slice(0, 3).map((item: any, index: any) => (
                                            <SmallCard key={index} avatar={item.avatar} name={item.author} time={formatDate(item.updated_at)} image={item.thumbnail} title={item.title} content={item.description} category={item.category?.name} official={item.official} link={`/blog/${filteredData2?.slug}/${item.slug}-${item.id}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                                        ))}
                                        <a className="view-more--btn" href={`/category/${filteredData2?.slug}`}>
                                            Xem thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>}
        </div>
    )
}