export default function ResultsScore() {
  return (
    <div className="flex w-full flex-col items-center rounded-b-4xl bg-gradient pt-6 pb-10 shadow-custom-xl lg:max-w-[368px] lg:rounded-4xl lg:p-14 lg:pt-10">
      <p className="text-md font-bold text-lavender lg:text-lg ">Your Result</p>
      <div className="mt-6 flex h-[140px] w-[140px] flex-col items-center rounded-full bg-score-gradient pt-6 lg:mt-9 lg:h-[200px] lg:w-[200px] lg:pt-14">
        <h1 className="text-xxl font-extrabold text-white lg:text-7xl">76</h1>
        <span className="text-sm font-bold text-lavender/[52] lg:text-md">
          of 100
        </span>
      </div>
      <h2 className="mt-6 text-lg font-bold text-white lg:mt-7 lg:text-xl">
        Great!
      </h2>
      <p className="mt-2 text-center text-sm font-medium text-lavender lg:mt-4 lg:text-md ">
        Your performance exceed 65% <br className="hidden lg:inline" /> of
        <br className="lg:hidden" /> the people conducting the{" "}
        <br className="hidden lg:inline" />
        test here!
      </p>
    </div>
  );
}
