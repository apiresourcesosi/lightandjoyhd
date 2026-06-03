"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-green-950">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/heroBgImgNw.jpg"
          alt="Luxury wreath display"
          fill
          priority
          className="object-cover object-center opacity-80"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-green-950/80 to-green-900/40" />

      {/* Decorative Blur */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-400/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[85vh] max-w-7xl items-center px-6 py-24 lg:px-12">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <span className="mb-6 inline-flex items-center rounded-full border border-amber-200/30 bg-white/10 px-4 py-1 text-sm font-medium tracking-wide text-amber-200 backdrop-blur-md">
            Premium Handmade Wreaths
          </span>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Bring
            <span className="block text-amber-200">Light & Joy</span>
            Into Every Season
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-green-100 sm:text-xl">
            Discover luxury handcrafted wreaths and elegant home décor designed
            to transform your front door into a warm and welcoming statement
            piece year-round.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-8 py-4 text-base font-semibold text-green-950 shadow-xl transition duration-300 hover:scale-105 hover:bg-amber-200"
            >
              Order Now
            </Link>

            <Link
              href="/collections"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md transition duration-300 hover:border-amber-200 hover:text-amber-200"
            >
              Explore Collection
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <h3 className="text-3xl font-bold text-amber-200">500+</h3>
              <p className="mt-1 text-sm text-green-100">Happy Customers</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-amber-200">100%</h3>
              <p className="mt-1 text-sm text-green-100">Handmade Designs</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-amber-200">4.9★</h3>
              <p className="mt-1 text-sm text-green-100">Customer Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
