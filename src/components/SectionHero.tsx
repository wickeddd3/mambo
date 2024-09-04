import { CircleCheck, PlayIcon } from "lucide-react";

export default function SectionHero() {
  return (
    <section className="m-auto flex h-[600px] max-w-7xl gap-24 py-12">
      <div className="h-full w-2/5">
        <div className="flex h-full w-full flex-col justify-center gap-8">
          <div className="flex items-center gap-4">
            <CircleCheck size={20} absoluteStrokeWidth={true} color="#5046e6" />
            <h6 className="text-md uppercase text-[#7d7d7f]">
              FREE 14 DAYS TRIAL
            </h6>
          </div>
          <h1 className="text-7xl font-extrabold text-[#f5f5f5]">
            Experience seamless workflow.
          </h1>
          <p className="text-balance text-lg text-[#a7a7a7]">
            Maximize productivity and save time with our revolutionary approach.
            Deliver improved performance and better team coordination.
          </p>
          <div className="flex gap-4">
            <button className="text-md rounded-xl bg-indigo-600 px-8 py-3 font-bold">
              Try for free
            </button>
            <button className="flex items-center gap-4 rounded-xl border-2 border-white px-8 py-3">
              <PlayIcon size={20} absoluteStrokeWidth={true} />
              <span className="text-md font-bold">See how it works</span>
            </button>
          </div>
        </div>
      </div>
      <div className="h-full w-3/5">
        <div className="h-full w-full rounded-2xl border-2 border-indigo-600 p-2">
          <div className="h-full w-full rounded-2xl bg-black"></div>
        </div>
      </div>
    </section>
  );
}
