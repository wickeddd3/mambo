"use client";

import Image from "next/image";
import { MoveLeft, MoveRight } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function SectionTestimonials() {
  const testimonials = [
    {
      name: "Peter Johanson",
      title: "CEO of NordTech Solutions",
      imagePath: "/testimonials/client-1.jpg",
      message: `"We introduced the team to the Mambo in just 15 minutes,
                  enabling then to use it during internal workshops. Convincing
                  our organization to adopt this product was a no-brainer."`,
    },
    {
      name: "Isabella Martinez-Ruiz",
      title: "CTO of LunaBelle Cosmetics",
      imagePath: "/testimonials/client-2.jpg",
      message: `"Our team found working with Mambo incredibly enjoyable, making
                  collaboration effortless and engaging. The positive impact on
                  our productivity was evident from day one."`,
    },
    {
      name: "Ethan Brody",
      title: "CTO of Broder Technologies",
      imagePath: "/testimonials/client-3.jpg",
      message: `"We introduced the team to the Mambo in just 15 minutes,
                  enabling then to use it during internal workshops. Convincing
                  our organization to adopt this product was a no-brainer."`,
    },
    {
      name: "Sandra Smith",
      title: "CEO of Venus Aesthetics",
      imagePath: "/testimonials/client-4.jpg",
      message: `"Our team found working with Mambo incredibly enjoyable, making
                  collaboration effortless and engaging. The positive impact on
                  our productivity was evident from day one."`,
    },
  ];

  return (
    <section className="h-full w-full py-8 md:py-12">
      <div className="h-full w-full bg-indigo-700 bg-image-testimonials bg-cover bg-center bg-no-repeat bg-blend-multiply">
        <div className="mx-auto flex h-full w-full flex-col items-center gap-8 py-10 md:gap-12 md:py-16">
          <div className="flex max-w-7xl justify-center px-4">
            <h1 className="w-3/4 text-balance text-center text-2xl font-extrabold text-[#f5f5f5] md:text-3xl lg:text-4xl">
              {`Helping the world's most innovative companies to work better, daily.`}
            </h1>
          </div>

          <div className="flex w-full items-center justify-around gap-6 px-4">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView="auto"
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide style={{ width: "500px" }} key={testimonial.name}>
                  <div className="flex h-full w-full gap-6 rounded-[2.5rem] bg-indigo-600 p-6 md:gap-12 md:p-8">
                    <div className="flex w-3/5 flex-col gap-8">
                      <p className="text-xs font-normal text-indigo-100 md:text-sm">
                        {testimonial.message}
                      </p>
                      <div className="flex flex-col">
                        <h6 className="text-semibold text-xs text-indigo-200 md:text-sm">
                          {testimonial.name}
                        </h6>
                        <h6 className="text-semibold text-xs text-indigo-200 md:text-sm">
                          {testimonial.title}
                        </h6>
                      </div>
                    </div>
                    <div className="h-full w-2/5 rounded-[2.5rem] shadow-md">
                      <Image
                        src={testimonial.imagePath ?? ""}
                        width={170}
                        height={150}
                        loading="eager"
                        alt="client-1"
                        className="h-auto w-auto rounded-[2.5rem]"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex w-full max-w-7xl items-center justify-between px-4">
            <button className="flex items-center gap-4 rounded-xl border-2 border-white px-4 py-2 md:px-8 md:py-3">
              <span className="text-sm font-bold text-white md:text-md">
                Read more customer stories
              </span>
            </button>
            <div className="flex items-center gap-2 md:gap-4">
              <button className="custom-prev cursor-pointer rounded-xl bg-indigo-600 p-3 hover:bg-indigo-700 md:p-4">
                <MoveLeft size={20} color="#f7f7f7" />
              </button>
              <button className="custom-next cursor-pointer rounded-xl bg-indigo-600 p-3 hover:bg-indigo-700 md:p-4">
                <MoveRight size={20} color="#f7f7f7" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
