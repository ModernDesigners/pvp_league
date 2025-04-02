import AcapellaList from "./AcapellaList";
import PvpFlowList from "./PvpFlowList";

export default function SeasonsList() {
  return (
    <div className="flex flex-col ">
      <PvpFlowList />
      <AcapellaList />
    </div>
  );
}
