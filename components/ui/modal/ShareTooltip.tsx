import * as Tooltip from "@radix-ui/react-tooltip";
import { data } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import "../../../styles/blocks/detail/_detail.scss";
const ShareTooltip = ({ title, flex }: { title?: string, flex?: boolean }) => {
    const [isLiked, setIsLiked] = useState(false);
    async function copyUrl() {
        const text = window.location.href;

        try {
            await navigator.clipboard.writeText(text);
            toast.success("Đã copy link!");
        } catch (err) {
            // fallback cho HTTP hoặc Safari cũ
            const textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);

            toast.success("Đã copy link (fallback)!");
        }
    }


    function handleOpenX(url: string) {
        const appUrl = `twitter://open?url=${encodeURIComponent(url)}`;
        const webUrl = `https://x.com/intent/tweet?url=${encodeURIComponent(url)}`;

        // thử mở app
        window.location.href = appUrl;
        // fallback về web nếu app không mở được
        setTimeout(() => {
            window.open(webUrl, "_blank");
        }, 800);
    };
    function ShareFb(url: string, quote?: string) {
        const shareUrl = new URL("https://www.facebook.com/sharer/sharer.php");

        shareUrl.searchParams.set("u", url);

        if (quote) {
            shareUrl.searchParams.set("quote", quote);
        }

        window.open(
            shareUrl.toString(),
            "_blank",
            "width=600,height=400"
        );
    }
    function shareZalo(url: string) {
        const start = Date.now();
        window.location.href = `zalo://share?url=${encodeURIComponent(url)}`;

        setTimeout(() => {
            if (Date.now() - start < 1500) {
                window.open(`https://zalo.me/share?url=${encodeURIComponent(url)}`, "_blank");
            }
        }, 1000);
    }
    return (
        <div className="share">
            <div className="share__modal">

                <a className="share__modal--link" onClick={() => ShareFb(window.location.href, title)}>
                    <Tooltip.Provider>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M12 2.49219C10.625 2.49219 9.32812 2.75781 8.10938 3.28906C6.89062 3.80469 5.82812 4.51562 4.92188 5.42188C4.01562 6.32812 3.30469 7.39062 2.78906 8.60938C2.25781 9.82812 1.99219 11.125 1.99219 12.5C1.99219 13.75 2.21094 14.9297 2.64844 16.0391C3.08594 17.1641 3.67969 18.1641 4.42969 19.0391C5.17969 19.9141 6.07031 20.6406 7.10156 21.2188C8.13281 21.7969 9.24219 22.1797 10.4297 22.3672V15.3828H7.89844V12.5H10.4297V10.2969C10.4297 9.04688 10.7734 8.08594 11.4609 7.41406C12.1484 6.74219 13.0703 6.40625 14.2266 6.40625C14.7734 6.40625 15.2812 6.4375 15.75 6.5C16.2188 6.5625 16.4531 6.59375 16.4531 6.59375V9.05469H15.1875C14.5625 9.05469 14.1367 9.21875 13.9102 9.54688C13.6836 9.875 13.5703 10.2344 13.5703 10.625V12.5H16.3359L15.8906 15.3828H13.5703V22.3672C14.7578 22.1797 15.8672 21.7969 16.8984 21.2188C17.9297 20.6406 18.8242 19.9141 19.582 19.0391C20.3398 18.1641 20.9297 17.1641 21.3516 16.0391C21.7891 14.9297 22.0078 13.75 22.0078 12.5C22.0078 11.125 21.7422 9.82812 21.2109 8.60938C20.6953 7.39062 19.9844 6.32812 19.0781 5.42188C18.1719 4.51562 17.1094 3.80469 15.8906 3.28906C14.6719 2.75781 13.375 2.49219 12 2.49219Z" fill="black" />
                                </svg>
                            </Tooltip.Trigger>

                            <Tooltip.Content side="top" className="tooltipContent">
                                Chia sẻ lên Facebook
                            </Tooltip.Content>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                </a>
                <a className="share__modal--link">
                    <Tooltip.Provider>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <div className="zalo">
                                    <img src={"/assets/Zalo.webp"} alt="" onClick={() => { copyUrl(); shareZalo(window.location.href) }} />
                                </div>
                            </Tooltip.Trigger>
                            <Tooltip.Content side="top" className="tooltipContent">
                                Chia sẻ lên Zalo
                            </Tooltip.Content>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                </a>
                <a className="share__modal--link" onClick={() => handleOpenX(window.location.href)}>
                    <Tooltip.Provider>
                        <Tooltip.Root>
                            <Tooltip.Trigger asChild>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                    <path d="M8.60156 4.50781H3L9.60938 13.3203L3.35156 20.4922H5.48438L10.5938 14.6094L15 20.4922H20.6016L13.7109 11.3281L19.6406 4.50781H17.5312L12.7266 10.0156L8.60156 4.50781ZM15.7969 18.8984L6.21094 6.10156H7.80469L17.3906 18.8984H15.7969Z" fill="black" />
                                </svg>
                            </Tooltip.Trigger>
                            <Tooltip.Content side="top" className="tooltipContent">
                                Chia sẻ lên X
                            </Tooltip.Content>
                        </Tooltip.Root>
                    </Tooltip.Provider>
                </a>


            </div>

            <div className="share__modal--line cursor-pointer">
                <input className="share__modal--line--text" value={window.location.href} />
                <button className="share__modal--line--btn" onClick={copyUrl}>Sao chép</button>
            </div>
        </div>
    )
}
export default ShareTooltip