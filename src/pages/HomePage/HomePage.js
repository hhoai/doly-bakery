import Policy from "./Policy.js";
import CategorySection from "./CategorySection.js";
import Sale from "./Sale.js";


function Home() {
  return ( 
    <div className='wrapper relation z-1'>
      <Policy />
      <CategorySection/>
      <Sale />
    </div>
      
   );
}

export default Home;