import { useIsMobile } from "@/hooks/useIsMobile"

const CardTitle: React.FC<{ title: string, logo?: any, style?: React.CSSProperties, deco?: boolean, arrow?: boolean }> = ({ title, logo, style, deco, arrow }) => {
    const isMobile = useIsMobile()
    return (
        <div className="card-title" style={style}>
            <div className="card-title__title">

                <div className={`deco ${isMobile ? 'hidden' : deco ? 'block' : 'hidden'}`}>
                    <svg width="4" height="24" viewBox="0 0 4 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0C2.20914 0 4 1.79086 4 4V20C4 22.2091 2.20914 24 0 24V0Z" fill="#B72424" />
                    </svg>

                </div>
                <div className="text" style={{ color: style?.color }}>
                    {logo && <img src={logo} alt="" className="logo" />} {title}
                </div>

            </div>

            <div className="arrow" style={{ display: arrow ? 'block' : 'none' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.93994 13.28L10.2866 8.9333C10.7999 8.41997 10.7999 7.57997 10.2866 7.06664L5.93994 2.71997" stroke="#52524F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    )
}
export default CardTitle
