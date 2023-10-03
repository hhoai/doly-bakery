import Header from '../components/Header/Header.js';
import HeroSection from '../components/HeroSection/HeroSection.js';
import Footer from '../components/Footer/Footer.js';

function DefaultLayout({children}) {
  return ( 
    <>
      <Header/>
      <HeroSection/>
      {children}
      <Footer/>
    </>
   );
}

export default DefaultLayout;