"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t-4 border-green-300 bg-green-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Logo + Brand */}
          <div>
            <Link href="/" className="inline-block">
              <div className="relative h-20 w-55">
                <Image
                  src="/ljhdLogo_color_banner.png"
                  alt="Light & Joy Home Decor"
                  width={500}
                  height={100}
                  className="object-contain object-left bg-green-300 p-2"
                />
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-green-100">
              Elegant handcrafted wreaths and luxury home décor designed to
              bring warmth, beauty, and joy into every home.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-amber-200">Quick Links</h3>

            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-green-100 transition hover:text-amber-200"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-green-100 transition hover:text-amber-200"
                >
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/shipping&returns"
                  className="text-green-100 transition hover:text-amber-200"
                >
                  Shipping & Returns
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-green-100 transition hover:text-amber-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-amber-200">Follow Us</h3>

            <p className="mt-6 text-sm leading-relaxed text-green-100">
              Stay connected for seasonal collections, home décor inspiration,
              and exclusive product releases.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:border-amber-200 hover:bg-amber-200 hover:text-green-950"
              >
                <FaFacebook className="h-5 w-5" />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:border-amber-200 hover:bg-amber-200 hover:text-green-950"
              >
                <FaInstagram className="h-5 w-5" />
              </Link>

              <Link
                href="https://pinterest.com"
                target="_blank"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:border-amber-200 hover:bg-amber-200 hover:text-green-950"
              >
                <FaPinterest className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-green-100 md:flex-row">
            <p>
              © {new Date().getFullYear()} Light & Joy Home Decor. All rights
              reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="transition hover:text-amber-200"
              >
                Privacy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="transition hover:text-amber-200"
              >
                Terms
              </Link>

              <Link href="/cookies" className="transition hover:text-amber-200">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
