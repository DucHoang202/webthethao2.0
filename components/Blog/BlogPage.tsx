'use client'
import { use } from "react";
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
}
const BlogPage = ({ params }: PageProps) => {
    const [list, setList] = useState<List[]>([]);
    const [data, setData] = useState<Data>();
    const { id, article } = use(params);
    const [mounted, setMounted] = useState(false);
    const getData = async () => {
        try {
            const res = await fetch(
                `https://webthethao.wepro.io.vn/api/article/${id}/${article}.htm`,
                { cache: "no-store" }
            );
            const data = await res.json();
            console.log("data", data);
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        setMounted(true);
        getData();

    }, []);
    const changeHeader = useMediaQuery({ query: "(max-width: 1024px)" })
    const changeNav = useMediaQuery({ query: "(max-width: 768px)" })
    const card1 =
    {
        avatar: "/assets/Rectangle 1.webp",
        name: "Kiet Phan",
        time: "2 giờ trước",
        image: "/assets/image.webp",
        title: "Adidas trở lại mạnh mẽ trên thị trường Pickleball với dòng vợt AdiPower",
        content: "Adidas đang định hình lại vị thế của mình trong làng Pickleball thông qua dòng vợt AdiPower mới - sự kết hợp giữa chất lượng cao và giá cả hợp lý.",
        category: "Pickleball",
        official: true
    }
    if (!mounted) return null;

    return (
        <div className='App'>
            {changeHeader ? <Header /> : <HeaderDesktop />}
            <main >
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
                    <Card avatar={card1.avatar} name={card1.name} time={card1.time} image={card1.image} title={card1.title} content={card1.content} category={card1.category} official={card1.official} link="/blog" />
                    <Card avatar={card1.avatar} name={card1.name} time={card1.time} image={card1.image} title={card1.title} content={card1.content} category={card1.category} official={card1.official} link="/blog" />
                </div></main>
            {changeNav ? <Nav /> : ""}
        </div>

    )
}
export default BlogPage