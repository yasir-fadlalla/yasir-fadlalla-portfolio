import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projrct"
import Contact from "./components/Contact"
import ScrollToTop from "./components/ScrollToTop"
import LoadingScreen from "./components/LoadingScreen"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Remove the hash from the URL if it exists
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    
    // Always start at the top of the page
    window.scrollTo(0, 0);

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });

    // Simulate loading time so the spinner is visible
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <>
      <Navbar />
      <main className="bg-[#0a101d]">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <ScrollToTop />
    </>
  )
}

export default App
