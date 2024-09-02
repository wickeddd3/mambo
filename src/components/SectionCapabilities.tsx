export default function SectionCapabilities() {
  const capabilities = [
    {
      name: "AI-Enhanced",
      description: `Experience advanced automation with intelligent algorithms to boost efficiency and streamline your tasks.`,
    },
    {
      name: "Usage Optimization",
      description:
        "Achieve peak performance using intelligent resource management and smart efficiency tools for your workflow.",
    },
    {
      name: "Integrations",
      description:
        "Seamlessly connect your favorite tools and platforms with our intelligent, hassle-free integration solutions.",
    },
    {
      name: "Historical Data",
      description:
        "Get access to past insights with comprehensive historical data for informed decision-making and planning.",
    },
    {
      name: "24/7 Support",
      description:
        "We're here for you around the clock with reliable 24/7 support, ensuring your needs are met anytime, anywhere.",
    },
    {
      name: "Community Plugins",
      description:
        "Enhance your UX with community-driven plugins, expanding functionality and customization options.",
    },
  ];

  return (
    <section className="mx-auto h-full max-w-7xl py-12">
      <div className="flex w-full flex-col items-center gap-10">
        <h1 className="max-w-2xl text-center text-4xl font-extrabold text-[#f5f5f5]">
          Core capabilities and ways to accelerate innovation.
        </h1>
        <p className="max-w-2xl text-center text-lg text-[#58585a]">
          Maximize your productivity and save time with our revolutionary
          product and its powerful set of features
        </p>
        <div className="flex w-full flex-wrap gap-8">
          {capabilities.map((capability) => (
            <div
              className="flex h-64 w-[30%] flex-col items-center gap-4 rounded-3xl bg-[#18181a] p-8"
              key={capability.name}
            >
              <div className="h-10 w-10 rounded-full bg-indigo-600"></div>
              <h6 className="text-xl font-extrabold text-white">
                {capability.name}
              </h6>
              <p className="text-md max-w-xl text-center text-[#a7a7a7]">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#58585a]">
          Explore 200+ plugins for limitless customization and enhanced
          functionality
        </p>
      </div>
    </section>
  );
}
