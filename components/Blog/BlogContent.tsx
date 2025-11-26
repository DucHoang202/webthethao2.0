const BlogContent = ({ content }: { content: string }) => {
    return (
        <div>
            <div className="blog-content">
                {content}
            </div>
        </div>
    )
}
export default BlogContent