import ProjectCard from "./ProjectCard"


function Projects() {
    return (
        <div id="projects" className="bg-[#0a101d] px-6 md:px-24 pb-20 pt-10 scroll-mt-24">
            <h4 data-aos="fade-up" className="text-[#8b8e98] text-xl py-4 mb-8">02 / Projects</h4>
            <div data-aos="fade-up" data-aos-delay="200" className="grid grid-cols-1 gap-10">
                {/* Add your project cards here */}
                <ProjectCard/>
            </div>
        </div>
    )
}

export default Projects