import Navbar from "./components/Navbar";
import PrimaryBtn from "./components/PrimaryBtn";
import SecondaryBtn from "./components/SecondaryBtn";
import heroImg1 from "./assets/hero-img1.png";
import heroImg2 from "./assets/hero-img2.png";
import HeroSearch from "./components/HeroSearch";
import portfolioImg from "./assets/Portofolio.png";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import styles from "./styles";
import BookingCTA from "./components/BookingCTA";
import GrowthStrategies from "./components/GrowthStrategies";
import HomeBlogs from "./components/HomeBlogs";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div>
      <div className="bg-gradient px-6 md:px-10  w-full relative">
        <div className="absolute left-0 top-0 w-[30%] h-[30%] white-gradient" />

        <Navbar />
        <div className="max-w-[1440px] m-auto mt-10 lg:mt-16 flex flex-col justify-center items-center text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            className="font-inter leading-[40px] tracking-[0px] text-4xl md:text-5xl font-bold"
          >
            Find Best Hotel <br className="md:hidden" /> Services and get <br />{" "}
            your Dream Space
          </motion.h1>
          {/* <AnimatedText text="Find Best Hotel Services and get your Dream Space" /> */}
          <p className="max-w-sm leading-[30px] mt-6 text-[#f2f2f2] md:max-w-xl">
            Sed omnis dolor et ipsam dignissimos tenetur quod dolor. Totam ut
            voluptatum libero consequatur autem dolore molestia.
          </p>

          <div className="flex items-center justify-center gap-8 mt-10">
            <PrimaryBtn label="Sign Up" />
            <SecondaryBtn label="Contact Us" />
          </div>
        </div>

        <div className="max-w-[1440px] m-auto relative lg:flex flex items-center justify-center lg:justify-between mt-6">
          <img
            src={heroImg1}
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[550px] object-contain -mr-24 md:-mr-32 
          lg:-mt-[220px]"
          />
          <img
            src={heroImg2}
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[550px] object-contain -ml-24 md:-ml-32 
          lg:-mt-[220px]"
          />
        </div>
      </div>
      <div className="w-full z-50 -mt-24 lg:-mt-[250px] ">
        <HeroSearch />
        <div className="relative z-50  mt-12 px-6 sm:px-10">
          <img
            src={portfolioImg}
            className="w-full h-full object-contain m-auto lg:w-[950px] lg:h-[700px] "
          />
        </div>
      </div>

      <div className={`${styles.boxWidth} px-6 md:px-10`}>
        <About />
        <Testimonials />
        <BookingCTA />
        <GrowthStrategies />
        <HomeBlogs />
      </div>
    </div>
  );
};

export default App;
