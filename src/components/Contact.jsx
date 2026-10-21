import { FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
    const contactLinks = [
        {
            name: "WhatsApp",
            value: "+90 539 526 2370",
            link: "https://wa.me/905395262370",
            icon: FaWhatsapp
        },
        {
            name: "Email",
            value: "yasir.abuobieda1@hotmail.com",
            link: "mailto:yasir.abuobieda1@hotmail.com",
            icon: FaEnvelope
        },
        {
            name: "GitHub",
            value: "yasir-abuobieda",
            link: "https://github.com/yasir-abuobieda",
            icon: FaGithub
        },
        {
            name: "LinkedIn",
            value: "YASIR FADLALLA",
            link: "https://www.linkedin.com/in/yasir-abuobieda-mohammed-fadlalla-4844a9418/",
            icon: FaLinkedin
        }
    ];

    return (
        <div id="contact" className="bg-[#0a101d] px-6 md:px-24 pb-32 pt-10 scroll-mt-24">
            <h4 data-aos="fade-up" className="text-[#8b8e98] text-xl py-4 mb-12 text-center md:text-left">03 / Contact Me</h4>
            
            <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
                
                <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Let's work together</h2>
                
                <p data-aos="fade-up" data-aos-delay="200" className="text-[#8b8e98] text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
                    Have a project in mind or simply want to say hello? Don't hesitate to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-3xl">
                    {contactLinks.map((contact, index) => {
                        const Icon = contact.icon;
                        return (
                            <a 
                                key={index}
                                href={contact.link}
                                target="_blank"
                                rel="noreferrer"
                                data-aos="zoom-in"
                                data-aos-delay={`${300 + index * 100}`}
                                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-[#abacaf] transition-all duration-500 ease-out w-full sm:w-auto hover:border-[#008df0] hover:bg-[#008df0]/5 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,141,240,0.2)] group"
                            >
                                <Icon className="text-2xl text-[#abacaf] group-hover:text-[#008df0] transition-colors duration-500 ease-out" />
                                <span className="text-white group-hover:text-[#008df0] transition-colors duration-500 ease-out font-semibold text-lg">{contact.name}</span>
                            </a>
                        )
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default Contact
