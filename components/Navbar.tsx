"use client";

import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Web Design",
    href: "/services/web-design",
    description: "Modern responsive websites and landing pages.",
  },
  {
    title: "Branding",
    href: "/services/branding",
    description: "Build a memorable and recognizable brand.",
  },
  {
    title: "SEO",
    href: "/services/seo",
    description: "Improve rankings and increase traffic.",
  },
];

const products = [
  {
    title: "Wreaths",
    href: "/products/wreaths",
  },
  {
    title: "Home Decor",
    href: "/products/home-decor",
  },
  {
    title: "Seasonal",
    href: "/products/seasonal",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="border-t-4 border-green-300 bg-green-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-wide transition hover:text-amber-200"
        >
          <Image
            src="/ljhdLogo_colorNoBgGld.png"
            alt="Official Logo"
            width={200}
            height={100}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink className={navLinkStyle}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerStyle}>
                  Services
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-100 gap-3 p-4 md:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block rounded-md p-3 transition"
                          >
                            <div className="text-sm font-semibold text-green-900">
                              {service.title}
                            </div>

                            <p className="mt-1 text-sm text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Products Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerStyle}>
                  Products
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid w-62.5 gap-2 p-4">
                    {products.map((product) => (
                      <li key={product.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={product.href}
                            className="rounded-md px-3 py-2 text-sm font-medium text-green-900 transition"
                          >
                            {product.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about" passHref>
                  <NavigationMenuLink className={navLinkStyle}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact" passHref>
                  <NavigationMenuLink className={navLinkStyle}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuViewport />
          </NavigationMenu>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-md p-2 transition hover:bg-green-800 md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-green-700 bg-green-900 md:hidden">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            <Link href="/" className={mobileLinkStyle}>
              Home
            </Link>

            <div className="space-y-1">
              <p className="px-3 pt-2 text-sm font-semibold uppercase tracking-wide text-green-300">
                Services
              </p>

              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className={mobileSubLinkStyle}
                >
                  {service.title}
                </Link>
              ))}
            </div>

            <div className="space-y-1">
              <p className="px-3 pt-2 text-sm font-semibold uppercase tracking-wide text-green-300">
                Products
              </p>

              {products.map((product) => (
                <Link
                  key={product.title}
                  href={product.href}
                  className={mobileSubLinkStyle}
                >
                  {product.title}
                </Link>
              ))}
            </div>

            <Link href="/about" className={mobileLinkStyle}>
              About
            </Link>

            <Link href="/contact" className={mobileLinkStyle}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

const navLinkStyle =
  "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:text-amber-200 focus:text-amber-200 focus:outline-none hover:bg-transparent uppercase";

const triggerStyle =
  "bg-transparent text-white hover:bg-transparent hover:text-amber-200 focus:bg-transparent focus:text-amber-200 data-[state=open]:bg-transparent data-[state=open]:text-amber-200 uppercase";

const mobileLinkStyle =
  "rounded-md px-3 py-2 text-base font-medium transition hover:bg-green-800 hover:text-amber-200";

const mobileSubLinkStyle =
  "block rounded-md px-6 py-2 text-sm transition hover:bg-green-800 hover:text-amber-200";
