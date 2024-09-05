import { MoveRight } from "lucide-react";

export default function SectionFeatures() {
  return (
    <section className="mx-auto h-full max-w-7xl px-4 py-8 md:py-12">
      <div className="flex h-full w-full flex-col items-center gap-8">
        <div className="flex w-full flex-wrap items-center justify-center gap-1 sm:flex-nowrap md:gap-4">
          <button className="w-full rounded-xl bg-[#f5f3ff] px-4 py-3 text-sm font-semibold text-[#030315] sm:w-fit sm:px-6 md:px-8 lg:px-14 lg:text-md">
            Innovate
          </button>
          <button className="w-full px-4 py-3 text-sm font-semibold text-[#58585a] sm:w-fit sm:px-6 md:px-8 lg:px-14 lg:text-md">
            Analyze
          </button>
          <button className="w-full px-4 py-3 text-sm font-semibold text-[#58585a] sm:w-fit sm:px-6 md:px-8 lg:px-14 lg:text-md">
            Design
          </button>
          <button className="w-full px-4 py-3 text-sm font-semibold text-[#58585a] sm:w-fit sm:px-6 md:px-8 lg:px-14 lg:text-md">
            Execute
          </button>
        </div>
        <div className="flex h-full w-full flex-wrap-reverse gap-12 py-4 md:gap-14 md:py-12 lg:flex-nowrap">
          <div className="h-full w-full lg:w-1/2">
            <div className="h-[360px] w-full rounded-2xl bg-black md:h-[400px]"></div>
          </div>
          <div className="h-full w-full lg:w-1/2">
            <div className="flex h-full w-full flex-col justify-center gap-8">
              <h1 className="text-3xl font-extrabold text-[#f5f5f5] md:text-4xl">
                Core capabilities and ways to accelerate innovation
              </h1>
              <p className="text-balance text-md text-[#a7a7a7] md:text-lg">
                {`Explore our innovative solutions designed to revolutionize your
                experiece and kickstart your team's success.`}
              </p>
              <button className="flex w-fit items-center gap-4">
                <span className="text-md font-normal text-indigo-600 md:text-lg lg:text-xl">
                  Learn how to innovate
                </span>
                <MoveRight size={30} color="#5046e6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
