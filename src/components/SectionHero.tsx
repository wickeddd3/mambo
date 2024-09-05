import { CircleCheck, PlayIcon } from "lucide-react";

export default function SectionHero() {
  return (
    <section className="m-auto flex h-full max-w-7xl flex-wrap items-center gap-10 px-4 py-8 md:py-12 lg:flex-nowrap lg:gap-4">
      <div className="h-full w-full lg:w-2/5">
        <div className="flex h-full w-full flex-col gap-4">
          <div className="flex items-center gap-4">
            <CircleCheck size={20} absoluteStrokeWidth={true} color="#5046e6" />
            <h6 className="text-sm uppercase text-[#7d7d7f] md:text-md">
              FREE 14 DAYS TRIAL
            </h6>
          </div>
          <h1 className="text-4xl font-extrabold leading-10 text-[#f5f5f5] md:text-5xl md:leading-[4.5rem] lg:text-6xl">
            Experience seamless workflow.
          </h1>
          <p className="text-pretty text-md text-[#a7a7a7] md:text-lg">
            Maximize productivity and save time with our revolutionary approach.
            Deliver improved performance and better team coordination.
          </p>
          <div className="flex flex-wrap gap-4 md:flex-nowrap">
            <button className="w-full rounded-xl bg-indigo-600 px-8 py-3 text-sm font-bold md:w-fit md:text-md">
              Try for free
            </button>
            <button className="flex w-full items-center justify-center gap-4 rounded-xl border-2 border-white px-8 py-3 md:w-fit">
              <PlayIcon size={20} absoluteStrokeWidth={true} />
              <span className="text-sm font-bold md:text-md">
                See how it works
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="h-full w-full lg:w-3/5">
        <div className="h-[360px] w-full rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 md:h-[500px]">
          <div className="h-full w-full rounded-2xl bg-black"></div>
        </div>
      </div>
    </section>
  );
}
