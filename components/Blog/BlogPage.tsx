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
import extractArticlePath from "../../utils/extractArticlePath";
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
    const [list, setList] = useState<List[]>([]);
    const [data, setData] = useState<Data>();
    const [hotTopic, setHotTopic] = useState<List[]>([]);
    const { id, article } = use(params);
    const [mounted, setMounted] = useState(false);
    const getData = async () => {
        try {
            const res = await fetch(
                `https://webthethao.wepro.io.vn/api/article/${id}/${article}.htm`
            );
            const result = await res.json();
            console.log("data", result);
            setData(result);
        } catch (error) {
            console.log(error);
        }
    }
    const getList = async () => {
        try {
            const res = await fetch("https://webthethao.wepro.io.vn/api/newfeed?page=1");
            const result = await res.json();
            console.log("home", result.items);
            const updatedItems = result.items.map((item: any, index: number) => {
                if (index < 3) {
                    return {
                        ...item,
                        author: "Phan Kiet",
                        official: true,
                        avatar: "/assets/Rectangle 1.webp",
                        category: "Bóng đá",
                    };
                }
                return item;
            });

            setList(updatedItems.slice(0, 3));
            setHotTopic(updatedItems.slice(0, 5));

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        setMounted(true);
        getData();
        getList();
    }, []);

    const card2 = [{ img: "/assets/image 20-10.webp", name: "SEA Games 33" }, { img: "/assets/image 20.webp", name: "V-League" }, { img: "/assets/image 20-1.webp", name: "League 1" }, { img: "/assets/image 20-2.webp", name: "Seria A" }, { img: "/assets/image 20-3.webp", name: "Bundesliga" }, { img: "/assets/image 20-4.webp", name: "Premier League" }, { img: "/assets/image 20-5.webp", name: "Laliga" }, { img: "/assets/image 20-6.webp", name: "UEFA Europa League" }, { img: "/assets/image 20-7.webp", name: "UEFA Champions League" }]

    const changeHeader = useMediaQuery({ query: "(max-width: 1024px)" })
    const changeNav = useMediaQuery({ query: "(max-width: 768px)" })
    const swiperRef = useRef<any>(null);
    const [isSticky, setIsSticky] = useState(false);
    const card1 =
        [{
            avatar: "/assets/Rectangle 1.webp",
            name: "Kiet Phan",
            time: "2 giờ trước",
            image: "/assets/image.webp",
            title: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
            content: "Adidas đang định hình lại vị thế của mình trong làng Pickleball thông qua dòng vợt AdiPower mới - sự kết hợp giữa chất lượng cao và giá cả hợp lý.",
            category: "Pickleball",
            official: true
        },
        {
            avatar: "/assets/Rectangle 1.webp",
            name: "Kiet Phan",
            time: "2 giờ trước",
            image: "/assets/image.webp",
            title: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
            content: "Adidas đang định hình lại vị thế của mình trong làng Pickleball thông qua dòng vợt AdiPower mới - sự kết hợp giữa chất lượng cao và giá cả hợp lý.",
            category: "Bóng đá",
            official: true
        }
        ]
    const [active, setActive] = useState(0)
    const sidebarRef = useRef<HTMLDivElement>(null);
    if (!mounted) return null;

    return (
        <div className='App'>
            {changeHeader ? <Header /> : <HeaderDesktop />}
            <Search />
            {changeNav ? (<main >
                <div className="layout">
                    <div className="no-gap">
                        <Search />
                        <div className="blog">
                            <div className="blog__container">
                                <div className="blog__seo">{data?.head.seo.title}</div>
                                {/* <img src="/assets/image.webp" alt="" className="blog__image w-full" /> */}
                                <div className="blog__user">

                                    <div className="blog__user--inner">
                                        <SmallInfoHorizontal avatar="/assets/Rectangle 1.webp" name={data?.author} time={data?.created_at} official={true} />

                                        <div className="blog__cat">
                                            {id}
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="blog__body">
                                <h1><b>{data?.title}</b></h1>
                                <div dangerouslySetInnerHTML={{ __html: data?.body || "" }}></div>
                                {/* <blockquote><p>Mua các sản phẩm mới nhất tại <a href="">webthethao.vn</a></p><cite>-Webthethao</cite></blockquote> */}


                                <div className="blog__btn-container">
                                    <BlogButton number={2} text="Bình luận" />
                                    <BlogButton number={10} text="Chia sẻ" />
                                </div>
                            </div>
                            <div className="blog__comment">
                                <CommentInput />
                                <Comments avatar="/assets/Image (3).webp" name="Huong Nguyen" content="Anna hướng dẫn chi tiết, sửa tư thế nhẹ nhàng, giúp tôi thấy cơ thể dẻo dai hơn chỉ sau 2 tháng." time="10 phút trước" />
                            </div>
                        </div>
                    </div>
                    <Card avatar={card1[0].avatar} name={card1[0].name} time={card1[0].time} image={card1[0].image} title={card1[0].title} content={card1[0].content} category={card1[0].category} official={card1[0].official} link="/blog" />
                    <Card avatar={card1[1].avatar} name={card1[1].name} time={card1[1].time} image={card1[1].image} title={card1[1].title} content={card1[1].content} category={card1[1].category} official={card1[1].official} link="/blog" />
                </div>
            </main>) :
                (
                    <div className="detail-section">
                        <div className="home--desktop ">
                            <div className="detail-layout">

                                <div className="link--detail">
                                    <a className="link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                            <path d="M12 2.49219C10.625 2.49219 9.32812 2.75781 8.10938 3.28906C6.89062 3.80469 5.82812 4.51562 4.92188 5.42188C4.01562 6.32812 3.30469 7.39062 2.78906 8.60938C2.25781 9.82812 1.99219 11.125 1.99219 12.5C1.99219 13.75 2.21094 14.9297 2.64844 16.0391C3.08594 17.1641 3.67969 18.1641 4.42969 19.0391C5.17969 19.9141 6.07031 20.6406 7.10156 21.2188C8.13281 21.7969 9.24219 22.1797 10.4297 22.3672V15.3828H7.89844V12.5H10.4297V10.2969C10.4297 9.04688 10.7734 8.08594 11.4609 7.41406C12.1484 6.74219 13.0703 6.40625 14.2266 6.40625C14.7734 6.40625 15.2812 6.4375 15.75 6.5C16.2188 6.5625 16.4531 6.59375 16.4531 6.59375V9.05469H15.1875C14.5625 9.05469 14.1367 9.21875 13.9102 9.54688C13.6836 9.875 13.5703 10.2344 13.5703 10.625V12.5H16.3359L15.8906 15.3828H13.5703V22.3672C14.7578 22.1797 15.8672 21.7969 16.8984 21.2188C17.9297 20.6406 18.8242 19.9141 19.582 19.0391C20.3398 18.1641 20.9297 17.1641 21.3516 16.0391C21.7891 14.9297 22.0078 13.75 22.0078 12.5C22.0078 11.125 21.7422 9.82812 21.2109 8.60938C20.6953 7.39062 19.9844 6.32812 19.0781 5.42188C18.1719 4.51562 17.1094 3.80469 15.8906 3.28906C14.6719 2.75781 13.375 2.49219 12 2.49219Z" fill="black" />
                                        </svg>
                                    </a>
                                    <a className="link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                            <path d="M8.60156 4.50781H3L9.60938 13.3203L3.35156 20.4922H5.48438L10.5938 14.6094L15 20.4922H20.6016L13.7109 11.3281L19.6406 4.50781H17.5312L12.7266 10.0156L8.60156 4.50781ZM15.7969 18.8984L6.21094 6.10156H7.80469L17.3906 18.8984H15.7969Z" fill="black" />
                                        </svg>
                                    </a>
                                    <a className="link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                            <path d="M12 22.5078C10.625 22.5078 9.32812 22.2422 8.10938 21.7109C6.89062 21.1953 5.82812 20.4844 4.92188 19.5781C4.01562 18.6719 3.30469 17.6094 2.78906 16.3906C2.25781 15.1719 1.99219 13.875 1.99219 12.5C1.99219 11.125 2.25781 9.82812 2.78906 8.60938C3.30469 7.39062 4.01562 6.32812 4.92188 5.42188C5.82812 4.51562 6.89062 3.80469 8.10938 3.28906C9.32812 2.75781 10.625 2.49219 12 2.49219C13.375 2.49219 14.6719 2.75781 15.8906 3.28906C17.1094 3.80469 18.1719 4.51562 19.0781 5.42188C19.9844 6.32812 20.6953 7.39062 21.2109 8.60938C21.7422 9.82812 22.0078 11.125 22.0078 12.5C22.0078 13.875 21.7422 15.1719 21.2109 16.3906C20.6953 17.6094 19.9844 18.6719 19.0781 19.5781C18.1719 20.4844 17.1094 21.1953 15.8906 21.7109C14.6719 22.2422 13.375 22.5078 12 22.5078ZM8.88281 13.6719H8.90625C9.1875 14.625 9.40234 15.3398 9.55078 15.8164C9.69922 16.293 9.77344 16.5312 9.77344 16.5312C9.83594 16.6875 9.90234 16.7852 9.97266 16.8242C10.043 16.8633 10.125 16.8828 10.2188 16.8828C10.3125 16.8672 10.3906 16.8359 10.4531 16.7891C10.5156 16.7422 10.5781 16.6875 10.6406 16.625C10.6406 16.625 10.7383 16.5312 10.9336 16.3438C11.1289 16.1562 11.4297 15.8672 11.8359 15.4766L14.3672 17.375C14.6016 17.5 14.8008 17.5273 14.9648 17.457C15.1289 17.3867 15.2344 17.2109 15.2812 16.9297L16.9453 9.125C17.0391 8.75 17.0156 8.49609 16.875 8.36328C16.7344 8.23047 16.5234 8.21875 16.2422 8.32812L6.51562 12.0781C6.1875 12.2188 6.01562 12.3672 6 12.5234C5.98438 12.6797 6.11719 12.8047 6.39844 12.8984L8.88281 13.6719Z" fill="black" />
                                        </svg>
                                    </a>
                                    <a className="link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                            <path d="M13.0547 8.60938L14.4844 10.0156C15.1562 10.7031 15.6641 11.4766 16.0078 12.3359C16.3516 13.1953 16.5234 14.0742 16.5234 14.9727C16.5234 15.8711 16.3516 16.75 16.0078 17.6094C15.6641 18.4688 15.1562 19.2422 14.4844 19.9297L14.1328 20.2812C13.4453 20.9688 12.6719 21.4766 11.8125 21.8047C10.9531 22.1484 10.0742 22.3203 9.17578 22.3203C8.27734 22.3203 7.39844 22.1484 6.53906 21.8047C5.67969 21.4766 4.90625 20.9688 4.21875 20.2812C3.53125 19.5938 3.02344 18.8203 2.69531 17.9609C2.35156 17.1016 2.17969 16.2227 2.17969 15.3242C2.17969 14.4258 2.35156 13.5469 2.69531 12.6875C3.02344 11.8281 3.53125 11.0547 4.21875 10.3672L5.625 11.7969C5.14062 12.2812 4.78125 12.8281 4.54688 13.4375C4.29688 14.0625 4.17188 14.6953 4.17188 15.3359C4.17188 15.9766 4.29688 16.6016 4.54688 17.2109C4.78125 17.8203 5.14062 18.375 5.625 18.875C6.125 19.3594 6.67969 19.7188 7.28906 19.9531C7.89844 20.2031 8.52344 20.3281 9.16406 20.3281C9.80469 20.3281 10.4375 20.2031 11.0625 19.9531C11.6719 19.7188 12.2188 19.3594 12.7031 18.875L13.0547 18.5C13.5391 18.0156 13.9062 17.4688 14.1562 16.8594C14.4062 16.25 14.5312 15.625 14.5312 14.9844C14.5312 14.3438 14.4062 13.7109 14.1562 13.0859C13.9062 12.4766 13.5391 11.9297 13.0547 11.4453L11.6484 10.0156L13.0547 8.60938ZM19.7812 14.6328L18.375 13.2031C18.8594 12.7188 19.2188 12.1719 19.4531 11.5625C19.7031 10.9375 19.8281 10.3047 19.8281 9.66406C19.8281 9.02344 19.7031 8.39844 19.4531 7.78906C19.2188 7.17969 18.8594 6.625 18.375 6.125C17.875 5.64062 17.3203 5.28125 16.7109 5.04688C16.1016 4.79688 15.4766 4.67188 14.8359 4.67188C14.1953 4.67188 13.5625 4.79688 12.9375 5.04688C12.3281 5.28125 11.7812 5.64062 11.2969 6.125L10.9453 6.5C10.4453 6.98438 10.0781 7.53125 9.84375 8.14062C9.59375 8.75 9.46875 9.375 9.46875 10.0156C9.46875 10.6562 9.59375 11.2891 9.84375 11.9141C10.0781 12.5234 10.4453 13.0703 10.9453 13.5547L12.3516 14.9844L10.9453 16.3906L9.51562 14.9844C8.84375 14.2969 8.33594 13.5234 7.99219 12.6641C7.64844 11.8047 7.47656 10.9258 7.47656 10.0273C7.47656 9.12891 7.64844 8.25 7.99219 7.39062C8.33594 6.53125 8.84375 5.75781 9.51562 5.07031L9.86719 4.71875C10.5547 4.03125 11.3281 3.52344 12.1875 3.19531C13.0469 2.85156 13.9258 2.67969 14.8242 2.67969C15.7227 2.67969 16.6016 2.85156 17.4609 3.19531C18.3203 3.52344 19.0938 4.03125 19.7812 4.71875C20.4688 5.40625 20.9766 6.17969 21.3047 7.03906C21.6484 7.89844 21.8203 8.77734 21.8203 9.67578C21.8203 10.5742 21.6484 11.4531 21.3047 12.3125C20.9766 13.1719 20.4688 13.9453 19.7812 14.6328Z" fill="black" />
                                        </svg>
                                    </a>
                                    <a className="link">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69001C2 5.60001 4.49 3.10001 7.56 3.10001C9.38 3.10001 10.99 3.98001 12 5.34001C13.01 3.98001 14.63 3.10001 16.44 3.10001C19.51 3.10001 22 5.60001 22 8.69001C22 15.69 15.52 19.82 12.62 20.81Z" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </div>


                                <div className="blog detail">

                                    <div className="blog__container">

                                        <div className="blog__user">

                                        </div>
                                    </div>
                                    <div className="blog__body">
                                        <BlogTitle title={data?.title ?? ""} />
                                        <div className="blog__user--inner boder">
                                            <SmallInfoHorizontal avatar={data?.avatar ?? ""} name={data?.author ?? ""} time={data?.updated_at ?? ""} official={true} />
                                            <div className="blog__cat">
                                                Pickleball
                                            </div>
                                        </div>

                                    </div>
                                    <div className="blog__body" dangerouslySetInnerHTML={{ __html: data?.body ?? "" }}></div>
                                    <div className="blog__body">

                                        <div className="blog__btn-container">
                                            <BlogButton number={2} text="Bình luận" />
                                            <BlogButton number={10} text="Chia sẻ" />
                                        </div>
                                    </div>
                                    <div className="blog__comment" >
                                        <CommentInput />
                                        <Comments avatar={data?.avatar ?? ""} name={data?.author ?? ""} content="Anna ướng dẫn chi tiết, sửa tư thế nhẹ nhàng, giúp tôi thấy cơ thể dẻo dai hơn chỉ sau 2 tháng." time={data?.updated_at ?? ""} />
                                    </div>
                                    <div className="adv">
                                        <div className="w-full">
                                            <div className="adv__text padding-12">Advertisement</div>
                                            <img src="/assets/Advertisement.webp" alt="" />
                                        </div>
                                    </div>
                                    <div className="empty-container">
                                        <CardTitle title="Cùng chủ đề" className="smaller" deco={true} />
                                        <div className="detail__card">
                                            {list?.slice(0, 3).map(({ article_url, author, time_text, thumbnail, title, summary }) => (
                                                <Card
                                                    key={article_url}
                                                    className="smaller"
                                                    avatar="/assets/Image (3).webp"
                                                    name={author ?? ""}
                                                    time={time_text ?? ""}
                                                    image={thumbnail ?? ""}
                                                    title={title ?? ""}
                                                    content={summary ?? ""}
                                                    category="Bóng đá"
                                                    official
                                                    link={`blog/${extractArticlePath(article_url)}`}
                                                />
                                            ))}

                                        </div>
                                    </div>
                                    <div className="empty-container">
                                        <CardTitle title="Bài viết nổi bật" className="smaller" deco={true} />
                                        <div className="detail__card">
                                            {list?.slice(4, 7)?.map(({ article_url, author, time_text, thumbnail, title, summary }) => (
                                                <Card
                                                    key={article_url}
                                                    className="smaller"
                                                    avatar="/assets/Image (3).webp"
                                                    name={author ?? ""}
                                                    time={time_text ?? ""}
                                                    image={thumbnail ?? ""}
                                                    title={title ?? ""}
                                                    content={summary ?? ""}
                                                    category="Bóng đá"
                                                    official
                                                    link={`blog / ${extractArticlePath(article_url)}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    {/* Duplicate empty-containers for scrolling */}


                                </div>

                            </div>

                            <div className="home--desktop__right">
                                <div className="card-container">
                                    <CardTitle logo="/assets/logo-sea-game 1.webp" title="" deco={false} style={{ background: "#0056FF", color: "#fff", paddingLeft: "-14px" }} />
                                    <div className="card--header__content">
                                        {list.map((item, index) => (
                                            <SmallCard key={index} avatar={item.avatar} name={item.author} time={item.time_text} image={item.thumbnail} title={item.title} content={item.summary} category={item.category} official={item.official} link={`/ blog / ${extractArticlePath(item.article_url)}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                                        ))}
                                        <div className="view-more--btn">
                                            <a href="#">Xem thêm</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-container">
                                    <CardTitle title="Nhận định" deco={true} />
                                    <div className="card--header__content">
                                        {list?.map((item, index) => (
                                            <SmallCard key={index} avatar={item.avatar} name={item.author} time={item.time_text} image={item.thumbnail} title={item.title} content={item.summary} category={item.category} official={item.official} link={`/blog/${extractArticlePath(item.article_url)}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                                        ))}
                                        <div className="view-more--btn">
                                            <a href="#">Xem thêm</a>
                                        </div>
                                    </div>
                                </div>
                                <Advertisement image="/assets/adv.webp" />
                                <div className="card-container">
                                    <CardTitle title="Đọc nhiều" deco={true} />
                                    <div className="card--header__content">
                                        {list?.map((item, index) => (
                                            <SmallCard key={index} avatar={item.avatar} name={item.author} time={item.time_text} image={item.thumbnail} title={item.title} content={item.summary} category={item.category} official={item.official} link={`/blog/${extractArticlePath(item.article_url)}`} style={{ padding: '10px 0', borderTop: 'none' }} />
                                        ))}
                                        <div className="view-more--btn">
                                            <a href="#">Xem thêm</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="empty-container">
                                    <CardTitle title="Lịch thi đấu bóng đá" style={{ borderBottom: 'none' }} deco={true} />
                                    <div className="card--header__content">
                                        {card2.map((item, index) => (
                                            <div className="home--desktop__schedule">
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
                                        <HotTopic isTitled={false} hotTopic={hotTopic} />

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
                )}
        </div>

    )
}
export default BlogPage