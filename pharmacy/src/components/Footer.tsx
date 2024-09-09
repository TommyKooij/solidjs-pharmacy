import Twitter from "../assets/icons/twitter-alt.svg";
import Instagram from "../assets/icons/instagram.svg";
import Facebook from "../assets/icons/facebook.svg";
import Linkedin from "../assets/icons/linkedin.svg";

// * Footer content
const Footer = () => {
  return (
    <div class="bg-green-100 w-full min-h-60 mt-6 border-t border-green-500">
      <div class="grid grid-cols-5 gap-5 p-6">
        <div>
          <h4 class="text-base font-bold">PHARMACY</h4>
          <div class="flex pt-2 space-x-3">
            <img src={Twitter} alt="twitter" class="size-6" />
            <img src={Instagram} alt="instagram" class="size-6" />
            <img src={Facebook} alt="facebook" class="size-6" />
            <img src={Linkedin} alt="linkedin" class="size-6" />
          </div>
        </div>
        <AboutUs />
        <CustomerService />
        <Contact />
      </div>
    </div>
  );
};

// * The About Us section and its contents
const AboutUs = () => {
  return (
    <div>
      <h4 class="text-sm font-bold">Over Ons</h4>
    </div>
  );
};

// * The Customer Service section and its contents
const CustomerService = () => {
  return (
    <div>
      <h4 class="text-sm font-bold">Klantenservice</h4>
    </div>
  );
};

// * The Contact section and its contents
const Contact = () => {
  return (
    <div>
      <h4 class="text-sm font-bold">Contact</h4>
    </div>
  );
};

export default Footer;
