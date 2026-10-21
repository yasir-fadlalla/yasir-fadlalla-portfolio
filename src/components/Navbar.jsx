import { useState, useEffect } from 'react';

function Navbar() {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'projects', 'contact'];
            
            // Check if user scrolled to the absolute bottom of the page
            const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
            
            if (isBottom) {
                // If at bottom, find the last section that actually exists in the DOM
                const existingSections = sections.filter(id => document.getElementById(id));
                if (existingSections.length > 0) {
                    setActiveSection(existingSections[existingSections.length - 1]);
                    return;
                }
            }

            let current = 'hero';
            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // When the top of the section crosses the 60% mark of the screen
                    if (rect.top <= window.innerHeight * 0.6) {
                        current = section;
                    }
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        // Run once on load
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e, id) => {
        if (e) e.preventDefault();
        const element = document.getElementById(id);
        
        if (element) {
            const navbarHeight = 80; 
            const targetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 800; // مدة الانزلاق بالملي ثانية
            let start = null;

            window.requestAnimationFrame(function step(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                
                // دالة تسارع وتباطؤ (Ease In Out) للحركة الطبيعية
                let ease = progress / duration;
                ease = ease < 0.5 ? 2 * ease * ease : -1 + (4 - 2 * ease) * ease;
                
                window.scrollTo(0, startPosition + distance * ease);
                
                if (progress < duration) {
                    window.requestAnimationFrame(step);
                } else {
                    window.scrollTo(0, targetPosition);
                }
            });
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-[#080b14] shadow-lg p-3 px-6 md:px-24 flex items-center justify-between">
            <div className="logo">
                <img src="/logo.png" className="w-15 h-15" alt="Logo" />
            </div>

            <ul className="flex gap-8 items-center">
                <li><button onClick={(e) => scrollToSection(e, 'about')} className={`cursor-pointer transition-colors outline-none ${activeSection === 'about' ? 'text-white' : 'text-[#8b8e98] hover:text-white'}`}>About</button></li>
                <li><button onClick={(e) => scrollToSection(e, 'projects')} className={`cursor-pointer transition-colors outline-none ${activeSection === 'projects' ? 'text-white' : 'text-[#8b8e98] hover:text-white'}`}>Projects</button></li>
                <li><button onClick={(e) => scrollToSection(e, 'contact')} className={`cursor-pointer transition-colors outline-none ${activeSection === 'contact' ? 'text-white' : 'text-[#8b8e98] hover:text-white'}`}>Contact</button></li>
            </ul>

            <ul className="flex gap-1">
                <li><button onClick={(e) => scrollToSection(e, 'hero')} className={`block cursor-pointer transition-colors outline-none w-3 h-3 rounded-full ${activeSection === 'hero' ? 'bg-blue-500' : 'bg-[#3a3c43]'}`}></button></li>
                <li><button onClick={(e) => scrollToSection(e, 'about')} className={`block cursor-pointer transition-colors outline-none w-3 h-3 rounded-full ${activeSection === 'about' ? 'bg-blue-500' : 'bg-[#3a3c43]'}`}></button></li>
                <li><button onClick={(e) => scrollToSection(e, 'projects')} className={`block cursor-pointer transition-colors outline-none w-3 h-3 rounded-full ${activeSection === 'projects' ? 'bg-blue-500' : 'bg-[#3a3c43]'}`}></button></li>
                <li><button onClick={(e) => scrollToSection(e, 'contact')} className={`block cursor-pointer transition-colors outline-none w-3 h-3 rounded-full ${activeSection === 'contact' ? 'bg-blue-500' : 'bg-[#3a3c43]'}`}></button></li>
            </ul>
        </nav>
    )
}

export default Navbar