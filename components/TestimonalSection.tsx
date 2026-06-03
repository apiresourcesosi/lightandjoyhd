"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    review:
      "Absolutely beautiful craftsmanship. The wreath looked even better in person and completely transformed my front porch decor.",
  },
  {
    name: "Danielle Brooks",
    review:
      "The quality is outstanding and the packaging was so elegant. I’ve already received several compliments from neighbors.",
  },
  {
    name: "Rebecca Turner",
    review:
      "Light & Joy created the perfect custom wreath for my home. Stylish, luxurious, and made with incredible attention to detail.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-amber-200 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full bg-white/70 px-4 py-1 text-sm font-semibold tracking-wide text-green-900">
            Customer Reviews
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-green-950 md:text-5xl">
            Loved By Happy Customers
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-green-900/80">
            Thoughtfully handcrafted wreaths bringing warmth, beauty, and joy
            into homes across every season.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-[2rem] bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Decorative Quote */}
              <div className="absolute right-6 top-4 text-7xl font-black text-amber-100">
                ”
              </div>

              {/* Stars */}
              <div className="mb-6 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="relative z-10 text-lg leading-relaxed text-gray-700">
                "{testimonial.review}"
              </p>

              {/* Name */}
              <div className="mt-8 border-t border-stone-200 pt-5">
                <h3 className="text-lg font-bold text-green-950">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-gray-500">Verified Customer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
