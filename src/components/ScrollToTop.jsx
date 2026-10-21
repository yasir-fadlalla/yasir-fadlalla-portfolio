import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // إظهار الزر بعد النزول 300 بكسل
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // دالة الانزلاق الناعم المخصصة (نفس طريقة النافبار)
    const scrollToTop = () => {
        const startPosition = window.scrollY;
        const duration = 800; // 800ms
        let start = null;

        window.requestAnimationFrame(function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            
            let ease = progress / duration;
            ease = ease < 0.5 ? 2 * ease * ease : -1 + (4 - 2 * ease) * ease;
            
            window.scrollTo(0, startPosition - (startPosition * ease));
            
            if (progress < duration) {
                window.requestAnimationFrame(step);
            } else {
                window.scrollTo(0, 0);
            }
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-4 bg-[#008df0] text-white rounded-full shadow-lg hover:bg-blue-600 hover:-translate-y-2 transition-all duration-300"
                    aria-label="Scroll to top"
                >
                    <FaArrowUp size={20} />
                </button>
            )}
        </>
    );
}

export default ScrollToTop;
