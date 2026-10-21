import AboutInfo from "./About_info"
import AboutSkills from "./About_skills"

function About() {
    return (
        <div id="about" className="bg-[#0a101d] px-6 md:px-24 pb-20 pt-10 scroll-mt-24">
            <h4 data-aos="fade-right" className="text-[#8b8e98] text-xl py-4 mb-8">01 / About Me</h4>
            <div className="flex flex-col lg:flex-row items-center gap-16"> 
                <div data-aos="fade-right" data-aos-delay="200" className="lg:w-7/12">
                    <AboutInfo />
                </div>
                <div data-aos="fade-left" data-aos-delay="400" className="lg:w-5/12 flex justify-center">
                    <AboutSkills />
                </div>
            </div>
        </div>
    )
}

export default About