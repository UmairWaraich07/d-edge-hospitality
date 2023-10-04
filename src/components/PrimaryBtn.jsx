const PrimaryBtn = ({ label, className }) => {
  return (
    <a
      href="#"
      className={`bg-white text-[#903AFD] border-2 border-transparent rounded-[10px] w-[160px] h-[60px] 
      flex items-center justify-center md:w-[200px] font-semibold ${
        className ? className : null
      }`}
    >
      {label}
    </a>
  );
};

export default PrimaryBtn;
