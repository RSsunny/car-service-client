import Banner from "../../Components/Header/Banner";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import PopularProduct from "./PopularProduct";
import ServiceSection from "./ServiceSection";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <AboutSection></AboutSection>
      <ServiceSection></ServiceSection>
      <ContactSection></ContactSection>
      <PopularProduct></PopularProduct>
    </div>
  );
};

export default Home;
