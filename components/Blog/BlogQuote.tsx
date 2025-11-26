const BlogQuote = ({ quote, name }: { quote: string, name: string }) => {
    return (
        <div>
            <div className="blog-quote">
                <div className="red-line"></div>
                {quote}
            </div>
        </div>
    )
}
export default BlogQuote