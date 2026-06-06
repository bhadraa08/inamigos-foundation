/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AppPage } from './types';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Initiatives from './pages/Initiatives';
import Impact from './pages/Impact';
import Donate from './pages/Donate';
import Volunteer from './pages/Volunteer';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState<AppPage>(AppPage.Home);

  // Helper to render the active page component
  const renderPage = () => {
    switch (activePage) {
      case AppPage.Home:
        return <Home onPageChange={setActivePage} />;
      case AppPage.About:
        return <About />;
      case AppPage.Initiatives:
        return <Initiatives />;
      case AppPage.Impact:
        return <Impact />;
      case AppPage.Donate:
        return <Donate />;
      case AppPage.Volunteer:
        return <Volunteer />;
      case AppPage.Events:
        return <Events />;
      case AppPage.Gallery:
        return <Gallery />;
      case AppPage.Contact:
        return <Contact />;
      default:
        return <Home onPageChange={setActivePage} />;
    }
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 15
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    exit: {
      opacity: 0,
      y: -15,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div id="application-container" className="min-h-screen sophisticated-gradient relative flex flex-col justify-between selection:bg-[#7C7913] selection:text-[#111F18]">
      {/* Ambient background noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none z-0" />

      {/* Structural sticky navigation bar */}
      <Header activePage={activePage} onPageChange={setActivePage} />

      {/* Primary animated viewport panel */}
      <main id="primary-viewport" className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Sustainable footer links */}
      <Footer onPageChange={setActivePage} />
    </div>
  );
}
