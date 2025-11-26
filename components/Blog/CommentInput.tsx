const CommentInput: React.FC = () => {
    return (
        <div className="comment-input">
            <input type="text" placeholder="Nhập bình luận" className="comment-input__placeholder" />
            <div className="comment-input__submit"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5407 4.96425L5.54741 2.46758C2.19324 0.787578 0.816576 2.16425 2.49658 5.51841L3.00408 6.53341C3.14991 6.83091 3.14991 7.17508 3.00408 7.47258L2.49658 8.48175C0.816576 11.8359 2.18741 13.2126 5.54741 11.5326L10.5407 9.03591C12.7807 7.91591 12.7807 6.08425 10.5407 4.96425ZM8.65658 7.43758H5.50658C5.26741 7.43758 5.06908 7.23925 5.06908 7.00008C5.06908 6.76091 5.26741 6.56258 5.50658 6.56258H8.65658C8.89574 6.56258 9.09408 6.76091 9.09408 7.00008C9.09408 7.23925 8.89574 7.43758 8.65658 7.43758Z" fill="#292D32" />
            </svg>
            </div>
        </div>
    )
}
export default CommentInput