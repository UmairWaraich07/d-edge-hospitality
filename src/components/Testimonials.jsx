import carouselIcon from "../assets/carousel-icon.svg";
import person from "../assets/person.jpeg";
import mobileCarouselIcon from "../assets/mobile-testimonial-carousel.svg";
const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className={`relative my-12 lg:my-24 text-white bg-none lg:bg-testimonials-bg bg-bottom  bg-no-repeat
       bg-contain lg:h-[400px]`}
    >
      <h4 className="purple-gradient font-inter text-xl font-semibold mb-4">
        Testimonial
      </h4>
      <div className="flex flex-col lg:flex-row ]">
        <div className="lg:border-r-[1px] lg:border-r-[#999999] lg:pr-16 lg:w-[35%]">
          <h2 className="text-4xl text-white font-semibold tracking-[-1px] flex-1 max-w-lg">
            Words from Our Satisfied User
          </h2>
        </div>
        <div className=" lg:w-[75%] lg:pl-14">
          <p className="text-[#CCCCCC] mt-8 lg:mt-0 leading-[28px]">
            “I remember my first day with D-edge and thinking is this really
            going to change anything well now I can confidently say yes it does”
          </p>

          <div className="mt-6 lg:mt-12 flex items-start flex-col lg:flex-row">
            <div className="flex items-center justify-start">
              <img
                src={person}
                className="w-16 h-16 object-contain rounded-full"
              />
              <div className="ml-8 space-y-1">
                <h4 className="font-medium text-xl">Daisy Moon</h4>
                <p className="text-sm opacity-80">Satisfied User</p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 cursor-pointer w-full flex justify-center items-center lg:flex-1">
              <img src={carouselIcon} className="text-white hidden lg:block" />
              <img src={mobileCarouselIcon} className="max-lg:block hidden" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute z-[0] top-12 left-0 w-[60%] lg:w-[40%] h-[60%] rounded-full
        bg-light-gradient"
      />
    </section>
  );
};

export default Testimonials;
