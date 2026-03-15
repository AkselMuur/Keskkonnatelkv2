import React, { useEffect } from 'react';
import Header from './components/MainHeader/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Hero from './components/Hero/Hero';
import Mission from './components/Missioon/Missioon';
import CalendarSection from './components/Calendar/Calendar';
import Workshops from './components/Workshop/Workshops';
import Topics from './components/Topics/Topics';
import Partners from './components/Partners/Partners';
import Contact from './components/ContactForm/Form';
import Footer from './components/Footer/Footer';
import { useAppContext } from './context/AppContext';

function App() {
  const { state } = useAppContext();
  useEffect(() => {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }, [state]); 

  return (
    <>
      <Header />
      <Sidebar />
      <main>
        <Hero />
        <Mission />
        <CalendarSection />
        <Workshops />
        <Topics />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;