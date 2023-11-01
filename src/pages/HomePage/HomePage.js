import HeroSection from "./HeroSection.js";
import Policy from "./Policy.js";
import CategorySection from "./CategorySection.js";
import Sale from "./Sale.js";
import BestSaller from './BestSaller.js'

function Home() {
  return ( 
    <div className='wrapper relation z-1'>
      <HeroSection />
      <Policy />
      <CategorySection/>
      <Sale />
      <BestSaller/> 
    </div>
      
   );
}

export default Home;