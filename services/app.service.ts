import categoryArticle from "../types/categories_tree.json";
import { changeThumbSize } from "../utils/extractArticlePath";
export const revalidate = 30; // ISR 30s

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
export const fetchAllData = async () => {
    const slug = "sea-games"
    const slug1 = "nhan-dinh-bong-da"
    const slug2 = "pickle-ball" //Đọc nhiều 
    const slug3 = "bong-da-viet-nam"
    const slug4 = "mma-boxing"
    const slug5 = "videos"
    const allSlug = categoryArticle.flatMap(item => [
        item.slug,
        ...(item.children?.map(child => child.slug) || [])
    ]);
    //const allSlug = categoryArticle.map((item) => item.slug);
    const categoryRequests = allSlug.map(slug => fetchCategory(slug));
    const [
        filteredData,
        filteredData1,
        filteredData2,
        filteredData3,
        filteredData4,
        filteredData5,
        data,
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
    return {
        filteredData,
        filteredData1,
        filteredData2,
        filteredData3,
        filteredData4,
        filteredData5,
        data,
        categoryData
    }
}