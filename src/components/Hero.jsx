function Hero() {
    return (
        <div id="hero" className="text-center pt-28 pb-16 md:pt-36 md:pb-24 px-6 items-center justify-center flex flex-col gap-6 md:gap-10">
            <div data-aos="fade-down" className="flex items-center gap-2 px-5 py-2 rounded-full border border-green-500/30 bg-green-500/10 cursor-default hover:bg-green-500/20 transition-colors duration-300">
                <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium text-green-500 tracking-wide">Available for new opportunities</span>
            </div>
            <h4 data-aos="fade-up" data-aos-delay="200" className="text-blue-400 text-[2rem]">I'M </h4>
            <h1 data-aos="fade-up" data-aos-delay="300" className="text-6xl sm:text-7xl md:text-[7rem] font-black tracking-tight">
                <span className="text-white block sm:inline">YASIR </span>
                <span className="bg-gradient-to-r from-[#7c3aed] to-[#008df0] bg-clip-text text-transparent block sm:inline">FADLALLA</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="400" className="text-lg md:text-xl px-6 md:px-0 max-w-[700px] mx-auto text-blue-400 leading-relaxed">Front-End Developer — React · Next.js · Tailwind · Bootstrap</p>

        </div>
    )
}

export default Hero