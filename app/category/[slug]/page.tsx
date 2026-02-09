
import { Data } from "../../../types/Types";
import Category from "../../../components/Category/Category";
import { changeThumbSize } from "@/utils/extractArticlePath";
import categoryArticle from "../../../types/categories_tree.json";
import { CategoryResponse } from "../../../types/Types";
interface PageProps {
    params: Promise<{ slug: string }>
}
export const revalidate = 60; // ISR 30s

async function fetchCategory(slug: string) {
    const res = await fetch(
        `https://webthethao.wepro.io.vn/api/category-article/load/${slug}`,
        { cache: "force-cache" }
    )

    const result = await res.json()

    result.data = result.data?.map((item: any) => ({
        ...item,
        author: "Phan Kiet",
        official: true,
        avatar: "/assets/Rectangle 1.webp",
    }))

    return result
}

async function fetchHomeFeed() {
    const res = await fetch(
        "https://webthethao.wepro.io.vn/api/newfeed?page=1",
        { cache: "force-cache" }
    )

    const result = await res.json()

    return result.items.map((item: any) => ({
        ...item,
        author: "Phan Kiet",
        official: true,
        avatar: "/assets/Rectangle 1.webp",
        thumbnail: changeThumbSize(item.thumbnail, "564-376"),
    }))
}

async function CategoryPage({ params }: PageProps) {
    const { slug: currentSlug } = await params;

    const slug = "sea-games"
    const slug1 = "nhan-dinh-bong-da"
    const slug2 = "pickle-ball" //Đọc nhiều 

    async function getIdenticalArticle(slug: string): Promise<CategoryResponse> {
        try {
            const res = await fetch("https://webthethao.wepro.io.vn/api/category-article/load/" + slug);
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
            return result;
        } catch (error) {
            console.log(error);
            return { status: "", slug: "", data: [] };
        }
    }

    const [
        filteredData,
        filteredData1,
        filteredData2,
        allData,
        fetchList
    ] = await Promise.all([
        fetchCategory(slug),
        fetchCategory(slug1),
        fetchCategory(slug2),
        fetchHomeFeed(),
        getIdenticalArticle(currentSlug)
    ])

    const titleImage = "/assets/logo-sea-game 1.webp"
    const hotTopic = [{ link: "#", title: "Chủ đề nóng 1" }, { link: "#", title: "Chủ đề nóng 2" }, { link: "#", title: "Chủ đề nóng 3" }]
    const card2 = [{ img: "/assets/image 20-10.webp", name: "SEA Games 33" }, { img: "/assets/image 20.webp", name: "V-League" }, { img: "/assets/image 20-1.webp", name: "League 1" }, { img: "/assets/image 20-2.webp", name: "Seria A" }, { img: "/assets/image 20-3.webp", name: "Bundesliga" }, { img: "/assets/image 20-4.webp", name: "Premier League" }, { img: "/assets/image 20-5.webp", name: "Laliga" }, { img: "/assets/image 20-6.webp", name: "UEFA Europa League" }, { img: "/assets/image 20-7.webp", name: "UEFA Champions League" }]

    return (
        <Category
            allCategory={[]}
            titleImage={titleImage}
            hotTopic={hotTopic}
            card2={card2}
            filteredData={filteredData}
            filteredData1={filteredData1}
            filteredData2={filteredData2}
            homeFeed={allData}
            params={{ slug: currentSlug }}
            list={fetchList}
        />
    )
}



export default CategoryPage