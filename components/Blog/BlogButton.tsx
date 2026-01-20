const BlogButton = ({ number, text }: { number: number, text: string }) => {
    return (
        <div className="blog-button ">
            {text === "Bình luận" ?
                (<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.95817 11.0833H4.6665C2.33317 11.0833 1.1665 10.5 1.1665 7.58329V4.66663C1.1665 2.33329 2.33317 1.16663 4.6665 1.16663H9.33317C11.6665 1.16663 12.8332 2.33329 12.8332 4.66663V7.58329C12.8332 9.91663 11.6665 11.0833 9.33317 11.0833H9.0415C8.86067 11.0833 8.68567 11.1708 8.57484 11.3166L7.69984 12.4833C7.31484 12.9966 6.68484 12.9966 6.29984 12.4833L5.42484 11.3166C5.3315 11.1883 5.11567 11.0833 4.95817 11.0833Z" stroke="#3A3A3A" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M9.33143 6.41667H9.33667" stroke="#3A3A3A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.99745 6.41667H7.00269" stroke="#3A3A3A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M4.66346 6.41667H4.6687" stroke="#3A3A3A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                </svg>) : (<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.58398 6.41663L12.3673 1.6333" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12.8332 3.96663V1.16663H10.0332" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6.41602 1.16663H5.24935C2.33268 1.16663 1.16602 2.33329 1.16602 5.24996V8.74996C1.16602 11.6666 2.33268 12.8333 5.24935 12.8333H8.74935C11.666 12.8333 12.8327 11.6666 12.8327 8.74996V7.58329" stroke="#52524F" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                )}
            <div className="info-container">
                <div className="text">{number}</div>
                <div className="text">{text}</div>
            </div>

        </div>
    )
}

export default BlogButton