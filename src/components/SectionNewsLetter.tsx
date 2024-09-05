export default function SectionNewsLetter() {
  return (
    <section className="mx-auto h-full max-w-7xl px-4 py-8 md:py-16">
      <div className="flex h-full w-full justify-center rounded-3xl bg-neutral-900 p-10 md:p-16">
        <div className="flex h-full w-full flex-col items-center gap-8 lg:w-2/4">
          <h1 className="text-center text-2xl font-extrabold text-neutral-100 md:text-balance md:text-3xl lg:text-4xl">
            Join our community of over 2 million users today!
          </h1>
          <p className="max-w-xl text-center text-md text-neutral-400 md:text-lg">
            Become part of the thousands of teams working together and achieving
            their best with Mambo.
          </p>
          <div className="flex w-full flex-wrap gap-4">
            <input
              type="text"
              placeholder="Enter your work email"
              className="h-fit w-1/2 flex-grow rounded-xl border-2 border-neutral-800 bg-neutral-950 px-4 py-3 placeholder:text-sm placeholder:text-neutral-400 md:placeholder:text-md"
            />
            <button className="w-full rounded-xl bg-indigo-600 px-8 py-3 text-sm font-bold md:w-fit md:text-md">
              Sign up for FREE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
