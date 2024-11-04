import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Menu from '../components/Menu';
import InstagramFeed from '../components/InstagramFeed';
import About from '../components/About';
import StoreInfo from '../components/StoreInfo';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-[#f7f5f0]">
      <Navbar />
      <Hero />
      <Features />
      <Menu />
      <InstagramFeed />
      <About />
      <StoreInfo />
      <Footer />
    </div>
  );
}

export default Home;