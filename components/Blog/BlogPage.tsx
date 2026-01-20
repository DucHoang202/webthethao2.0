'use client'
import { use, useRef } from "react";
import "../../styles/main.scss"
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Header from "../../pages/Header";
import HeaderDesktop from "../../pages/HeaderDesktop";
import Search from "../../components/Home/Search";
import SmallInfoHorizontal from "../../components/Home/SmallInfo-horizontal"
import BlogTitle from "./BlogTitle"
import BlogSapo from "./BlogSapo"
import BlogHeading from "./BlogHeading"
import BlogContent from "./BlogContent"
import BlogQuote from "./BlogQuote"
import BlogButton from "./BlogButton";
import CommentInput from "./CommentInput";
import Comments from "./Comments";
import Card from "../ui/card/NewsCard";
import Nav from "../../components/Home/Nav";
import Explore from "../Schedule/SwiperDetail";
import CardTitle from "../ui/card/CardHeader";
import SmallCard from "../ui/card/ArticleCard";
import Advertisement from "../Home/Advertisement";
import HotTopic from "../ui/card/HotTopicCard";
import "../../styles/blocks/detail/_detail.scss";
import { extractArticlePath, changeThumbSize } from "../../utils/extractArticlePath";
import { formatDate } from "../../utils/extractArticlePath";
import { translateSlug } from "../../utils/extractArticlePath";
import { CategoryResponse } from "../../types/Types";
import { delay } from "../../utils/extractArticlePath";
import * as Tooltip from "@radix-ui/react-tooltip";
import { toast } from "react-toastify";
import { zaloRequest } from "@/utils/shareZalo";
import ShareTooltip from "../ui/modal/ShareTooltip";
import ShareDropdown from "../ui/modal/ShareDropdown";

interface Data {
    author: string,
    body: string,
    created_at: string,
    head: HeadData,
    id: number,
    path: string,
    published_text: string,
    source_url: string,
    title: string,
    updated_at: string,
    avatar: string,


}
export interface SeoData {
    title: string;
    description: string;
    keywords: string;
    canonical: string;
    robots: string;
    language: string;
}

