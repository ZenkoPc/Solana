export const ProductCard = ({ img, link, desc }:{ img: string, link: string, desc:string }) => {
    
    return (
        <div className="w-full max-h-[395px] h-full flex flex-col md:flex-row mb-5 absolute z-10 animate-fade-left animate-once animate-duration-[3000]">
            <div className="w-full h-full md:max-w-[50%]">
                <img src={img} loading="lazy" className="w-full h-full" alt="ntf top image" />
            </div>
            <div className="w-full py-9 md:py-0 md:max-w-[50%] gap-4 bg-activeGray rounded-r-lg flex flex-col justify-center items-start px-11">
                <div className="max-w-[240px] pb-5 md:pb-0">
                    <img src="/images/anybodies.png" loading="lazy" alt="anybodies logo" />
                </div>
                <p className="text-xl max-w-[439px]">
                    {desc}
                </p>
                <a href="/" className="text-lg text-highPurple transition-all hover:text-purple-700">
                    {link}
                </a>
            </div>
        </div>
    )
}