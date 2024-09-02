export default function SectionHero() {
  return (
    <section className="m-auto flex h-[70vh] max-w-7xl gap-24 py-12">
      <div className="h-full w-1/2">
        <div className="flex h-full w-full flex-col justify-center gap-8">
          <h6 className="text-md uppercase text-[#7d7d7f]">
            FREE 14 DAYS TRIAL
          </h6>
          <h1 className="text-7xl font-extrabold text-[#f5f5f5]">
            Experience seamless workflow.
          </h1>
          <p className="text-balance text-lg text-[#a7a7a7]">
            Maximize productivity and save time with our revolutionary approach.
            Deliver improved performance and better team coordination.
          </p>
          <div className="flex gap-4">
            <button className="text-md rounded-xl bg-indigo-600 px-8 py-3 font-semibold">
              Try for free
            </button>
            <button className="text-md rounded-xl border-2 border-white px-8 py-3 font-semibold">
              See how it works
            </button>
          </div>
        </div>
      </div>
      <div className="h-full w-1/2">
        <div className="h-full w-full rounded-bl-2xl rounded-tl-2xl border-y-2 border-l-2 border-indigo-600 py-2 pl-2">
          <div className="h-full w-full rounded-bl-2xl rounded-tl-2xl bg-black"></div>
        </div>
      </div>
    </section>
  );
}
