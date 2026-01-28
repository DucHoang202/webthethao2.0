import { CategoryResponse } from "@/types/Types";
import categoriesTree from "../types/categories_tree.json";

export function extractArticlePath(url: string): string {
    const pathname = new URL(url).pathname;
    return pathname
        .replace(/^\/api\/article/, "") // bỏ /api/article
        .replace(/\.htm$/, "");         // bỏ .htm
}


export function changeThumbSize(url: string | undefined, size: string): string {
    if (!url) return "";
    return url.replace(/\/thumb\/\d+-\d+\//, `/thumb/${size}/`);
}
export function matchCategoryName(slug: string): string {
    const category = categoriesTree.find((category) => category.slug === slug);
    return category?.name || "";
}

export async function getCategoryArticlePath(slug: string) {
    try {
        const res = await fetch(`https://webthethao.wepro.io.vn/api/category-article/${slug}`)
        const data = await res.json()
        return data.items
    } catch {
        return []
    }
}
export async function getListArticle() {
    try {
        const res = await fetch("https://webthethao.wepro.io.vn/api/newfeed?page=1");
        const data = await res.json();
        console.log("list", data.items);
        return data.items
    } catch {
        return []
    }
}
export function translateSlug(slug: string): string {
    for (const category of categoriesTree) {
        if (category.slug === slug) {
            return category.name;
        }

        const child = category.children?.find((c) => c.slug === slug);
        if (child) {
            return child.name;
        }
    }

    return "";
}


export function getSlugFromLink(url: string): string {
    const pathname = new URL(url).pathname;
    return pathname
        .replace(/^\/api\/article/, "") // bỏ /api/article
        .replace(/\.htm$/, "")         // bỏ .htm
        .split("/")
        .slice(0, 2)[1]

}
import categoryArticle from "../types/categories_tree.json";
export function authorPlaceholder() {
    const updatedItems = categoryArticle.map((item: any, index: number) => {
        if (index < categoryArticle.length) {
            return {
                ...item,
                author: "Phan Kiet",
                official: true,
                avatar: "/assets/Rectangle 1.webp",

            };
        }
        return item;
    });
    return updatedItems;
}
export function formatDate(isoTime?: string | Date): string {
    if (!isoTime) return "";
    const now = new Date().getTime();
    const past = new Date(isoTime).getTime();

    const diffMs = now - past;
    const diffSeconds = Math.floor(diffMs / 1000);
    const diffMinutes = Math.floor(diffSeconds / 60);
    const diffHours = Math.floor(diffMinutes / 60);
    const diffDays = Math.floor(diffHours / 24);
    const diffYears = Math.floor(diffDays / 365);

    // ⏱️ Dưới 1 phút
    if (diffSeconds < 60) {
        return "Vừa xong";
    }

    // ⏱️ Dưới 1 giờ
    if (diffMinutes < 60) {
        return `${diffMinutes} phút trước`;
    }

    // ⏱️ Dưới 24 giờ
    if (diffHours < 24) {
        return `${diffHours} giờ trước`;
    }

    // 📅 Dưới 7 ngày
    if (diffDays < 7) {
        return `${diffDays} ngày trước`;
    }

    const date = new Date(past);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    // 📆 Trên 1 năm
    if (diffYears >= 1) {
        return `${day}/${month}/${year}`;
    }

    // 📆 Trên 7 ngày
    return `${day}/${month}`;
}
export function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// export const allSlug = categoryArticle.flatMap(item => [
//     item.slug,
//     ...(item.children?.map(child => child.slug) || [])
// ]);

export const allSlug = categoryArticle.map(item => item.slug);

export async function fetchCategory(slug: string) {
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

export async function fetchHomeFeed() {
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
export const categoryRequests = allSlug.map(slug => fetchCategory(slug));

