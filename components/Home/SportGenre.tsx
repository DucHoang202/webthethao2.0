'use client'
import Card from "../ui/card/NewsCard";
import CardTitle from "../ui/card/CardHeader";
import SmallCard from "../ui/card/ArticleCard";
import { useEffect, useState } from "react";
import { extractArticlePath, changeThumbSize } from "../../utils/extractArticlePath";
import { CategoryResponse } from "../../types/Types";
import { translateSlug } from "../../utils/extractArticlePath";
import { formatDate } from "../../utils/extractArticlePath";
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
    params: Promise<{ id: string }>;
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
    author: string;
}


const SportGenre: React.FC<{ sport: string, delayMs?: number }> = ({ sport, delayMs }) => {
    const [data, setData] = useState<CategoryResponse>();
    const [filteredData, setFilteredData] = useState<CategoryResponse>();
    const [filteredData1, setFilteredData1] = useState<List[]>([]);

    const getData = async () => {
        try {
            const res = await fetch(`https://webthethao.wepro.io.vn/api/category-article/load/${sport}`);
            const data = await res.json();
            const updatedItems = data.data?.map((item: any, index: number) => {
                if (index < data.data.length) {
                    return {
                        ...item,
                        author: "Phan Kiet",
                        official: true,
                        avatar: "/assets/Rectangle 1.webp"


                    };
                }
                return item;
            });
            data.data = updatedItems;
            setData(data);
            setFilteredData(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            getData();
        }, delayMs);

        return () => clearTimeout(timer);
    }, [sport]);

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
    function getItemData(data: List) {

        window.location.href = "/blog/" + extractArticlePath(data.article_url);


    }

    return (
        <div className="sport-genre bg-white">
            <CardTitle title={translateSlug(sport)} arrow={true} deco={true} />

            {filteredData?.data?.slice(0, 4).map((item: any, index: number) =>
                index === 0 ? (
                    <Card key={index} avatar={item.avatar} name={item.author} time={formatDate(item.updated_at)} image={item.thumbnail} title={item.title} content={item.description} category={item.category.name} official={item.official} link={`/blog/${filteredData.slug}/${item.slug}-${item.id}`} />
                ) : (
                    <div key={item.id} className="card--article">
                        <div className="card--article__container">
                            <a href={`/blog/${filteredData.slug}/${item.slug}-${item.id}`} className="image cursor-pointer">
                                <img src={item.thumbnail} alt="" className="image" />
                            </a>

                            <div className="body">
                                <a href={`/blog/${filteredData.slug}/${item.slug}-${item.id}`} className="title cursor-pointer">
                                    {item.title}
                                </a>

                                <div className="footer">
                                    <div className="card--article__info">
                                        <div className="card--article__name">{item.author}</div>
                                        <div className="card--article__time">{formatDate(item.updated_at)}</div>
                                    </div>

                                    <div className="right">
                                        <div className="item">
                                            <img src="/assets/message.webp" alt="" className="icon" />
                                        </div>
                                        <div className="item">
                                            <img src="/assets/export.webp" alt="" className="icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                )
            )}
            <button className="view-more--btn">
                Xem thêm
            </button>
        </div >
    )
}

export default SportGenre;
