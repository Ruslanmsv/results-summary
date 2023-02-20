import ResultsScore from "./ResultsScore";
import ResultsSummary from "./ResultsSummary";
import Button from "../ui/Button";
export default function ResultsSummaryComponent() {
  return (
    <div>
      <ResultsScore />
      <div className="pl-7 pr-7 pb-7 p">
        <ResultsSummary />
        <Button className="mt-6 w-full">Continue</Button>
      </div>
    </div>
  );
}
