const SecondaryBtn = ({ label }) => {
  return (
    <a
      href="#"
      className="bg-transparent text-white border-2 border-white  rounded-[10px] 
      flex items-center justify-center w-[150px] h-[60px] md:w-[200px] font-semibold"
    >
      {label}
    </a>
  );
};

export default SecondaryBtn;
