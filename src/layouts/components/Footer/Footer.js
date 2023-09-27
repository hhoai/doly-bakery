import Introduce from "./Introduce.js";
import Payment from "./Payment.js";
import Policy from "./Policy.js";
import Information from "./Information.js";
import Connection from "./Connection.js";
import Support from "./Support.js";
import Social from "./Social.js";

function Footer() {
  return (
    <div className="bg-[#f3e7cd]">
      <div className="flex justify-center py-14 text-base max-w-[1300px] m-auto">
        <div className="max-w-[33%] px-4">
          <Introduce/>
          <Payment/>
        </div>
        <div className="px-4 max-w-[16%]">
          <Policy />
        </div>
        <div className="px-4 max-w-[25%]">
          <Information/>
          <Connection />
        </div>
        <div className="px-4 max-w-[25%]">
          <Support/>
          <Social/>
        </div>
      </div>
    </div>
  );
}

export default Footer;
