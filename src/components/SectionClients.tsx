export default function SectionClients() {
  return (
    <section className="mx-auto h-full max-w-7xl px-4 py-8 md:py-12">
      <div className="flex h-full w-full flex-col items-center justify-center gap-8">
        <p className="max-w-lg text-center text-md font-medium text-neutral-600 md:text-lg">
          The trusted choice of professionals and teams across leading global
          companies
        </p>
        <div className="flex w-full flex-wrap items-center justify-center gap-4">
          {Array.from({ length: 7 }, (_, index) => (
            <div
              className="h-20 w-40 rounded-2xl bg-neutral-800"
              key={index}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
