import { FaReact, FaHtml5, FaCss3, FaBootstrap, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { SiVite } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const ViteLogo = ({ className, style }) => (
    <img src="https://vitejs.dev/logo.svg" className={`${className} w-[1em] h-[1em] object-contain`} style={style} alt="Vite" />
);

const skills = [
    { icon: FaReact, color: "#61DAFB", name: "React" },
    { icon: IoLogoJavascript, color: "#F7DF1E", name: "JavaScript" },
    { icon: FaHtml5, color: "#E34F26", name: "HTML5" },
    { icon: FaCss3, color: "#1572B6", name: "CSS3" },
    { icon: RiTailwindCssFill, color: "#06B6D4", name: "Tailwind" },
    { icon: ViteLogo, color: "#646CFF", name: "Vite" },
    { icon: RiNextjsFill, color: "#ffffff", name: "Next.js" },
    { icon: FaBootstrap, color: "#7952B3", name: "Bootstrap" },
    { icon: FaGithub, color: "#ffffff", name: "GitHub" },
];

function AboutSkills() {
    return (
        <div className="flex flex-wrap justify-center max-w-[320px] md:max-w-[460px] mx-auto gap-6 md:gap-8">
            {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                    <div key={index} className="flex flex-col items-center gap-3 group cursor-pointer">
                        <div 
                            className="w-20 h-20 flex items-center justify-center rounded-full border-2 transition-all duration-300 group-hover:scale-110"
                            style={{
                                borderColor: `${skill.color}50`, 
                                backgroundColor: `${skill.color}15`, 
                                boxShadow: `0 0 20px ${skill.color}30`
                            }}
                        >
                            <Icon className="text-4xl" style={{ color: skill.color }} />
                        </div>
                        <span className="text-sm font-semibold text-[#8b8e98] transition-colors duration-300 group-hover:text-white">
                            {skill.name}
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default AboutSkills