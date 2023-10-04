import PrimaryBtn from "./PrimaryBtn";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const GrowthStrategyCard = ({ number, heading, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1, type: "spring" },
      }}
      viewport={{ once: true }}
      className=" flex flex-col glass-effect lg:p-5  p-8 max-w-2xl"
    >
      <div className="relative w-16 h-16 rounded-[10px] btn-gradient mb-8">
        <p className="absolute inset-0 flex items-center justify-center font-semibold text-2xl">
          {number}
        </p>
      </div>

      <h4 className="text-lg font-medium ">{heading}</h4>

      <p className="text-[#ccc] text-sm leading-7 mt-5">{description}</p>
    </motion.div>
  );
};

const GrowthStrategies = () => {
  return (
    <section id="growth" className="relative text-white my-12 lg:my-24">
      <div>
        <div className="flex items-center justify-between">
          <h2 className="heading-h2">Market Team&apos;s Growth Strategies</h2>

          <div className="max-md:hidden">
            <PrimaryBtn
              className="!bg-[#903AFD] text-white"
              label="See Our Team"
            />
          </div>
        </div>

        <div className="mt-8 lg:mt-16 grid gap-7 grid-cols-1 lg:grid-cols-3 ">
          <GrowthStrategyCard
            number="1"
            heading="Turning Insights into Opportunities"
            description="In the vibrant sphere of hotel bookings, experience reigns supreme. Every member of our Booking Analysis Team has walked the challenging path of hotel booking trading without the support of advanced systems."
          />
          <GrowthStrategyCard
            number="2"
            heading="Veterans in Hotel Profit Strategies and Market Dynamics"
            description="These experts have weathered the storms of the hotel industry, discerning patterns where most see chaos. Their unique skill set, molded by years of hands-on experience, enables them to spot opportunities where comfort intersects with profitability.
"
          />
          <GrowthStrategyCard
            number="3"
            heading="To Our Hotel Booking Traders: Experience Meets Innovation"
            description="Blending old-school wisdom with cutting-edge D-edge technology, our team offers you the best of both worlds. Their seasoned insights, combined with our platform's data-driven strategies, pave the path for unprecedented success."
          />
        </div>
      </div>
      <div className="block md:hidden mt-8">
        <PrimaryBtn className="!bg-[#903AFD] text-white" label="See Our Team" />
      </div>
      {/* Linear gradients */}
      <div
        className="absolute z-[-1] top-0 right-0 w-[60%] h-[60%] rounded-full
        bg-light-gradient"
      />
      <div
        className="absolute z-[-1] bottom-0 left-0 w-[30%] h-[30%] rounded-full
        bg-light-gradient"
      />
    </section>
  );
};

export default GrowthStrategies;
