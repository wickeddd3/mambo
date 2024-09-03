export default function SectionNewsLetter() {
  return (
    <section className="mx-auto h-full max-w-7xl py-24">
      <div className="flex h-full w-full justify-center rounded-3xl bg-[#18181a] p-16">
        <div className="flex h-full w-2/4 flex-col items-center gap-8">
          <h1 className="text-balance text-center text-4xl font-extrabold text-[#f5f5f5]">
            Join our community of over 2 million users today!
          </h1>
          <p className="max-w-xl text-center text-lg text-[#a7a7a7]">
            Become part of the thousands of teams working together and achieving
            their best with Mambo.
          </p>
          <div className="flex w-full gap-4">
            <input
              type="text"
              placeholder="Enter your work email"
              className="h-fit w-1/2 flex-grow rounded-xl border-2 border-[#272526] bg-[#09090b] px-4 py-3 placeholder:text-[#a4a09d]"
            />
            <button className="text-md rounded-xl bg-indigo-600 px-8 py-3 font-bold">
              Sign up for FREE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
