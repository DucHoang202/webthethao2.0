import BlogPage from "../../../../components/Blog/BlogPage";
import type { Metadata } from "next";

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id, article } = await params;
    try {
        const res = await fetch(
            `https://webthethao.wepro.io.vn/api/article/${id}/${article}.htm`,
            { cache: "no-store" }
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


export default async function Blog({ params }: PageProps) {
    return <BlogPage params={params} />;
}