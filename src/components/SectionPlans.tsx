import IllustrationPricingPlans from "@/components/illustrations/IllustrationPricingPlans";

export default function SectionPlans() {
  return (
    <section className="mx-auto h-full max-w-7xl px-4 py-8 md:py-12">
      <div className="flex h-full w-full flex-wrap items-center justify-between rounded-[2.5rem] bg-indigo-800 p-6 md:p-8 lg:p-10">
        <div className="flex w-full flex-col items-center gap-6 md:w-2/5 md:items-start">
          <h1 className="text-balance text-center text-2xl font-extrabold text-[#f5f5f5] md:text-start md:text-3xl lg:text-4xl">
            Flexible plans that adapt to your needs.
          </h1>
          <p className="text-md max-w-xl text-center text-indigo-200 md:text-start md:text-lg">
            Check out personalized pricing designed around your unique needs,
            ensuring you get the best value.
          </p>
          <button className="md:text-md w-fit rounded-xl bg-indigo-600 px-14 py-3 text-sm font-semibold text-white">
            Go to Pricing
          </button>
        </div>
        <div className="flex w-full items-center justify-center md:w-3/5">
          <IllustrationPricingPlans width={300} height={300} />
        </div>
      </div>
    </section>
  );
}
