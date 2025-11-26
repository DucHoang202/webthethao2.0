const BlogQuote = ({ quote, name }: { quote: string, name: string }) => {
    return (
        <blockquote>
            <div className="red-line"></div>
            <div className="content">
                <div className="quote">
                    {quote}
                </div>
                <div className="name">
                    {name}
                </div>
            </div>
        </blockquote>
    )
}
export default BlogQuote