function ProjectCard() {
    const projects = [
        {
            id: 1,
            title: "Sudan Gençlik Konseyi – Türkiye (مجلس الشباب السوداني)",
            description: "The official web platform for the Sudanese Youth Council in Türkiye (مجلس الشباب السوداني - تركيا). A trilingual application (Arabic, English, Turkish) built from scratch featuring full RTL support, dynamic events showcase, photo gallery, news updates, and an intuitive content management dashboard.",
            image: "/sgkturkiye.png",
            tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Supabase"],
            link: "https://sgkturkiye.org/",
            repo: "https://github.com/yasir-abuobieda/sgkt"
        },
        {
            id: 2,
            title: "Trendify",
            description: "Trendify is a modern e-commerce web application featuring a stunning UI and seamless UX. It leverages GitHub Raw JSON to mock asynchronous API data fetching, delivering a fast, responsive, and engaging digital shopping experience.",
            image: "/trendify.png",
            tech: ["React 18 (Vite)", "Tailwind CSS", "Redux Toolkit", "React Router DOM", "Swiper.js", "Axios", "React Icons"],
            link: "https://trendify-ecommerce-five.vercel.app/",
            repo: "https://github.com/yasir-abuobieda/Trendify-Ecommerce"
        }
    ];

    return (
        <div className="flex flex-col gap-10">
            {projects.map((project, index) => (
                <div key={project.id} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 bg-[#0d1424] rounded-2xl p-6 border border-gray-800 hover:border-gray-600 transition-colors duration-300`}>
                    
                    {/* Image Section */}
                    <div className="w-full lg:w-5/12 overflow-hidden rounded-xl border border-gray-800 h-64 lg:h-80 flex-shrink-0 bg-[#172033]">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-7/12 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                        
                        <p className="text-[#8b8e98] leading-relaxed mb-6 text-lg">
                            {project.description}
                        </p>
                        
                        <div className="mb-8">
                            <h5 className="text-white text-sm uppercase tracking-wider mb-4">Technologies</h5>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((techItem, i) => (
                                    <span key={i} className="px-4 py-1.5 bg-[#172033] text-blue-400 rounded-full text-sm font-medium">
                                        {techItem}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/20"
                            >
                                Live Demo
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a 
                                href={project.repo || "https://github.com/yasir-abuobieda"} 
                                target="_blank" 
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-[#172033] hover:bg-[#1a253a] text-white font-semibold rounded-lg border border-gray-700 hover:border-gray-500 transition-all duration-300"
                            >
                                View Code
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default ProjectCard