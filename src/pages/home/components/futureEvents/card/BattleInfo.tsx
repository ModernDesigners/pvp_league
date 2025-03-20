const BattleInfo = (props: { active?: boolean }) => {
  return (
    <div className="h-full flex gap-5">
      <div className="px-10 h-full flex flex-col justify-between py-6 border-r border-var-border">
        <h1 className="font-bruno text-var-white">PELE VS NIKKI SLOW</h1>
        <div className="flex flex-col gap-2">
          <p className="font-tkt-semibold text-desc">22 მარტი</p>
          <p className="font-tkt-semibold text-desc">14:30 საათი</p>
        </div>
      </div>
      <div className="flex items-center">
        {props.active ? <h3 className="text-main">მიმდინარეობს</h3> : <></>}
      </div>
    </div>
  );
};

export default BattleInfo;
