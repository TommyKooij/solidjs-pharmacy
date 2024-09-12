import Twitter from "../assets/icons/twitter-alt.svg";
import Instagram from "../assets/icons/instagram.svg";
import Facebook from "../assets/icons/facebook.svg";
import Linkedin from "../assets/icons/linkedin.svg";

// * Footer content
const Footer = () => {
  return (
    <div class="footer">
      <div>
        <p class="title-card">PHARMACY</p>
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
  );
};

// * The About Us section and its contents
const AboutUs = () => {
  return (
    <div>
      <p class="name-section-footer">Over Ons</p>
    </div>
  );
};

// * The Customer Service section and its contents
const CustomerService = () => {
  return (
    <div>
      <p class="name-section-footer">Klantenservice</p>
    </div>
  );
};

// * The Contact section and its contents
const Contact = () => {
  return (
    <div>
      <p class="name-section-footer">Contact</p>
    </div>
  );
};

export default Footer;
