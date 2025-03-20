import headerBg from "/assets/images/headerBg.webp";
const HomeHeaderBg = () => {
  return (
    <div className=" absolute top-0 left-0 w-full h-full  ">
      <img
        className="w-full h-full object-cover brightness-80"
        src={headerBg}
        alt="Nikki Vs Moska Picture"
      />
    </div>
  );
};

export default HomeHeaderBg;
