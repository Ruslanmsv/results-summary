import ResultItem from "./ResultItem";
// import IconMemory from "../../assets/icon-memory.svg";
import IconMemory from "../Icons/IconMemory";
import IconReaction from "../Icons/IconReaction";
import IconVerbal from "../Icons/IconVerbal";
import IconVisual from "../Icons/IconVisual";

export default function ResultsSummary() {
  return (
    <div>
      <h3 className="text-md font-bold text-dg-blue lg:text-lg">Summary</h3>
      <ul className="mt-6 lg:mt-7">
        <ResultItem
          Icon={IconReaction}
          color="red"
          title={"Reaction"}
          value={80}
        />
        <ResultItem
          Icon={IconMemory}
          color="yellow"
          title={"Memory"}
          value={92}
        />
        <ResultItem
          Icon={IconVerbal}
          color="green"
          title={"Verbal"}
          value={61}
        />
        <ResultItem
          Icon={IconVisual}
          color="blue"
          title={"Visual"}
          value={73}
        />
      </ul>
    </div>
  );
}
