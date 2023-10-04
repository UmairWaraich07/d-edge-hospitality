import calender from "../assets/Calendar.svg";
import dropdown from "../assets/dropdown.svg";
import map from "../assets/Point On Map.svg";
import bed from "../assets/Bed.svg";
import search from "../assets/search.svg";
import styles from "../styles";

const HeroSearch = () => {
  return (
    <div
      className={`${styles.boxWidth} black-glass backdrop-blur-[18px] !w-[90vw] m-auto flex items-center justify-center`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 p-6 lg:p-10 w-full">
        <div className="text-white w-full">
          <h4 className="text-sm font-medium">Check In</h4>
          <div className="mt-2 bg-[#FFFFFF1A] rounded-[10px] p-3 flex items-center justify-between min-w-[160px]">
            <div className="flex items-center">
              <img src={calender} className="mr-4" />
              <p className="text-sm truncate">Sun, 28 Aug</p>
            </div>

            <img src={dropdown} />
          </div>
        </div>
        <div className="text-white w-full">
          <h4 className="text-sm font-medium">Check Out</h4>
          <div className="mt-2 bg-[#FFFFFF1A] rounded-[10px] p-3 flex items-center justify-between min-w-[160px]">
            <div className="flex items-center">
              <img src={calender} className="mr-4" />
              <p className="text-sm truncate">Sun, 28 Aug</p>
            </div>

            <img src={dropdown} />
          </div>
        </div>
        <div className="text-white w-full">
          <h4 className="text-sm font-medium">Room & Guest</h4>
          <div className="mt-2 bg-[#FFFFFF1A] rounded-[10px] p-3 flex items-center justify-between min-w-[160px]">
            <div className="flex items-center">
              <img src={bed} className="mr-4" />
              <p className="text-sm truncate">Sun, 28 Aug</p>
            </div>

            <img src={dropdown} />
          </div>
        </div>
        <div className="text-white w-full">
          <h4 className="text-sm font-medium">Destination</h4>
          <div className="mt-2 bg-[#FFFFFF1A] rounded-[10px] p-3 flex items-center justify-between min-w-[160px]">
            <div className="flex items-center">
              <img src={map} className="mr-4" />
              <p className="text-sm truncate">Paris, France</p>
            </div>

            <img src={dropdown} />
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center lg:flex-col-reverse  text-white md:col-span-2 lg:col-span-1">
          <a
            href="#"
            className="flex items-center justify-center h-[50px] btn-gradient rounded-[10px] w-full"
          >
            <img src={search} />
            <p className="ml-4 text-white">Search</p>
          </a>

          <p className="mt-2 max-lg:text-center text-sm max-lg:mt-4">
            Powered by Booking.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSearch;
