import ResultsScore from "./ResultsScore";
import ResultsSummary from "./ResultsSummary";
import Button from "../ui/Button";
export default function ResultsSummaryComponent() {
  return (
    <div className="flex flex-col gap-6 shadow-custom-xl lg:w-full lg:max-w-[736px] lg:flex-row lg:gap-10 lg:rounded-lg">
      <ResultsScore />
      <div className="p-8 pt-0 lg:mt-9 lg:w-full lg:max-w-[288px] lg:p-0">
        <ResultsSummary />
        <Button className="mt-6 w-full lg:mt-12">Continue</Button>
      </div>
    </div>
  );
}
