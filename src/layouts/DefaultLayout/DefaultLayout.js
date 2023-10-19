import Header from '../components/Header/Header.js';
import HeroSection from '../components/HeroSection/HeroSection.js';
import Button from './Button.js';
import Footer from '../components/Footer/Footer.js';

function DefaultLayout({children}) {
  return ( 
    <>
      <Header/>
      <HeroSection/>
      <Button/>
      {children}
      <Footer/>
    </>
   );
}

export default DefaultLayout;