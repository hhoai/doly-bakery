import Header from '../components/Header/Header.js';
import Sidebar from '../components/Sidebar/Sidebar.js';
import Footer from '../components/Footer/Footer.js';

function DefaultLayout({children}) {
  return ( 
    <>
      <Header/>
      <Sidebar/>
      {children}
      <Footer/>
    </>
   );
}

export default DefaultLayout;