export interface HeadData {
    seo: SeoData;
    og: {
        image: string;
        title: string;
        description: string;
    }
}
interface PageProps {
    params: Promise<{ id: string, article: string }>;
}
interface List {
    id: number;
    title: string;
    summary: string;
    thumbnail: string;
    article_url: string;
    category: string;
    official: boolean;
    time: string;
    name: string;
    avatar: string;
    time_text: string;
    author: string;
}
const BlogPage = ({ params }: PageProps) => {
    const [list, setList] = useState<CategoryResponse>();
    const [data, setData] = useState<Data>();
    const { id, article } = use(params);
    const [param, setParam] = useState({ id: "", article: "" });
    const [mounted, setMounted] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [shareDropdown, setShareDropdown] = useState(false);
    const getData = async (retry = 0) => {
        if (!id || !article) return;

        const maxRetry = 5;        // số lần thử lại
        const delay = 2000;        // thời gian chờ (ms)

        try {
            const url = `https://webthethao.wepro.io.vn/api/article/${id}/${article}.htm`;

            const res = await fetch(url);

            if (!res.ok) {
                if (res.status === 500 && retry < maxRetry) {
                    console.log(`Server 500, retry lần ${retry + 1}...`);

                    await new Promise(r => setTimeout(r, delay));

                    return getData(retry + 1); // gọi lại
                }

                const text = await res.text();
                throw new Error(`API failed ${res.status}: ${text}`);
            }

            const result = await res.json();
            setData(result);

        } catch (error) {
            console.log("Fetch error:", error);
        }
    };


    async function getIdenticalArticle() {
        try {
            const res = await fetch("https://webthethao.wepro.io.vn/api/category-article/load/" + id);
            const result = await res.json();
            const updatedItems = result.data.map((item: any, index: number) => {
                if (index < result.data.length) {
                    return {
                        ...item,
                        author: "Phan Kiet",
                        official: true,
                        avatar: "/assets/Rectangle 1.webp",
                        category: "Bóng đá",
                        thumbnail: changeThumbSize(item.thumbnail, "409-273"),
                    };
                }
                return item;
            });
            result.data = updatedItems;
            setList(result);

        } catch (error) {
            console.log(error);
        }
    }
    async function copyUrl() {
        const text = window.location.href;

        try {
            await navigator.clipboard.writeText(text);
            toast.success("Đã copy link!");
        } catch (err) {
            // fallback cho HTTP hoặc Safari cũ
            const textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);

            toast.success("Đã copy link (fallback)!");
        }
    }


    function handleOpenX(url: string) {
        const appUrl = `twitter://open?url=${encodeURIComponent(url)}`;
        const webUrl = `https://x.com/intent/tweet?url=${encodeURIComponent(url)}`;

        // thử mở app
        window.location.href = appUrl;
        // fallback về web nếu app không mở được
        setTimeout(() => {
            window.open(webUrl, "_blank");
        }, 800);
    };
    function ShareFb(url: string, quote?: string) {
        const shareUrl = new URL("https://www.facebook.com/sharer/sharer.php");

        shareUrl.searchParams.set("u", url);

        if (quote) {
            shareUrl.searchParams.set("quote", quote);
        }

        window.open(
            shareUrl.toString(),
            "_blank",
            "width=600,height=400"
        );
    }
    function shareZalo(url: string) {
        const start = Date.now();
        window.location.href = `zalo://share?url=${encodeURIComponent(url)}`;

        setTimeout(() => {
            if (Date.now() - start < 1500) {
                window.open(`https://zalo.me/share?url=${encodeURIComponent(url)}`, "_blank");
            }
        }, 1000);
    }
    async function sendZalo() {
        const accessToken = "your_access_token";
        const zaloData = await zaloRequest({
            url: "https://openapi.zalo.me/v2.0/oa/message",
            method: "POST",
            accessToken,
            body: {
                recipient: { user_id: "123456789" },
                message: { text: window.location.href },
            },
        });
        console.log(zaloData);
    }

    const getList = async () => {
        try {
            const res = await fetch("https://webthethao.wepro.io.vn/api/newfeed?page=1");
            const result = await res.json();
            const updatedItems = result.items.map((item: any, index: number) => {
                if (index < result.items.length) {
                    return {
                        ...item,
                        author: "Phan Kiet",
                        official: true,
                        avatar: "/assets/Rectangle 1.webp",
                        category: "Bóng đá",
                        thumbnail: changeThumbSize(item.thumbnail, "409-273"),
                    };
                }
                return item;
            });

            setList(updatedItems);

        } catch (error) {
            console.log(error);
        }
    }
    const [url, setUrl] = useState("");


    useEffect(() => {
        const fetchAllData = async () => {
            setMounted(true);
            console.log(window.location.href)
            // Call APIs with delays
            const accessToken = "your_access_token";

            const zaloData = await zaloRequest({
                url: "https://openapi.zalo.me/v2.0/oa/getprofile",
                method: "GET",
                accessToken,
            });

            console.log("zaloData", zaloData);

            // await getList();
            // await delay(300);

            await setSlug(slug);
            await delay(300);



            await setSlug1(slug1);
            await delay(300);

            await setSlug2(slug2);
            await delay(300);

            await setSlug3(slug3);
            await delay(300);

            await setSlug4(slug4);
            await delay(300);

            await setSlug5(slug5);
            await delay(300);

            await getIdenticalArticle();
            await delay(300);
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
        getData();
        delay(300); // 300ms delay
        fetchAllData();
    }, []); // Empty dependency array

    const card2 = [{ img: "/assets/image 20-10.webp", name: "SEA Games 33" }, { img: "/assets/image 20.webp", name: "V-League" }, { img: "/assets/image 20-1.webp", name: "League 1" }, { img: "/assets/image 20-2.webp", name: "Seria A" }, { img: "/assets/image 20-3.webp", name: "Bundesliga" }, { img: "/assets/image 20-4.webp", name: "Premier League" }, { img: "/assets/image 20-5.webp", name: "Laliga" }, { img: "/assets/image 20-6.webp", name: "UEFA Europa League" }, { img: "/assets/image 20-7.webp", name: "UEFA Champions League" }]

    const changeHeader = useMediaQuery({ query: "(max-width: 1024px)" })
    const changeNav = useMediaQuery({ query: "(max-width: 768px)" })
    const swiperRef = useRef<any>(null);
    const [isSticky, setIsSticky] = useState(false);

    const [active, setActive] = useState(0)
    const sidebarRef = useRef<HTMLDivElement>(null);
    const relatedRef = useRef<HTMLDivElement>(null);
    const featuredRef = useRef<HTMLDivElement>(null);
    const [filteredData, setFilteredData] = useState<CategoryResponse>();
    const [filteredData1, setFilteredData1] = useState<CategoryResponse>();
    const [filteredData2, setFilteredData2] = useState<CategoryResponse>();
    const [filteredData3, setFilteredData3] = useState<CategoryResponse>();
    const [filteredData4, setFilteredData4] = useState<CategoryResponse>();
    const [filteredData5, setFilteredData5] = useState<CategoryResponse>();
    const [opinionTitle, setOpinionTitle] = useState<string>("")
    // const [hotTopic, setHotTopic] = useState<List[]>([]);
    const [comment, setComment] = useState<CategoryResponse>();
    const slug = "sea-games"
    const slug1 = "nhan-dinh-bong-da"
    const slug2 = "pickle-ball" //Đọc nhiều
    const slug3 = "bong-da-viet-nam"
    const slug4 = "mma-boxing"
    const slug5 = "goc-tu-van"
    const titleImage = "/assets/logo-sea-game 1.webp"
    //Get individual data
    const hotTopic = [{ link: "#", title: "Chủ đề nóng 1" }, { link: "#", title: "Chủ đề nóng 2" }, { link: "#", title: "Chủ đề nóng 3" }]
    const setSlug = async (slug: string) => {
        try {
            const res = await fetch(`https://webthethao.wepro.io.vn/api/category-article/load/${slug}`);
            const result = await res.json();
            const updatedItems = result.data?.map((item: any, index: number) => {
                if (index < result.data.length) {
                    return {
                        ...item,
                        author: "Phan Kiet",
                        official: true,
                        avatar: "/assets/Rectangle 1.webp"


                    };
                }
                return item;
            });
            result.data = updatedItems;
            setFilteredData(result);
        }
        catch {
            console.log("error");
        }
    }
    const setSlug1 = async (slug: string) => {
        try {
            const res = await fetch(`https://webthethao.wepro.io.vn/api/category-article/load/${slug}`);
            const result = await res.json();
            const updatedItems = result.data?.map((item: any, index: number) => {
                if (index < result.data.length) {
                    return {
                        ...item,
                        author: "Phan Kiet",
                        official: true,
                        avatar: "/assets/Rectangle 1.webp"


                    };
                }
                return item;
            });
            result.data = updatedItems;
            setFilteredData1(result);
        }
        catch {
            console.log("error");
        }
    }
    const setSlug2 = async (slug: string) => {
        try {
            const res = await fetch(`https://webthethao.wepro.io.vn/api/category-article/load/${slug}`);
            const result = await res.json();
            const updatedItems = result.data?.map((item: any, index: number) => {
                if (index < result.data.length) {
                    return {
                        ...item,
                        author: "Phan Kiet",
                        official: true,
                        avatar: "/assets/Rectangle 1.webp"
                    };
                }
                return item;
            });
            result.data = updatedItems;
            setFilteredData2(result);
        }
        catch {
            console.log("error");
        }
    }

    const setSlug3 = async (slug: string) => {
        try {
            const res = await fetch(`https://webthethao.wepro.io.vn/api/category-article/load/${slug}`);
            const result = await res.json();
            const updatedItems = result.data?.map((item: any, index: number) => {
                if (index < result.data.length) {
                    return {
                        ...item,
                        author: "Phan Kiet",
                        official: true,
                        avatar: "/assets/Rectangle 1.webp"
                    };
                }
                return item;
            });
            result.data = updatedItems;
            setFilteredData3(result);
        }
        catch {
            console.log("error");
        }
    }

    const setSlug4 = async (slug: string) => {
        try {
            const res = await fetch(`https://webthethao.wepro.io.vn/api/category-article/load/${slug}`);
            const result = await res.json();
            const updatedItems = result.data?.map((item: any, index: number) => {
                if (index < result.data.length) {
                    return {
                        ...item,
                        author: "Phan Kiet",
                        official: true,
                        avatar: "/assets/Rectangle 1.webp"
                    };
                }
                return item;
            });
            result.data = updatedItems;
            setFilteredData4(result);
        }
        catch {
            console.log("error");
        }
    }

    const setSlug5 = async (slug: string) => {
        try {
            const res = await fetch(`https://webthethao.wepro.io.vn/api/category-article/load/${slug}`);
            const result = await res.json();
            const updatedItems = result.data?.map((item: any, index: number) => {
                if (index < result.data.length) {
                    return {
                        ...item,
                        author: "Phan Kiet",
                        official: true,
                        avatar: "/assets/Rectangle 1.webp"
                    };
                }
                return item;
            });
            result.data = updatedItems;
            setFilteredData5(result);
        }
        catch {
            console.log("error");
        }
    }
    if (!mounted) return null;


    return (
        <div className='App'>
            {changeHeader ? <Header /> : <HeaderDesktop />}
            <Search />
            <Nav />
            {changeNav ? (<main >
                <div className="layout">
                    <div className="no-gap">
                        <div className="blog">
                            <div className="blog__container">
                                <div className="blog__seo">{changeThumbSize(data?.head.seo.title, "768-432")}</div>
                                <img src={data?.head?.og?.image} alt={data?.head?.og?.title} className="blog__image w-full mt-[-13px]" />
                                <div className="blog__user">

                                    <div className="blog__user--inner">
                                        <div className="flex w-full">
                                            <SmallInfoHorizontal avatar="/assets/Rectangle 1.webp" name={data?.author} time={formatDate(data?.created_at)} official={true} />

                                        </div>

                                        <div className="blog__cat">
                                            {translateSlug(id)}
                                        </div>
                                        <div className="cursor-pointer" onClick={() => { setShareDropdown(!shareDropdown) }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                <path d="M7.58398 6.41663L12.3673 1.6333" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12.8332 3.96663V1.16663H10.0332" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M6.41602 1.16663H5.24935C2.33268 1.16663 1.16602 2.33329 1.16602 5.24996V8.74996C1.16602 11.6666 2.33268 12.8333 5.24935 12.8333H8.74935C11.666 12.8333 12.8327 11.6666 12.8327 8.74996V7.58329" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            {shareDropdown && <ShareDropdown />}
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="blog__body">
                                <div className="blog-title">{data?.title}</div>
                                <div className="blog__sapo">
                                    {data?.head?.og?.description}
                                </div>
                                <div dangerouslySetInnerHTML={{ __html: data?.body || "" }}></div>
                                {/* <blockquote><p>Mua các sản phẩm mới nhất tại <a href="">webthethao.vn</a></p><cite>-Webthethao</cite></blockquote> */}


                                <div className="blog__btn-container">
                                    <BlogButton number={2} text="Bình luận" />
                                    <div className="cursor-pointer" onClick={() => { setShareDropdown(!shareDropdown) }}>
                                        <BlogButton number={10} text="Chia sẻ" />
                                        {shareDropdown && <ShareDropdown />}
                                    </div>
                                </div>
                            </div>
                            <div className="blog__comment">
                                <CommentInput />
                                <Comments avatar="/assets/Rectangle 1.webp" name="Huong Nguyen" content="Anna hướng dẫn chi tiết, sửa tư thế nhẹ nhàng, giúp tôi thấy cơ thể dẻo dai hơn chỉ sau 2 tháng." time="10 phút trước" />
                            </div>

                        </div>
                    </div>

                    <div className="detail__card" ref={relatedRef}>
                        {list?.data?.slice(0, 5).map((item, index) => (
                            <Card
                                key={index}
                                avatar="/assets/Image (3).webp"
                                name={item.author ?? ""}
                                time={formatDate(item.updated_at)}
                                image={item.thumbnail ?? ""}
                                title={item.title ?? ""}
                                content={item.description ?? ""}
                                category={translateSlug(id)}
                                official
                                hideText={true}
                                link={`/blog/${list?.slug}/${item.slug}-${item.id}`}
                            />
                        ))}

                    </div>
                    <div className="detail__card" ref={featuredRef}>
                        {list?.data?.slice(0, 5).map((item, index) => (
                            <Card
                                key={index}
                                avatar="/assets/Image (3).webp"
                                name={item.author ?? ""}
                                time={formatDate(item.updated_at)}
                                image={item.thumbnail ?? ""}
                                title={item.title ?? ""}
                                content={item.description ?? ""}
                                category={translateSlug(id)}
                                official
                                hideText={true}
                                link={`/blog/${list?.slug}/${item.slug}-${item.id}`}
                            />
                        ))}

                    </div>
                </div>
            </main>) :
                (
                    // 409.67 * 273.11
                    <div className="detail-section">
                        <div className="detail--desktop white ">
                            <div className="detail-layout">

                                <ShareTooltip title={data?.head?.seo?.title} flex={false}
                                />


                                <div className="blog detail">

                                    <div className="blog__container">

                                        <div className="blog__user">

                                        </div>
                                    </div>
                                    <div className="blog__title">
                                        <BlogTitle title={data?.title ?? ""} />
                                        <div className="blog__user--inner boder">
                                            <SmallInfoHorizontal avatar={"/assets/Rectangle 1.webp"} name={data?.author ?? ""} time={formatDate(data?.updated_at)} official={true} />
                                            <div className="blog__cat">
                                                {translateSlug(id)}
                                            </div>
                                        </div>
                                        <div className="blog__sapo">
                                            {data?.head?.seo?.description}
                                        </div>
                                        <div className="blog__thumbnail">
                                            <img src={changeThumbSize(data?.head?.og?.image, "749-421")} alt="" />
                                        </div>
                                    </div>
                                    <div className="blog__body" dangerouslySetInnerHTML={{ __html: data?.body ?? "" }}></div>

                                    <div className="blog__btn-container">
                                        <BlogButton number={2} text="Bình luận" />
                                        <div className="" onClick={() => { setShareDropdown(!shareDropdown) }}>
                                            <BlogButton number={10} text="Chia sẻ" />
                                            {shareDropdown && <ShareDropdown />}
                                        </div>
                                    </div>
                                    <div className="blog__comment" >
                                        <CommentInput />
                                        <Comments avatar={"/assets/Rectaangle 1.webp"} name={data?.author ?? ""} content="Anna ướng dẫn chi tiết, sửa tư thế nhẹ nhàng, giúp tôi thấy cơ thể dẻo dai hơn chỉ sau 2 tháng." time={formatDate(data?.updated_at)} />
                                    </div>
                                    <div className="adv">
                                        <div className="w-full">
                                            <div className="adv__text padding-12">Advertisement</div>
                                            <img src="/assets/Advertisement.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className="empty-container">
                                        <CardTitle title="Cùng chủ đề" className="smaller" deco={true} />
                                        <div className="detail__card" ref={relatedRef}>
                                            {list?.data?.slice(0, 3).map((item, index) => (
                                                <Card
                                                    key={index}
                                                    className="smaller"
                                                    avatar="/assets/Image (3).webp"
                                                    name={item.author ?? ""}
                                                    time={formatDate(item.updated_at)}
                                                    image={item.thumbnail ?? ""}
                                                    title={item.title ?? ""}
                                                    content={item.description ?? ""}
                                                    category={translateSlug(id)}
                                                    official
                                                    hideText={true}
                                                    link={`/blog/${list?.slug}/${item.slug}-${item.id}`}
                                                />
                                            ))}

                                        </div>
                                    </div>
                                    <div className="empty-container">
                                        <CardTitle title="Bài viết nổi bật" className="smaller" deco={true} />
                                        <div className="detail__card" ref={featuredRef}>
                                            {list?.data?.slice(4, 7).map((item, index) => (
                                                <Card
                                                    key={index}
                                                    className="smaller"
                                                    avatar="/assets/Image (3).webp"
                                                    name={item.author ?? ""}
                                                    time={formatDate(item.updated_at)}
                                                    image={item.thumbnail ?? ""}
                                                    title={item.title ?? ""}
                                                    content={item.description ?? ""}
                                                    category={translateSlug(id)}
                                                    official
                                                    hideText={true}
                                                    link={`/blog/${list?.slug}/${item.slug}-${item.id}`}
                                                />
                                            ))}

                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* Container bên phải */}
                            <div className="home--desktop__right">
                                {/* Bài sea game */}
                                <div className="card-container">
                                    <a href={`/category/${filteredData?.slug}`}>
                                        <CardTitle logo={titleImage} title="" deco={false} style={{ background: "#0056FF", color: "#fff", paddingLeft: "-14px" }} />
                                    </a>
                                    <div className="card--header__content">
                                        {filteredData?.data?.slice(0, 3).map((item, index) => (
                                            <SmallCard key={index} avatar={item.avatar} name={item.author} time={formatDate(item.updated_at)} image={item.thumbnail} title={item.title} content={item.description} category={item.category?.name} official={item.official} link={`/blog/${filteredData?.slug}/${item.slug}-${item.id}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                                        ))}
                                        <a className="view-more--btn" href={`/category/${filteredData?.slug}`}>
                                            Xem thêm
                                        </a>
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
                                        {filteredData2?.data?.slice(0, 3).map((item, index) => (
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
                                                <div className={`item ${index === 0 ? 'active' : ''}`} onClick={() => setActive(index)}>
                                                    <img src={item.img} alt="" className="logo" />
                                                    <span className="text ">{item.name}</span>
                                                </div>
                                            </div>
                                        ))}


                                    </div>
                                </div>
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
                            <Explore />
                        </div>
                    </div >
                )
            }
        </div >

    )
}
export default BlogPage