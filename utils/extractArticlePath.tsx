function extractArticlePath(url: string): string {
    const pathname = new URL(url).pathname;

    return pathname
        .replace(/^\/api\/article/, "") // bỏ /api/article
        .replace(/\.htm$/, "");         // bỏ .htm
}

export default extractArticlePath;
