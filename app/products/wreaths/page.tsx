"use client";

import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const wreaths = [
  {
    id: 1,
    name: "Spring Blossom Wreath",
    price: "$89",
    image: "/images/wreath-1.jpg",
    description:
      "Soft florals with elegant greenery designed to brighten any entryway.",
    colors: ["Pink", "Cream", "Green"],
  },
  {
    id: 2,
    name: "Golden Harvest Wreath",
    price: "$105",
    image: "/images/wreath-2.jpg",
    description:
      "A warm seasonal wreath featuring amber florals and rustic textures.",
    colors: ["Amber", "Brown", "Gold"],
  },
  {
    id: 3,
    name: "Modern Evergreen Wreath",
    price: "$95",
    image: "/images/wreath-3.jpg",
    description:
      "Minimal luxury styling with eucalyptus accents and premium ribbon.",
    colors: ["Green", "White", "Silver"],
  },
  {
    id: 4,
    name: "Holiday Elegance Wreath",
    price: "$120",
    image: "/images/wreath-4.jpg",
    description:
      "Festive premium wreath crafted with ornaments and velvet ribbon.",
    colors: ["Red", "Gold", "Green"],
  },
];

export default function WreathGallery() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold tracking-wide text-green-900">
            Featured Collection
          </span>

          <h2 className="mt-5 text-4xl font-black tracking-tight text-green-950 md:text-5xl">
            Handmade Wreath Collection
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
            Discover elegant handcrafted wreaths designed to elevate your home
            décor with warmth, beauty, and seasonal charm.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {wreaths.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Price Badge */}
                <div className="absolute right-4 top-4 rounded-full bg-amber-300 px-4 py-2 text-sm font-bold text-green-950 shadow-lg">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-950">
                  {item.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>

                {/* Color Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.colors.map((color) => (
                    <span
                      key={color}
                      className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-900"
                    >
                      {color}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-900 px-5 py-3 font-semibold text-white transition duration-300 hover:bg-green-800 hover:text-amber-200">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
