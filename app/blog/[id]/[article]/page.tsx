
import BlogPage from "../../../../components/Blog/BlogPage";
import type { Metadata } from "next";
import categoryArticle from "../../../../types/categories_tree.json";
import { CategoryResponse } from "../../../../types/Types";
import { Data, PageProps } from "../../../../types/Types";


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id, article } = await params;
    try {
        const res = await fetch(
            `https://webthethao.wepro.io.vn/api/article/${id}/${article}.htm`,
            {
                next: { revalidate: 60 }, // revalidate sau 60s
            }
        );


        const data = await res.json();
        const seo = data.head.seo;

        return {
            title: seo.title,
            description: seo.description,

            keywords: seo.keywords?.split(",").map((k: string) => k.trim()),

            alternates: {
                canonical: seo.canonical,
            },

            robots: seo.robots === "index,follow"
                ? { index: true, follow: true }
                : { index: false, follow: false },
        };
    } catch (error) {
        console.error(error);

        return {
            title: "Bài viết",
            description: "Chi tiết bài viết",
        };
    }
}


import HomePage from "@/components/Home/HomePage";
import { changeThumbSize, getSlugFromLink, translateSlug } from "@/utils/extractArticlePath";

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

async function Blog({ params }: { params: { id: string, article: string } }) {

    const slug = "sea-games"
    const slug1 = "nhan-dinh-bong-da"
    const slug2 = "pickle-ball" //Đọc nhiều 
    const slug3 = "bong-da-viet-nam"
    const slug4 = "mma-boxing"
    const slug5 = "videos"
    // const allSlug = categoryArticle.flatMap(item => [
    //   item.slug,
    //   ...(item.children?.map(child => child.slug) || [])
    // ]);
    const { id, article } = await params;
    const allSlug = categoryArticle.map((item) => item.slug);
    const categoryRequests = allSlug.map(slug => fetchCategory(slug));
    async function getData(retry = 0): Promise<Data | null> {
        if (!id || !article) return null;

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
            return result;

        } catch (error) {
            console.log("Fetch error:", error);
            return null;
        }
    };


    async function getIdenticalArticle(): Promise<CategoryResponse> {
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
        filteredData3,
        filteredData4,
        filteredData5,
        allData,
        ...categoryData
    ] = await Promise.all([
        fetchCategory(slug),
        fetchCategory(slug1),
        fetchCategory(slug2),
        fetchCategory(slug3),
        fetchCategory(slug4),
        fetchCategory(slug5),
        fetchHomeFeed(),
        ...categoryRequests
    ])

    const titleImage = "/assets/logo-sea-game 1.webp"
    //Get individual data
    const hotTopic = [{ link: "#", title: "Chủ đề nóng 1" }, { link: "#", title: "Chủ đề nóng 2" }, { link: "#", title: "Chủ đề nóng 3" }]

    const card2 = [{ img: "/assets/image 20-10.webp", name: "SEA Games 33" }, { img: "/assets/image 20.webp", name: "V-League" }, { img: "/assets/image 20-1.webp", name: "League 1" }, { img: "/assets/image 20-2.webp", name: "Seria A" }, { img: "/assets/image 20-3.webp", name: "Bundesliga" }, { img: "/assets/image 20-4.webp", name: "Premier League" }, { img: "/assets/image 20-5.webp", name: "Laliga" }, { img: "/assets/image 20-6.webp", name: "UEFA Europa League" }, { img: "/assets/image 20-7.webp", name: "UEFA Champions League" }]
    const fetchData = await getData()
    const fetchList = await getIdenticalArticle()
    const awaitParam = await params
    console.log("Params", awaitParam)
    return (
        <BlogPage
            allCategory={categoryData}
            titleImage={titleImage}
            hotTopic={hotTopic}
            card2={card2}
            filteredData={filteredData}
            filteredData1={filteredData1}
            filteredData2={filteredData2}
            filteredData3={filteredData3}
            filteredData4={filteredData4}
            filteredData5={filteredData5}
            homeFeed={allData}
            params={awaitParam}
            getData={fetchData}
            getList={fetchList}
        />
    )
}
export default Blog;