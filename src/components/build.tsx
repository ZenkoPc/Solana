import { useState } from "react"
import { ProductCard } from './productCard.tsx'

export const BuildContainer = () => {

    const [selected, setSelected] = useState('NFTs')

    return (
        <section className="max-w-6xl px-10 2lg:px-0 w-full mx-auto lg:mt-10 text-white flex flex-col relative z-30">
            <header className="flex flex-col lg:flex-row relative z-20 items-start lg:items-center mb-8 justify-between">
                <div data-aos='fade-down' className=" text-[39px]">
                    Build for growth.
                </div>
                <nav data-aos='fade-up' className='mt-5 overflow-hidden'>
                    <ul className="flex max-w-[280px] overflow-scroll md:max-w-full gap-4 [&>li]:cursor-pointer [&>li]:bg-lessDark [&>li]:py-2 [&>li]:px-3 [&>li]:rounded-2xl [&>li]:transition-all ">
                        <li onClick={() => { setSelected('NFTs') }} className={selected === 'NFTs' ? 'border border-highPurple' : 'border border-lessDark'}>
                            NFTs
                        </li>
                        <li onClick={() => { setSelected('DeFi') }} className={selected === 'DeFi' ? 'border border-highPurple' : 'border border-lessDark'}>
                            DeFi
                        </li>
                        <li onClick={() => { setSelected('Payments') }} className={selected === 'Payments' ? 'border border-highPurple' : 'border border-lessDark'}>
                            Payments
                        </li>
                        <li onClick={() => { setSelected('Gaming') }} className={selected === 'Gaming' ? 'border border-highPurple' : 'border border-lessDark'}>
                            Gaming
                        </li>
                        <li onClick={() => { setSelected('DAOs') }} className={selected === 'DAOs' ? 'border border-highPurple' : 'border border-lessDark'}>
                            DAOs
                        </li>
                    </ul>
                </nav>
            </header>
            <div data-aos='fade-down' className="w-full h-[690px] xs:h-[620px] md:h-[406px] relative z-0">
            {selected === 'NFTs' && 
            <ProductCard
                img={"/images/ntf.png"} 
                link={"Learn more about NFTson Solana"} 
                desc={"It’s time to bridge the digital and physical. Anybodies helps established brands like Toys’R’Us connect real-life places and products with NFTs."} 
            />}
            {selected === 'DeFi' && 
            <ProductCard 
                img={"/images/slide-8.jpg"} 
                link={"Learn more about DeFi Solana"} 
                desc={"It’s time to bridge the digital and physical. Anybodies helps established brands like Toys’R’Us connect real-life places and products with NFTs."} 
            />}
            {selected === 'Payments' && 
            <ProductCard 
                img={"/images/slide-5.jpg"} 
                link={"Learn more about Payments Solana"} 
                desc={"It’s time to bridge the digital and physical. Anybodies helps established brands like Toys’R’Us connect real-life places and products with NFTs."} 
            />}
            {selected === 'Gaming' && 
            <ProductCard 
                img={"/images/slide-3.jpg"} 
                link={"Learn more about Gaming Solana"} 
                desc={"It’s time to bridge the digital and physical. Anybodies helps established brands like Toys’R’Us connect real-life places and products with NFTs."} 
            />}
            {selected === 'DAOs' && 
            <ProductCard 
                img={"/images/slide-1.jpg"} 
                link={"Learn more about DAOs Solana"} 
                desc={"It’s time to bridge the digital and physical. Anybodies helps established brands like Toys’R’Us connect real-life places and products with NFTs."} 
            />}
            </div>
            <div data-aos='fade-up' className='flex relative mb-32 z-20 justify-between rounded-xl py-2 bg-strangeGray/30 w-full [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:w-full'>
                <div>
                    <img src="/images/clay.png" className='w-24 h-8' alt="clay logo" />
                </div>
                <div>
                    <img src="/images/peng.png" className='w-10 h-11' alt="peng logo" />
                </div>
                <div>
                    <img src="/images/doge.png" className='w-11 h-11' alt="doge logo" />
                </div>
                <div>
                    <img src="/images/okay.png" className='w-24 h-8' alt="okay logo" />
                </div>
            </div>
        </section>
    )
} 