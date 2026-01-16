export interface List {
    id: number;
    title: string;
    summary: string;
    thumbnail: string;
    article_url: string;
    category: string;
    official: boolean;
    time_text: string;
    avatar: string;
    author: string;
}
// Category
export interface Category {
    id: string;
    name: string;
    seo_title: string;
    seo_description: string;
    seo_thumbnail: string;
    seo_keyword: string;
    path: string;
    level: number;
    view_count_ga: number;
    slug: string;
    links: string; // JSON string
    priority: number;
    status: number;
    type_id: number;
    has_child: boolean;
    seo_active: boolean;
    order_highlight: boolean;
    order_hot: boolean;
    parent_id: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    children: Category[] | null;
    parent: Category | null;
    articles: any;
}

// Article Type
export interface ArticleType {
    id: number | null;
    name: string | null;
    description: string | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

// Main Article
export interface Article {
    id?: string;
    avatar?: string,
    official?: boolean;
    seo_title?: string;
    seo_description?: string;
    seo_keywords?: string | null;
    seo_image?: string | null;

    title?: string;
    alias?: string;
    slug?: string;
    description?: string;
    content?: string;
    thumbnail?: string;

    views?: number;
    view_count_ga?: number;

    status?: "published" | "draft" | "deleted";

    is_highlight?: number;
    is_hot?: number;
    is_live?: number;
    is_highlight_category?: number;
    is_hot_category?: number;
    is_fia?: boolean;
    display_images_recent?: boolean;

    type_id?: number;
    type?: ArticleType;

    published_at?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string | null;

    author?: string | null;
    editor?: string | null;
    approval?: string | null;
    note?: string | null;

    category?: Category | null;
    categories?: Category[] | null;

    magazine?: any;
    audio?: string | null;
    live?: any;
    event_article?: any;
    vote?: number | null;

    related_articles?: any[] | null;
    tags?: string[] | null;
    insert_links?: any;
    data_type?: string | null;

    matches?: any[];
    standings?: any[];
}
export interface CategoryResponse {
    status: string;
    slug: string;
    data: Article[];
}
