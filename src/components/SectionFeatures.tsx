export default function SectionFeatures() {
  return (
    <section className="mx-auto h-full max-w-7xl py-12">
      <div className="flex h-full w-full flex-col items-center gap-8">
        <div className="flex items-center gap-4">
          <button className="rounded-xl bg-[#f5f3ff] px-14 py-3 font-semibold text-[#030315]">
            Innovate
          </button>
          <button className="px-14 py-3 font-semibold text-[#58585a]">
            Analyze
          </button>
          <button className="px-14 py-3 font-semibold text-[#58585a]">
            Design
          </button>
          <button className="px-14 py-3 font-semibold text-[#58585a]">
            Execute
          </button>
        </div>
        <div className="flex h-[500px] gap-24 py-12">
          <div className="h-full w-1/2">
            <div className="h-full w-full rounded-2xl bg-black"></div>
          </div>
          <div className="h-full w-1/2">
            <div className="flex h-full w-full flex-col justify-center gap-8">
              <h1 className="text-5xl font-extrabold text-[#f5f5f5]">
                Core capabilities and ways to accelerate innovation
              </h1>
              <p className="text-balance text-lg text-[#a7a7a7]">
                {`Explore our innovative solutions designed to revolutionize your
                experiece and kickstart your team's success.`}
              </p>
              <button className="w-fit text-lg font-normal text-indigo-600">
                Learn how to innovate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
