import headerBg from "/assets/headerBg.webp";
const HomeHeaderBg = () => {
  return (
    <div className=" absolute top-0 left-0 w-full h-[900px]  ">
      <img
        className="w-full h-full object-cover brightness-50"
        src={headerBg}
        alt="Nikki Vs Moska Picture"
      />
    </div>
  );
};

export default HomeHeaderBg;
