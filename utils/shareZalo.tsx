// lib/zaloRequest.ts
export async function zaloRequest({
    url,
    method = "GET",
    accessToken,
    params = {},
    body = null,
    headers = {},
}: {
    url: string;
    method?: "GET" | "POST" | "PUT" | "DELETE";
    accessToken: string;
    params?: Record<string, any>;
    body?: any;
    headers?: Record<string, string>;
}) {
    // build query string
    const query = new URLSearchParams(params as any).toString();
    const fullUrl = query ? `${url}?${query}` : url;

    const res = await fetch(fullUrl, {
        method,
        headers: {
            "Content-Type": "application/json",
            "access_token": accessToken,
            ...headers,
        },
        body: body ? JSON.stringify(body) : undefined,
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(`Zalo API Error: ${JSON.stringify(data)}`);
    }

    return data;
}
