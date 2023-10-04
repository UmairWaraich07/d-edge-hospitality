import PrimaryBtn from "./PrimaryBtn";
import about from "../assets/about-us.jpeg";
import play from "../assets/play-icon.svg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className={`mt-12 mb-6 lg:mb-12 lg:mt-28`}>
      <h4 className="purple-gradient font-inter text-xl font-semibold mb-4">
        About Us
      </h4>
      <div className="flex w-full items-start flex-col lg:flex-row ">
        <div className="lg:w-1/2">
          <h2 className="text-4xl text-white font-semibold tracking-[-1px] flex-1 max-w-lg">
            Innovating Strategy and Results at D-edge
          </h2>
        </div>
        <div className="mt-6 lg:mt-0 lg:w-1/2 relative">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
            className="text-[#ccc] leading-7 max-w-[650px]"
          >
            At D-edge, we redefine the art of trading, where innovation meets
            strategy and results. With a passion for financial empowerment, we
            have embarked on a journey to provide you with a seamless and
            intuitive trading experience. Our team of seasoned experts combines
            their expertise with cutting-edge technology, ensuring that your
            trading endeavors are backed by reliable insights and a user-centric
            approach.
          </motion.p>
          <div
            className="absolute z-[0]  right-0 bottom-0 w-[80%] h-[80%] rounded-full
        bg-light-gradient"
          />

          <div className="max-lg:hidden flex items-center justify-start gap-8 mt-10">
            <PrimaryBtn
              label="Download E-book"
              className="btn-gradient text-white"
            />
            <PrimaryBtn
              label="Learn More"
              className="btn-gradient text-white"
            />
          </div>
        </div>
      </div>

      <div className="relative mt-12 lg:mt-24 border-[3px] border-[#AD62E533] rounded-[26px] p-5">
        <a href="#">
          <img
            src={about}
            className="w-full md:h-[400px] object-cover rounded-[16px]"
          />
        </a>
        <a href="#">
          <img
            src={play}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </a>
      </div>
    </section>
  );
};

export default About;
