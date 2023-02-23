import ResultsScore from "./ResultsScore";
import ResultsSummary from "./ResultsSummary";
import Button from "../ui/Button";
export default function ResultsSummaryComponent() {
  return (
    <div className="flex flex-col gap-6 shadow-custom-xl lg:w-full lg:max-w-[736px] lg:rounded-lg lg:flex-row lg:gap-10">
      <ResultsScore />
      <div className="lg:mt-9 lg:w-full p-8 pt-0 lg:p-0 lg:max-w-[288px]">
        <ResultsSummary />
        <Button className="mt-6 w-full lg:mt-10">Continue</Button>
      </div>
    </div>
  );
}
