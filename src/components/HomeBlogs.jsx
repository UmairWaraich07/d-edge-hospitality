import PrimaryBtn from "./PrimaryBtn";
import homeblog from "../assets/home-blog.png";
import homeblog1 from "../assets/home-blog1.jpeg";
import homeblog2 from "../assets/home-blog2.jpeg";
import homeblog3 from "../assets/home-blog3.jpeg";
import homeblog4 from "../assets/home-blog4.jpeg";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const HomesingleBlog = ({ img, title, date }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, type: "spring" },
      }}
      viewport={{ once: true }}
      className="flex items-center md:flex-col gap-6"
    >
      <img
        src={img}
        className="w-[120px] h-[100px] md:w-full md:h-full rounded-[6px] object-cover"
      />

      <div>
        <h4 className="font-inter font-semibold max-w-md">{title}</h4>
        <p className="font-inter text-xs text-[#ccc] mt-4">{date}</p>
      </div>
    </motion.div>
  );
};

const HomeBlogs = () => {
  return (
    <section id="blogs" className="relative text-white my-12 lg:my-24">
      <div>
        <div className="mb-12 w-full pb-4 flex items-center justify-between border-b border-b-[#ffffff70]">
          <h2 className="heading-h2">Latest Blog</h2>
          <a href="#" className="text-[#903AFD] font-medium">
            See all
          </a>
        </div>
        <div className="  flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          <div className="relative lg:w-[50%]">
            <img src={homeblog} className="w-full md:h-[400px] object-cover" />
            <div className="absolute top-4 left-4 bg-[#903AFD] w-[90px] h-[40px] lg:w-[110px] lg:h-[52px] rounded-[10px] flex justify-center items-center">
              News
            </div>
          </div>

          <div className="relative lg:w-[50%]">
            <p className="text-[#ccc] font-medium mb-5">August 14,2023</p>
            <h2 className="text-2xl lg:text-3xl text-white font-medium leading-normal max-w-lg">
              Mastering Hotel Booking Trading: Your Roadmap to Six Figures from
              Ground Zero
            </h2>
            <p className="text-[#ccc] leading-7 mt-4 max-w-[650px]">
              Are you tired of traditional investment options that just
              don&apos;t seem to be bringing in the returns you desire? Have you
              been seeking a way to boost your financial freedom and invest in
              the hospitality.....
            </p>

            <PrimaryBtn
              label="Read More"
              className="black-glass backdrop-blur-[18px] border-[#666] text-white mt-10"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mt-6 md:mt-14">
        <HomesingleBlog
          img={homeblog1}
          title="The Future of Employment: Navigating AI and Robotic Replacements"
          date="August 14, 2023"
        />
        <HomesingleBlog
          img={homeblog2}
          title="Checking into the Future_ How the Hotel Business is Set to Soar"
          date="August 14, 2023"
        />
        <HomesingleBlog
          img={homeblog3}
          title="ARTOTEL Hotels distribution ecosystem powered by DEDGE"
          date="August 14, 2023"
        />
        <HomesingleBlog
          img={homeblog4}
          title="Exploring Japan's Robotic Hotels Through My Travel Blog"
          date="August 14, 2023"
        />
      </div>
      {/* Linear gradient */}
      <div
        className="absolute -z-10 top-0 left-0 w-[50%] h-[90%] rounded-full
        bg-light-gradient"
      />
    </section>
  );
};

export default HomeBlogs;
