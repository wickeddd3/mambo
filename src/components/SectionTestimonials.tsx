import Image from "next/image";

export default function SectionTestimonials() {
  return (
    <section className="h-full w-full py-8 md:py-12">
      <div className="h-full w-full bg-indigo-700 bg-image-testimonials bg-cover bg-center bg-no-repeat bg-blend-multiply">
        <div className="mx-auto flex h-full max-w-7xl flex-col items-center gap-12 py-24">
          <h1 className="w-3/4 text-balance text-center text-2xl font-extrabold text-[#f5f5f5] md:text-3xl lg:text-4xl">
            {`Helping the world's most innovative companies to work better, daily.`}
          </h1>
          <div className="flex w-full items-center justify-around gap-6">
            <div className="flex h-full w-2/5 gap-12 rounded-[2.5rem] bg-indigo-600 p-8">
              <div className="flex w-3/5 flex-col gap-8">
                <p className="text-sm font-normal">
                  {`"We introduced the team to the Mambo in just 15 minutes,
                  enabling then to use it during internal workshops. Convincing
                  our organization to adopt this product was a no-brainer."`}
                </p>
                <div className="flex flex-col">
                  <h6 className="text-semibold text-sm text-indigo-200">
                    Peter Johanson
                  </h6>
                  <h6 className="text-semibold text-sm text-indigo-200">
                    CEO of NordTech Solutions
                  </h6>
                </div>
              </div>
              <div className="h-full w-2/5 rounded-[2.5rem] shadow-md">
                <Image
                  src="/testimonials/client-1.jpg"
                  width={170}
                  height={150}
                  loading="eager"
                  alt="client-1"
                  className="rounded-[2.5rem]"
                />
              </div>
            </div>
            <div className="flex h-full w-2/5 gap-12 rounded-[2.5rem] bg-indigo-600 p-8">
              <div className="flex w-3/5 flex-col gap-8">
                <p className="text-sm font-normal">
                  {`"Our team found working with Mambo incredibly enjoyable, making
                  collaboration effortless and engaging. The positive impact on
                  our productivity was evident from day one."`}
                </p>
                <div className="flex flex-col">
                  <h6 className="text-semibold text-sm text-indigo-200">
                    Isabella Martinez-Ruiz
                  </h6>
                  <h6 className="text-semibold text-sm text-indigo-200">
                    CTO of LunaBelle Cosmetics
                  </h6>
                </div>
              </div>
              <div className="h-full w-2/5 rounded-[2.5rem] shadow-md">
                <Image
                  src="/testimonials/client-2.jpg"
                  width={170}
                  height={150}
                  loading="eager"
                  alt="client-1"
                  className="rounded-[2.5rem]"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-around">
            <button className="flex items-center gap-4 rounded-xl border-2 border-white px-8 py-3">
              <span className="text-md font-bold">
                Read more customer stories
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
