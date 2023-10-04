import PrimaryBtn from "./PrimaryBtn";
import hotelBooking from "../assets/hotel-booking.jpeg";
import play from "../assets/play-icon.svg";
import { motion } from "framer-motion";

const BookingCTA = () => {
  return (
    <section className="my-12 lg:my-24">
      <div className=" text-white flex flex-col lg:flex-row lg:items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          viewport={{ once: true }}
          className="relative border-[3px] border-[#AD62E533] rounded-[26px] p-5"
        >
          <a href="#">
            <img
              src={hotelBooking}
              className="w-full md:h-[400px] object-cover rounded-[16px]"
            />
          </a>
          <a href="#">
            <img
              src={play}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />
          </a>
        </motion.div>

        <div className="relative">
          <h2 className="text-4xl text-white font-semibold tracking-[-1px] flex-1 max-w-lg">
            Hotel Booking Trading
          </h2>
          <p className="text-[#ccc] leading-7 mt-6 max-w-[650px]">
            Experience a new way to explore the world of travel with our
            innovative Hotel Booking Trading platform. Seamlessly trade your
            booked hotel reservations with fellow travelers, unlocking a world
            of possibilities and flexibility. Whether you&apos;re looking to
            switch destinations, try different hotel experiences, or save on
            accommodation costs, our platform empowers you to exchange your
            reservations hassle-free.
          </p>

          <PrimaryBtn
            label="Learn More"
            className="black-glass backdrop-blur-[18px] border-[#666] text-white mt-10"
          />

          <div
            className="absolute top-0 right-0 w-[80%] h-[90%] rounded-full
        bg-light-gradient"
          />
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
