export function extractArticlePath(url: string): string {
    const pathname = new URL(url).pathname;

    return pathname
        .replace(/^\/api\/article/, "") // bỏ /api/article
        .replace(/\.htm$/, "");         // bỏ .htm
}


export function changeThumbSize(url: string, size: string): string {
    return url.replace(/\/thumb\/\d+-\d+\//, `/thumb/${size}/`);
}