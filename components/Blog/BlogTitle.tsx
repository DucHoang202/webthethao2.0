const BlogTitle = ({ title }: { title?: string }) => {
    return (
        <div>
            <div className="blog-title">
                {title}
            </div>
        </div>
    )
}
export default BlogTitle