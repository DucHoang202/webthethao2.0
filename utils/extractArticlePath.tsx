import { CategoryResponse } from "@/types/Types";
import categoriesTree from "../types/categories_tree.json";

export function extractArticlePath(url: string): string {
    // const pathname = new URL(url).pathname;
    // return pathname
    //     .replace(/^\/api\/article/, "") // bỏ /api/article
    //     .replace(/\.htm$/, "");         // bỏ .htm
    return url
}


export function changeThumbSize(url: string, size: string): string {
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
    const category = categoriesTree.find((category) => category.slug === slug);
    return category?.name || "";
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
export function formatDate(date?: string): string {
    if (!date) return "";
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
}