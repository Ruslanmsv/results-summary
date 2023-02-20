export default function ResultsScore() {
  return (
    <div className="flex rounded-b-4xl shadow-custom-xl pt-6 pb-10 flex-col items-center bg-gradient">
      <p className="text-md font-bold text-lavender ">Your Result</p>
      <div className="mt-6 flex h-[140px] w-[140px] flex-col items-center rounded-full bg-score-gradient pt-6">
        <h1 className="text-xxl font-extrabold text-white">76</h1>
        <span className="text-sm font-bold text-lavender/[52]">of 100</span>
      </div>
      <h2 className="mt-6 text-lg font-bold text-white">Great!</h2>
      <p className="text-center mt-2 text-sm font-medium text-lavender ">
        Your perfomance exceed 65% of
        <br /> the people conducting the test here!
      </p>
    </div>
  );
}
