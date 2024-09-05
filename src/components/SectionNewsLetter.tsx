export default function SectionNewsLetter() {
  return (
    <section className="mx-auto h-full max-w-7xl px-4 py-8 md:py-16">
      <div className="flex h-full w-full justify-center rounded-3xl bg-[#18181a] p-10 md:p-16">
        <div className="flex h-full w-full flex-col items-center gap-8 lg:w-2/4">
          <h1 className="text-center text-2xl font-extrabold text-[#f5f5f5] md:text-balance md:text-3xl lg:text-4xl">
            Join our community of over 2 million users today!
          </h1>
          <p className="max-w-xl text-center text-md text-[#a7a7a7] md:text-lg">
            Become part of the thousands of teams working together and achieving
            their best with Mambo.
          </p>
          <div className="flex w-full flex-wrap gap-4">
            <input
              type="text"
              placeholder="Enter your work email"
              className="h-fit w-1/2 flex-grow rounded-xl border-2 border-[#272526] bg-[#09090b] px-4 py-3 placeholder:text-sm placeholder:text-[#a4a09d] md:placeholder:text-md"
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
