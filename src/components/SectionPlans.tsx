import IllustrationPricingPlans from "@/components/illustrations/IllustrationPricingPlans";

export default function SectionPlans() {
  return (
    <section className="mx-auto h-full max-w-7xl py-12">
      <div className="flex h-[340px] w-full items-center justify-between rounded-[2.5rem] bg-indigo-800 p-16">
        <div className="flex w-2/5 flex-col gap-6">
          <h1 className="text-balance text-4xl font-extrabold text-[#f5f5f5]">
            Flexible plans that adapt to your needs.
          </h1>
          <p className="max-w-xl text-lg text-indigo-200">
            Check out personalized pricing designed around your unique needs,
            ensuring you get the best value.
          </p>
          <button className="w-fit rounded-xl bg-indigo-600 px-14 py-3 font-semibold text-white">
            Go to Pricing
          </button>
        </div>
        <div className="flex w-3/5 items-center justify-center">
          <IllustrationPricingPlans width={300} height={300} />
        </div>
      </div>
    </section>
  );
}
